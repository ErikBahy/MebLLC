import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import { ThemeProvider } from "./../util/theme";
import { I18nextProvider } from 'react-i18next';
import i18n from './../i18n';

function App(props) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Router>
          <>
            <Navbar
              color="default"
              logo="https://i.imgur.com/D1JPegU.png"
              logoInverted="https://i.imgur.com/D1JPegU.png"
            />

            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/faq" component={FaqPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/pricing" component={PricingPage} />
              <Route exact path="/legal/:section" component={LegalPage} />
              <Route component={NotFoundPage} />
            </Switch>

            <Footer
              bgColor="default"
              size="medium"
              bgImage=""
              bgImageOpacity={1}
              description="Rest assured with us around"
              copyright={`© ${new Date().getFullYear()} MEB LLC Security`}
              logo="https://i.imgur.com/D1JPegU.png"
              logoInverted="https://i.imgur.com/D1JPegU.png"
              sticky={true}
            />
          </>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
