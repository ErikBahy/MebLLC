import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  languageButton: {
    marginRight: theme.spacing(1),
    minWidth: 'auto',
    padding: theme.spacing(0.5, 1),
  }
}));

function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <Button
        color="inherit"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        className={classes.languageButton}
      >
        {i18n.language === 'sq' ? 'SQ' : 'EN'}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('sq')}>Shqip</MenuItem>
      </Menu>
    </div>
  );
}

export default LanguageSwitcher; 