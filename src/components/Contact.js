import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from "react-hook-form";
import contact from "./../util/contact";
import { useTranslation } from 'react-i18next';

function Contact(props) {
  const { t } = useTranslation();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    contact
      .submit(data)
      .then(() => {
        // Clear form
        reset();
        // Show success alert message
        setFormAlert({
          type: "success",
          message: "Your message has been sent!",
        });
      })
      .catch((error) => {
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <>
      {formAlert && (
        <Box mb={3}>
          <Alert severity={formAlert.type}>
            {formAlert.type === "success" ? t('contact.form.success') : formAlert.message}
          </Alert>
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2}>
          {props.showNameField && (
            <Grid item={true} xs={12} md={6}>
              <TextField
                variant="outlined"
                type="text"
                label={t('contact.form.name')}
                name="name"
                error={errors.name ? true : false}
                helperText={errors.name && t('contact.form.nameRequired')}
                fullWidth={true}
                inputRef={register({
                  required: t('contact.form.nameRequired'),
                })}
              />
            </Grid>
          )}

          <Grid item={true} xs={12} md={props.showNameField ? 6 : 12}>
            <TextField
              variant="outlined"
              type="email"
              label={t('contact.form.email')}
              name="email"
              error={errors.email ? true : false}
              helperText={errors.email && t('contact.form.emailRequired')}
              fullWidth={true}
              inputRef={register({
                required: t('contact.form.emailRequired'),
              })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              variant="outlined"
              type="text"
              label={t('contact.form.message')}
              name="message"
              multiline={true}
              rows={5}
              error={errors.message ? true : false}
              helperText={errors.message && t('contact.form.messageRequired')}
              fullWidth={true}
              inputRef={register({
                required: t('contact.form.messageRequired'),
              })}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={pending}
            >
              {!pending && <span>{t('contact.form.send')}</span>}
              {pending && <CircularProgress size={28} />}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Contact;
