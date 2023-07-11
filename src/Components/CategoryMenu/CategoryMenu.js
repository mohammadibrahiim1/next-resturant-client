"use client";
import { Button, Container, Loader, Text, createStyles } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

// async function getCategories() {
//   //   return await (await fetch("http://localhost:5000/api/v1/categories")).json();
//   // Fetch data from an API or any other source
//   const response = await fetch("http://localhost:5000/api/v1/categories");
//   const data = await response.json();
//   return data;
//   //   console.log(data);
// }

const useStyles = createStyles(() => ({
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "9px",
  },

  heading: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#000000",
    // paddingBottom: "15px",
  },
  heading_container: {
    display: "flex",
    // gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
    marginBottom: "15px",
  },

  btn_viewAll: {
    color: "#FF006B",
    fontSize: "13px",
    textTransform: "capitalize",
    backgroundColor: "#FFF0F6 !important",
    twBgOpacity: "1",
    "&:hover": {
      backgroundColor: "#FF006B !important",
      color: "#FFFFFF",
      transition: ".3s",
    },
  },
}));

const CategoryMenu = () => {
  const [viewAll, setViewAll] = useState(7);
  const handelViewAll = () => {
    setViewAll((preValue) => preValue + 1);
  };

  const { classes } = useStyles();
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  //   if (isLoading || !categories) {
  //     return <Loader color="pink" variant="bars" />;
  //   }

  return (
    <div>
      <Container>
        <div className={classes.heading_container}>
          <Text className={classes.heading}>Our Menu</Text>
          <Button
            onClick={handelViewAll}
            className={classes.btn_viewAll}
            size="xs"
            radius={15}
          >
            view all
          </Button>
        </div>
        <div className={classes.card_container}>
          {categories?.slice(0, viewAll).map((category) => (
            <>
              <CategoryItem category={category}></CategoryItem>
            </>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryMenu;
