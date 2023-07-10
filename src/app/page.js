"use client";
import Head from "next/head";
import Home from "./home/page";
import { createStyles } from "@mantine/core";
// import HeaderCarousel from "../Components/Carousel/HeaderCarousel";

// const useStyles = createStyles(() => ({
//   home: {
//     marginTop: "50px",
//   },
// }));
const HomePage = () => {
  // const { classes } = useStyles();
  return (
    <main>
      <div>
        <Home></Home>
      </div>
    </main>
  );
};
export default HomePage;
