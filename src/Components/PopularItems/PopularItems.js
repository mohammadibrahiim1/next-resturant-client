"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import PopularItemsCard from "../PopularItemsCard/PopularItemsCard";
import { Text, createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  popular_items_container: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: "22px",
    columnGap: "10px",
    marginTop: "32px",
  },
  heading: {
    fontSize: "2rem",
    lineHeight: "2rem",
    fontWeight: "700",
    textTransform: "capitalize",
    color: "#000000",
    marginTop: "78px",
  },
}));

const PopularItems = () => {
  const { classes } = useStyles();
  const {
    data: popularItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["popularItems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/popularItems");
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });
  return (
    <div>
      <Text className={classes.heading}>Most Popular Items</Text>
      <div className={classes.popular_items_container}>
        {popularItems.map((popularItem) => (
          <>
            <PopularItemsCard popularItem={popularItem}></PopularItemsCard>
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
