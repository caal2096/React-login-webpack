import React, { Component } from "react";

import BackgroundSlider from "react-background-slider";

import image1 from "./Img/01.jpg";
import image2 from "./Img/02.jpg";
import image3 from "./Img/03.jpg";
class CarrouselBackground extends Component {
	render() {
		return (
			<BackgroundSlider
				images={[image1, image2, image3]}
				duration={10}
				transition={2}
			/>
		);
	}
}

export default CarrouselBackground;
