import React from "react";
import HeaderCarousel from "../../Components/Carousel/HeaderCarousel.jsx";
import CategoryMenu from "../../Components/CategoryMenu/CategoryMenu.js";
import PopularItems from "../../Components/PopularItems/PopularItems.js";

const Home = () => {
  return (
    <div>
      <HeaderCarousel></HeaderCarousel>
      <CategoryMenu></CategoryMenu>
      <PopularItems></PopularItems>
    </div>
  );
};

export default Home;
