import React from "react";
import InitialView from "../InitialView";
import Section from "../Section";
import Footer from "../Footer";
import beach from "../InitialView/beach.jpg";
import kim from "../kim.png";
import hands from "../hands.jpg";
import dallas from "../dallas.jpg";

const Layout = () => {
  return (
    <div>
      <InitialView />
      <Section
        backgroundColor="#f7f9fb"
        color="#424242"
        title="Dallas Outcall Massage"
        paragraphs={[
          "Kimberly offers 24/7 mobile massage, so you don't have to stress about transportation, traffic, or parking.",
          "If you are calling from a DFW airport hotel, Kimberly will be there in as little as 30 minutes."
        ]}
        imageSrc={dallas}
        id="dallasMassage"
        buttonText="About Kimberly"
        scrollId="aboutKimberly"
      />
      <Section
        backgroundColor="#31708E"
        color="#f7f9fb"
        title="About Kimberly"
        paragraphs={[
          "Kimberly is a professionally licensed massage therapist (TX license MT#005028). She has over 25 years of professional experience. She is on call 24 hours a day, so call at anytime and Kimberly will make your stress a thing of the past!"
        ]}
        imageSrc={kim}
        id="aboutKimberly"
        buttonText="Services"
        scrollId="services"
        flipPhoto
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
          "- Unscented organic products"
        ]}
        imageSrc={hands}
        id="services"
      />
      <Footer />
    </div>
  );
};

export default Layout;
