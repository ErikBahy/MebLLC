import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import newsletter from "./../util/newsletter";
import contact from "./../util/contact";

function Newsletter(props) {
  const [subscribed, setSubscribed] = useState(false);

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ({ email }) => {
    // Create contact data object
    const contactData = {
      name: email,
      email: email,
      message: email
    };

    // Submit using contact utility
    contact.submit(contactData)
      .then(() => {
        setSubscribed(true);
        // Parent component can optionally
        // find out when subscribed.
        props.onSubscribed && props.onSubscribed();
      })
      .catch((error) => {
        console.error("Failed to send subscription email:", error);
        setSubscribed(true);
        props.onSubscribed && props.onSubscribed();
      });
  };

  return (
    <>
      {subscribed === false && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container={true} spacing={2}>
            <Grid item={true} xs={true}>
              <TextField
                variant="outlined"
                type="email"
                label="Email"
                name="email"
                error={errors.email ? true : false}
                helperText={errors.email && errors.email.message}
                fullWidth={true}
                inputRef={register({
                  required: "Please enter an email address",
                })}
              />
            </Grid>
            <Box display="flex" alignItems="stretch" clone={true}>
              <Grid item={true} xs="auto">
                <Button
                  variant="contained"
                  color={props.buttonColor}
                  size="large"
                  type="submit"
                >
                  {props.buttonText}
                </Button>
              </Grid>
            </Box>
          </Grid>
        </form>
      )}

      {subscribed === true && <div>{props.subscribedMessage}</div>}
    </>
  );
}

export default Newsletter;
