import React from "react";
import { useTranslation } from 'react-i18next';
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection from "./../components/FeaturesSection";
import VideoSection from "./../components/VideoSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  const { t } = useTranslation();

  return (
    <>
      <Meta />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="https://i.imgur.com/CGfH9oT.png"
        buttonText={t('hero.contactUs')}
        buttonColor="primary"
        buttonPath="/contact"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t('features.title')}
        subtitle={t('features.subtitle')}
      />
      {/* <VideoSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t('video.title')}
        subtitle={t('video.subtitle')}
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      /> */}
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title={t('newsletter.title')}
        subtitle={t('newsletter.subtitle')}
        buttonText={t('newsletter.subscribe')}
        buttonColor="primary"
        inputPlaceholder={t('newsletter.placeholder')}
        subscribedMessage={t('newsletter.success')}
      />
    </>
  );
}

export default IndexPage;
