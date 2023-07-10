"use client";
import HeaderMenu from "../Components/HeaderMenu/HeaderMenu.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./globals.css";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        // theme={{ loader: "bars" }}
      >
        <html lang="en">
          <body>
            <HeaderMenu></HeaderMenu>
            <div className="py-11">{children}</div>
            <Footer></Footer>
          </body>
        </html>
      </MantineProvider>
    </QueryClientProvider>
  );
}
