import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useDarkMode } from "./../util/theme";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 40,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <Hidden smDown={true} implementation="css">
              <Button component={Link} to="/about" color="inherit">
                {t('nav.about')}
              </Button>
              <Button component={Link} to="/pricing" color="inherit">
                {t('nav.pricing')}
              </Button>
              <Button component={Link} to="/contact" color="inherit">
                {t('nav.contact')}
              </Button>
              <Button
                color="inherit"
                aria-label="More"
                aria-controls="more-menu"
                aria-haspopup="true"
                onClick={(event) => {
                  handleOpenMenu(event, "more-menu");
                }}
              >
                {t('nav.more')}
                <ExpandMoreIcon className={classes.buttonIcon} />
              </Button>
              <Menu
                id="more-menu"
                open={menuState && menuState.id === "more-menu" ? true : false}
                anchorEl={menuState && menuState.anchor}
                getContentAnchorEl={undefined}
                onClick={handleCloseMenu}
                onClose={handleCloseMenu}
                keepMounted={true}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem component={Link} to="/faq">
                  {t('nav.faq')}
                </MenuItem>
              </Menu>
            </Hidden>
            <div className={classes.spacer} />
            <Hidden smDown={true} implementation="css">
              <LanguageSwitcher />
              <Box component="span" ml={1} />
              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}
                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItem component={Link} to="/about" button={true}>
            <ListItemText>{t('nav.about')}</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/pricing" button={true}>
            <ListItemText>{t('nav.pricing')}</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/contact" button={true}>
            <ListItemText>{t('nav.contact')}</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/faq" button={true}>
            <ListItemText>{t('nav.faq')}</ListItemText>
          </ListItem>
          <ListItem
            button={true}
            component="a"
            href="https://medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemText>Blog</ListItemText>
          </ListItem>
          <ListItem>
            <LanguageSwitcher />
          </ListItem>
          <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}
              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
