"use client";
import { Metadata } from 'next'
import React, { useEffect } from "react";
import { Container } from "@mantine/core";
// import CategoryMenu from "../../Components/CategoryMenu/CategoryMenu";
import MainMenu from "../../Components/MainMenu/MainMenu";
import Head from "next/head";

// export const metadata = {
//   title: "FoodKing - Restaurant Food Ordering & Delivery App",
//   description: "Restaurant Food Ordering & Delivery App",
// };

const Menu = () => {
  useEffect(()=> {
    document.title
  },[])
  return (
    <div>
      {/* <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head> */}
      <section>
        <MainMenu></MainMenu>
      </section>
    </div>
  );
};

export default Menu;
