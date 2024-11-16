import React from "react";
import { useTranslation } from 'react-i18next';
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  const { t } = useTranslation();
  
  return (
    <>
      <Meta title="About" description="Learn about our security team" />
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="/images/meb11.jpg"
        bgImageOpacity={0.5}
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t('about.team.title')}
        subtitle={t('about.team.subtitle')}
      />
    </>
  );
}

export default AboutPage;
