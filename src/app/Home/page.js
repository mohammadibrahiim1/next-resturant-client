"use client";
import { Container } from "@mantine/core";
import React from "react";
import Carousel from "../Components/Carousel/HeaderCarousel";
import HomeMenu from "../Components/HomeMenu/HomeMenu";
import OfferCard from "../Components/OfferCard/OfferCard";
import PopularItems from "../Components/PopularItems/PopularItems";

const Home = () => {
  return (
    <div>
      <Container size={"lg"}>
        <Carousel></Carousel>
        <HomeMenu></HomeMenu>
        <OfferCard></OfferCard>
        <PopularItems></PopularItems>
      </Container>
    </div>
  );
};

export default Home;
