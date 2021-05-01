import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import {SliderContiner} from "../../styled/PagesStyle"

const images = [
    { url: "https://www.magltk.com/wp-content/uploads/2020/09/%D9%84%D8%BA%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9.png" },
    { url: "https://www.trepconnection.com/main/wp-content/uploads/2019/08/coming-soon-event.jpg" },
    { url: "https://www.trepconnection.com/main/wp-content/uploads/2019/08/coming-soon-event.jpg" },
    ];
  
const Slider = () => {
    return (
      <SliderContiner>
        <SimpleImageSlider
          width={"70%"}
          height={"50%"}
          images={images}
          useGPURender={true}
          showBullets={true}
          showNavs={true}
          navStyle={true}
          slideDuration={1.4}
        />
      </SliderContiner>
    );
  }
  export default Slider;