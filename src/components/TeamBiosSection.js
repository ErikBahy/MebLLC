import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    width: "100%",
    height: "300px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
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
  videoWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    "& > div": {
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

// Define the media items (mix of images and videos)
const galleryMedia = [
  { type: "image", src: "/images/meb1.png" },
  { type: "video", src: "/images/vid1.mp4" },
  { type: "image", src: "/images/meb7.jpg" },
  { type: "image", src: "/images/meb8.jpg" },
  { type: "image", src: "/images/meb2.jpg" },
  { type: "video", src: "/images/vid2.mp4" },
  { type: "image", src: "/images/meb9.jpg" },
  { type: "image", src: "/images/meb10.jpg" },
  { type: "image", src: "/images/meb3.jpg" },
  { type: "video", src: "/images/vid3.mp4" },
  { type: "image", src: "/images/meb11.jpg" },
  { type: "image", src: "/images/meb12.jpg" },
  { type: "image", src: "/images/meb13.jpg" },
  { type: "image", src: "/images/meb14.jpg" },
  { type: "video", src: "/images/vid4.mp4" },
  { type: "image", src: "/images/meb4.jpg" },
  { type: "image", src: "/images/meb5.jpg" },
  { type: "image", src: "/images/meb6.jpg" },
];

function TeamBiosSection(props) {
  const classes = useStyles();

  const renderMedia = (item, index) => {
    if (item.type === "image") {
      return (
        <img
          src={item.src}
          alt={`Security ${index + 1}`}
          className={classes.image}
        />
      );
    } else {
      return (
        <div className={classes.videoWrapper}>
          <video
            src={item.src}
            className={classes.video}
            controls
            preload="metadata"
            poster={item.thumbnail}
          />
        </div>
      );
    }
  };

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
          {galleryMedia.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className={classes.mediaContainer}>
                {renderMedia(item, index)}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
