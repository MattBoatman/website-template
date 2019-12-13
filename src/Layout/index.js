import React from "react";
import InitialView from "../InitialView";
import Section from "../Section";
import Footer from "../Footer";
import kim from "../kim.png";
import hands from "../hands.jpg";
import airplane from "../airplane.jpg";

const Layout = () => {
  return (
    <div>
      <InitialView />
      <Section
        backgroundColor="#31708E"
        color="#f7f9fb"
        title="About Kimberly"
        paragraphs={[
          "Kimberly is a licensed massage therapist in the state of Texas (TX license: MT#005028). She has over 25 years of professional experience. She is on call 24 hours a day, so call at anytime and Kimberly will make your stress a thing of the past!"
        ]}
        imageSrc={kim}
        id="aboutKimberly"
        buttonText="Services"
        scrollId="services"
        flipPhoto
        altText="About"
        addPhoneNumber
      />
      <Section
        backgroundColor="#f7f9fb"
        color="#000"
        title="DFW Dallas Outcall Massage"
        paragraphs={[
          "Kimberly offers 24/7 mobile massage, so you don't have to stress about transportation, traffic, or parking.",
          "If you are calling from a hotel in the DFW airport area, Kimberly will be there in 30 minutes or less!"
        ]}
        imageSrc={airplane}
        id="dallasMassage"
        buttonText="About Kimberly"
        scrollId="aboutKimberly"
        altText="Dallas"
        addPhoneNumber
      />
      <Section
        backgroundColor="#687864"
        color="#ffffff"
        title="Services"
        paragraphs={[
          "Your massage can include all of the following services",
          "- Swedish Relaxation",
          "- Full body therapy",
          "- Light touch to deep tissue rub pressure",
          "- Reflexology",
          "- Unscented organic products",
          "- Music",
          "- LED candle lighting"
        ]}
        imageSrc={hands}
        id="services"
        altText="Services"
      />
      <Footer />
    </div>
  );
};

export default Layout;
