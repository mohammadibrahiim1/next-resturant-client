"use client";
import { Image, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useEffect, useRef, useState } from "react";

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

export default function HeaderCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  // const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div>
      <Container size={"lg"} pt={110}>
        <div>
          <div className="relative w-full h-80">
            {data.map((img, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000
             ${index === currentImage ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <Image
                  radius={"11px"}
                  src={img.image}
                  alt={`Slide ${index + 1}`}
                  className="d-block mw-100 img-fit  h-sm-auto h-md-320px h-lg-460px overflow-hidden"
                />
              </div>
            ))}
          </div>
        </div>
        {/* <Carousel
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
        </Carousel> */}
      </Container>
    </div>
  );
}
