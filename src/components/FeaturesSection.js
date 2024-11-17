import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import { useTranslation } from 'react-i18next';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    boxShadow: `1px 1px 0 0 ${emphasize(theme.palette.background.paper, 0.08)}`,
    textAlign: "center",
  },
  imageContainer: {
    margin: "0 auto",
    maxWidth: "200px",
    marginBottom: "30px",
    "& img": {
      width: "100%",
    },
  },
}));

// Define images outside the component (you can move this to a separate config file if preferred)
const featureImages = [
  "/images/meb11.jpg",  // Replace with your actual image paths
  "/images/meb13.jpg",
  "https://i.imgur.com/FegsL5M.png",
  "/images/meb15.png",
  "/images/meb16.png",
  "/images/meb2.jpg"
];

function FeaturesSection(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  // Get items from translations
  const items = t('features.items', { returnObjects: true });

  // Combine translations with images
  const itemsWithImages = items.map((item, index) => ({
    ...item,
    image: featureImages[index]
  }));

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={t('features.title')}
          subtitle={t('features.subtitle')}
          size={4}
          textAlign="center"
        />
        <Card raised={false}>
          <Grid container={true}>
            {itemsWithImages.map((item, index) => (
              <Grid
                item={true}
                xs={12}
                md={6}
                className={classes.gridItem}
                key={index}
              >
                <Box p={6}>
                  <div className={classes.imageContainer}>
                    <AspectRatio ratio={4 / 3}>
                      <img src={item.image} alt={item.title} />
                    </AspectRatio>
                  </div>
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">{item.body}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
