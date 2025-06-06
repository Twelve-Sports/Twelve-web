import React from "react";

import { Box, BoxProps } from "@chakra-ui/react";

import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ ...props }: BoxProps) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const cards = [
    "img/login-carousel-1.png",
    "img/login-carousel-2.png",
    "img/login-carousel-3.png",
  ];

  return (
    <Box
      position={"relative"}
      h={"461px"}
      w={"461px"}
      top={"50px"}
      left={"-100px"}
      {...props}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box key={index}>
            <img src={url} alt="carousel" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
