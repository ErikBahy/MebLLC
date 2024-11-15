import React from "react";
import { useTranslation } from 'react-i18next';
import Meta from "./../components/Meta";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  const { t } = useTranslation();
  
  return (
    <>
      <Meta title={t('contact.title')} />
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        buttonText={t('contact.form.send')}
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default ContactPage;
