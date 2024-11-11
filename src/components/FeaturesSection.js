import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Add border that contrasts lightly with background color.
    // We use boxShadow so that it's hidden around outer edge
    // due to container <Card> having overflow: hidden
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

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Accompanying VIP Personalities",
      body: "Our elite security team ensures the safety and comfort of VIPs, providing discreet and professional protection at all times.",
      image:
        "https://www.p-3-security.com/wp-content/uploads/2020/01/Personenschutz_und_VIP-Security_6-2.jpg",
    },
    {
      title: " Luxury Escort Services for VIP Accompaniment",
      body: "We offer luxurious and secure escort services for VIP clients, combining elegance with top-tier security.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWTeDjrQ5djB2wkM-WjNxsuyHs2tcOhzXYg&s",
    },
    {
      title: "Physical Security and Protection of Properties",
      body: "Ensure the utmost protection of your properties with our advanced physical security, engineered to prevent and swiftly counteract any potential threats.",
      image: "https://i.imgur.com/FegsL5M.png",
    },
    {
      title: "Security Services in Casinos",
      body: "Specialized security services for casinos, ensuring a safe and secure environment for guests and staff.",
      image: "https://i.imgur.com/Lh9bxdu.png",
    },
    {
      title: "Monitoring Properties through the Operations Room",
      body: "Our advanced operations room provides continuous 24/7 monitoring and swift response to any security breaches, ensuring immediate and effective action.",
      image: "https://i.imgur.com/kGUNeiv.png",
    },
    {
      title: "Other Security Services",
      body: "We offer a wide range of security services tailored to various needs, including: Residential homes and private parties, tours and tourist events, stadiums and football matches, warehouses, banks, business centers, shopping centers, fairs, construction sites, residences, government institutions, and hotels and pubs.",
      image:
        "https://www.p-3-security.com/wp-content/uploads/2020/01/Personenschutz_und_VIP-Security_6-2.jpg",
    },
  ];

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
        <Card raised={false}>
          <Grid container={true}>
            {items.map((item, index) => (
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
