import React from "react";
import HeaderCarousel from "../../Components/Carousel/HeaderCarousel.jsx";
import CategoryMenu from "../../Components/CategoryMenu/CategoryMenu.js";
import PopularItems from "../../Components/PopularItems/PopularItems.js";

export const metadata = {
  title: "FoodKing - Restaurant Food Ordering & Delivery App",
  description: "Restaurant Food Ordering & Delivery App",
};

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
