import React, { Component } from "react";

import BackgroundSlider from "react-background-slider";

import image1 from "../Media/BackgroundSlider/01.jpg";
import image2 from "../Media/BackgroundSlider/02.jpg";
import image3 from "../Media/BackgroundSlider/03.jpg";

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

export { CarrouselBackground };
