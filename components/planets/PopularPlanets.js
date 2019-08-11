import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { PSSTitle } from "../styles/popstarshipStyles";

class PlanetSlider extends Component {
  render() {
    var settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      transitionMode: "scroll",
      cellSpacing: 60
    };
    return (
      <>
        <PSSTitle>
          <h2>Popular Planets</h2>
          <hr />
        </PSSTitle>
        <Carousel {...settings}>
          <>
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/planet-1_xzjgqs.jpg" />
            <p style={styles}>Corellia</p>
          </>
          <>
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/planet-2_trvxyi.jpg" />
            <p style={styles}>Ord Mantrell</p>
          </>
          <>
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435039/star-wars-dir/planet-3_p5qhll.jpg" />
            <p style={styles}>Endor</p>
          </>
          <>
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435040/star-wars-dir/planet-1_xzjgqs.jpg" />
            <p style={styles}>Corellia</p>
          </>
          <>
            <img src="https://res.cloudinary.com/dx5p60gon/image/upload/v1565435039/star-wars-dir/planet-3_p5qhll.jpg" />
            <p style={styles}>Endor</p>
          </>
        </Carousel>
      </>
    );
  }
}

const styles = {
  position: "relative",
  top: "-5.3rem",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 8px 14px -8px #f2f2f2 inset"
};

export default PlanetSlider;
