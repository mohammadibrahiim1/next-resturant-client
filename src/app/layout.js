"use client";
import HeaderMenu from "../Components/HeaderMenu/HeaderMenu.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./globals.css";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
// import Head from "next/head.js";
// import { Head } from "next/document.js";
// export const metadata = {
//   title: "FoodKing",
//   description: "- Restaurant Food Ordering & Delivery App",
// };
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={
        {
          // colorScheme: "dark",
          // colors: {
          //   dark: ["#909296 !important"],
          // },
        }
      }
    >
      <html lang="en">
        <body>
          <HeaderMenu></HeaderMenu>
          <div className="py-11">{children}</div>
          <Footer></Footer>
        </body>
      </html>
    </MantineProvider>
  );
}
