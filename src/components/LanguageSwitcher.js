import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    marginRight: theme.spacing(1),
  },
  button: {
    minWidth: 'auto',
    padding: theme.spacing(0.25, 0.75),
    fontSize: '0.875rem',
  },
  activeButton: {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.dark,
    },
  },
  inactiveButton: {
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
    },
  }
}));

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const classes = useStyles();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const isEnglish = i18n.language === 'en';

  return (
    <ButtonGroup className={classes.buttonGroup} color="inherit">
      <Button
        className={`${classes.button} ${isEnglish ? classes.activeButton : classes.inactiveButton}`}
        onClick={() => changeLanguage('en')}
      >
        {i18n.language === 'sq' ? 'Anglisht' : 'English'}
      </Button>
      <Button
        className={`${classes.button} ${!isEnglish ? classes.activeButton : classes.inactiveButton}`}
        onClick={() => changeLanguage('sq')}
      >
        {i18n.language === 'sq' ? 'Shqip' : 'Albanian'}
      </Button>
    </ButtonGroup>
  );
}

export default LanguageSwitcher; 