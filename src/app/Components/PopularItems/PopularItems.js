import { Text, createStyles } from "@mantine/core";
import React from "react";
import PopularItemCard from "../PopularItemCard/PopularItemCard";
import { useGetPopularItemsQuery } from "../../redux/features/api/apiSlice";
import FoodOrderModal from "../FoodOrderModal/FoodOrderModal";

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
export default function PopularItems() {
  const { classes } = useStyles();
  const { data: popularItems } = useGetPopularItemsQuery();
  console.log(popularItems);
  return (
    <div>
      {" "}
      <div>
        <Text className={classes.heading}>Most Popular Items</Text>
        <div className={classes.popular_items_container}>
          {popularItems?.map((item) => (
            <>
              <PopularItemCard item={item}></PopularItemCard>
            </>
          ))}
        </div>
        <div>
          <FoodOrderModal></FoodOrderModal>
        </div>
      </div>
    </div>
  );
}
