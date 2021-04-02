import * as React from "react";
import Slideshow from "../../component/Slideshow";

const LandingPage: React.FC = () => {
  return (
    <>
      <Slideshow tab1='Vegetable' tab2='Fruits' tab3='Others'/>
    </>
  );
};

export default LandingPage;
