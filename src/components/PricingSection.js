import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(3),
  },
  serviceIcon: {
    fontSize: "3rem",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  highlight: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }
}));

function PricingSection(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const services = [
    {
      title: t('pricing.vip.title'),
      description: t('pricing.vip.description'),
      icon: "🛡️"
    },
    {
      title: t('pricing.property.title'),
      description: t('pricing.property.description'),
      icon: "🏢"
    },
    {
      title: t('pricing.events.title'),
      description: t('pricing.events.description'),
      icon: "🎯"
    },
    {
      title: t('pricing.casino.title'),
      description: t('pricing.casino.description'),
      icon: "🎰"
    },
    {
      title: t('pricing.monitoring.title'),
      description: t('pricing.monitoring.description'),
      icon: "📹"
    },
    {
      title: t('pricing.other.title'),
      description: t('pricing.other.description'),
      icon: "🔒"
    }
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box className={classes.highlight}>
          <Typography variant="h4" align="center" gutterBottom>
            {t('pricing.customTitle')}
          </Typography>
          <Typography variant="subtitle1" align="center">
            {t('pricing.customSubtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h1" className={classes.serviceIcon}>
                    {service.icon}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {service.description}
                  </Typography>
                  <Box mt="auto" pt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      href="/contact"
                    >
                      {t('pricing.contactUs')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default PricingSection;
