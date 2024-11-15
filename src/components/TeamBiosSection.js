import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    height: "300px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

// Define the image paths
const galleryImages = [
  "/images/meb1.png",
  "/images/meb2.jpg",
  "/images/meb3.jpg",
  "/images/meb4.jpg",
  "/images/meb5.jpg",
  "/images/meb6.jpg"
];

function TeamBiosSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container spacing={2}>
          {galleryImages.map((imageUrl, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className={classes.imageContainer}>
                <img
                  src={imageUrl}
                  alt={`Security ${index + 1}`}
                  className={classes.image}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
