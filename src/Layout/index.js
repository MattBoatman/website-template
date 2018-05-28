import React from "react";
import InitialView from "../InitialView";
import Section from "../Section";
import Footer from "../Footer";
import beach from "../InitialView/beach.jpg";

const Layout = () => {
  return (
    <div>
      <InitialView />
      <Section
        backgroundColor="#f7f9fb"
        color="#424242"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum, erat eu elementum mattis, arcu mauris venenatis elit, ac ullamcorper diam lectus eget quam. Suspendisse finibus odio quis felis malesuada, at lacinia lorem gravida. Duis ultrices a sapien et sagittis. Sed laoreet molestie vulputate. Mauris at diam nulla. Fusce dignissim semper est. Mauris eu leo at eros iaculis auctor. Ut elit tellus, accumsan nec elit sed, viverra elementum nisi. Curabitur a elit at metus imperdiet iaculis. Quisque vel quam ut erat convallis semper sed nec metus. Curabitur pharetra sem eleifend turpis euismod, vitae porta urna maximus.",
          "Curabitur turpis lacus, tristique nec quam vitae, euismod facilisis neque. Quisque eu pharetra mauris. Mauris nec nulla interdum, porttitor dolor quis, pharetra metus. In convallis sem lacus, a commodo dui dignissim sed. In viverra sapien sem, eget tincidunt felis congue at. Nulla auctor id leo non pulvinar. Cras eget porta libero, eu rutrum nisl."
        ]}
        imageSrc={beach}
      />
      <Section
        backgroundColor="#8FC1E3"
        color="#f7f9fb"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum, erat eu elementum mattis, arcu mauris venenatis elit, ac ullamcorper diam lectus eget quam. Suspendisse finibus odio quis felis malesuada, at lacinia lorem gravida. Duis ultrices a sapien et sagittis. Sed laoreet molestie vulputate. Mauris at diam nulla. Fusce dignissim semper est. Mauris eu leo at eros iaculis auctor. Ut elit tellus, accumsan nec elit sed, viverra elementum nisi. Curabitur a elit at metus imperdiet iaculis. Quisque vel quam ut erat convallis semper sed nec metus. Curabitur pharetra sem eleifend turpis euismod, vitae porta urna maximus.",
          "Curabitur turpis lacus, tristique nec quam vitae, euismod facilisis neque. Quisque eu pharetra mauris. Mauris nec nulla interdum, porttitor dolor quis, pharetra metus. In convallis sem lacus, a commodo dui dignissim sed. In viverra sapien sem, eget tincidunt felis congue at. Nulla auctor id leo non pulvinar. Cras eget porta libero, eu rutrum nisl."
        ]}
        flipPhoto
        imageSrc={beach}
      />
      <Footer />
    </div>
  );
};

export default Layout;
