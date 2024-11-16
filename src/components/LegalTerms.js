import React from "react";
import LongContent from "./LongContent";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  licenseImage: {
    maxWidth: "100%",
    height: "auto",
    margin: "2rem 0",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
  },
  section: {
    marginBottom: theme.spacing(4),
  }
}));

function LegalTerms(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <LongContent>
      <Typography variant="h1" gutterBottom>{t('legal.terms.title')}</Typography>
      
      <Box className={classes.section}>
        <Typography variant="h2" gutterBottom>{t('legal.terms.sections.licensing.title')}</Typography>
        <Typography paragraph>
          {t('legal.terms.sections.licensing.content')}
        </Typography>
        <img 
          src="/images/license1.JPG"
          alt="MEB LLC Security License"
          className={classes.licenseImage}
        />
      </Box>

      <Box className={classes.section}>
        <Typography variant="h2" gutterBottom>{t('legal.terms.sections.services.title')}</Typography>
        <Typography paragraph>
          {t('legal.terms.sections.services.content')}
        </Typography>
      </Box>

      <Box className={classes.section}>
        <Typography variant="h2" gutterBottom>{t('legal.terms.sections.obligations.title')}</Typography>
        <Typography paragraph>
          {t('legal.terms.sections.obligations.content')}
        </Typography>
        <ul>
          {t('legal.terms.sections.obligations.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Box>

      <Box className={classes.section}>
        <Typography variant="h2" gutterBottom>{t('legal.terms.sections.insurance.title')}</Typography>
        <Typography paragraph>
          {t('legal.terms.sections.insurance.content')}
        </Typography>
        <ul>
          {t('legal.terms.sections.insurance.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Box>

      <Box className={classes.section}>
        <Typography variant="h2" gutterBottom>{t('legal.terms.sections.confidentiality.title')}</Typography>
        <Typography paragraph>
          {t('legal.terms.sections.confidentiality.content')}
        </Typography>
      </Box>

      <Box className={classes.section}>
        <Typography variant="h2" gutterBottom>{t('legal.terms.sections.termination.title')}</Typography>
        <Typography paragraph>
          {t('legal.terms.sections.termination.content')}
        </Typography>
      </Box>

      <Typography variant="body2" color="textSecondary" style={{ marginTop: '2rem' }}>
        {t('legal.terms.sections.lastUpdated')} {new Date().toLocaleDateString()}
      </Typography>
    </LongContent>
  );
}

export default LegalTerms;
