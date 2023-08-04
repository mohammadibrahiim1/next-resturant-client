"use client";
import HeaderMenu from "../Components/HeaderMenu/HeaderMenu.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./globals.css";
import { Container, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import DataContext from "../Context/DataContext";
import { ModalsProvider } from "@mantine/modals";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import DataContext from "../Context/DataContext.js";

// export const metadata = {
//   title: "FoodKing - Restaurant Food Ordering & Delivery App",
//   description: "Restaurant Food Ordering & Delivery App",
// };

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalsProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          withCSSVariables
          theme={{
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1140,
                    xl: 1320,
                  },
                  fontSizes: {
                    xs: "0.6rem",
                    sm: "0.75rem",
                    md: "0.9rem",
                    lg: "1rem",
                    xl: "1.2rem",
                  },
                },
              },
            },
          }}
        >
          <html lang="en">
            <body>
              <DataContext>
                {" "}
                <Provider store={store}>
                  <HeaderMenu></HeaderMenu>
                  <Container size="lg">
                    <div className="py-11"> {children}</div>
                    <Toaster
                      position="top-center"
                      reverseOrder={false}
                      toastOptions={{
                        // Define default options
                        className: "",
                        duration: 5000,
                        style: {
                          background: "#363636",
                          color: "#fff",
                        },

                        // Default options for specific types
                        success: {
                          duration: 3000,
                          theme: {
                            primary: "green",
                            secondary: "black",
                          },
                        },
                      }}
                    />
                  </Container>
                  <Footer></Footer>
                </Provider>
              </DataContext>
            </body>
          </html>
        </MantineProvider>
      </ModalsProvider>
    </QueryClientProvider>
  );
}
