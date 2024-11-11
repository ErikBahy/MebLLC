import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection from "./../components/FeaturesSection";
import VideoSection from "./../components/VideoSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Entrust Your Safety to MEB LLC Security"
        subtitle="MEB LLC Security provides top-level security, correct and efficient solutions  to meet the specific needs of each client. Our highly trained and skilled personnel excel in VIP accompaniment, property protection, and event security, ensuring uncompromising safety and  protection."
        image="https://i.imgur.com/CGfH9oT.png"
        buttonText="Contact us"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Our Key Security Services"
        subtitle="Providing Unmatched Protection and Expertise Across Various Environments"
      />
      <VideoSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Watch the video below for a quick introduction to our team"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay Secure with MEB LLC Security"
        subtitle=" Contact Us Today for Unmatched Protection and Peace of Mind"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
