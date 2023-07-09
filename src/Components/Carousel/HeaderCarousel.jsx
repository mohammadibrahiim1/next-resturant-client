"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Container, Image } from "@mantine/core";
// import { Container } from "postcss";
// import Autoplay from "embla-carousel-autoplay/components/Autoplay";
// import { Carousel } from "@mantine/carousel";

const data = [
  {
    image: "https://i.ibb.co/7ShmcFh/slider-one-cover.png",
  },
  {
    image: "https://i.ibb.co/JpwXd6M/slider-two-cover.png",
  },
  {
    image: "https://i.ibb.co/HC117Qr/slider-three-cover.png",
  },
];

const HeaderCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Container>
      {" "}
      <Carousel
        mx="auto"
        withIndicators
        height={400}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {data &&
          data?.map((carousel) => (
            <>
              <Carousel.Slide>
                <Image radius="11px" src={carousel.image} alt="" srcset="" />
              </Carousel.Slide>
            </>
          ))}
        {/* <Carousel.Slide>1</Carousel.Slide>
   <Carousel.Slide>2</Carousel.Slide>
   <Carousel.Slide>3</Carousel.Slide> */}
      </Carousel>
    </Container>
  );
};
export default HeaderCarousel;
