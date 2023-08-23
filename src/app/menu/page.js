"use client";
import React, { useState } from "react";
import { useGetFoodCategoryQuery, useGetFoodMenuQuery, useGetItemsBySlugQuery } from "../redux/features/api/apiSlice";
import { Card, Container, Image, Loader, Text, createStyles } from "@mantine/core";

import FoodItem from "../Components/FoodItem/FoodItem";
import FoodOrderModal from "../Components/FoodOrderModal/FoodOrderModal";
import { useDispatch } from "react-redux";
// import { handleFilter } from "../redux/features/filterSlice/filterSlice";
// import { filterItemsBySlug } from "../redux/features/filterSlice/filterSlice";

const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
    backgroundColor: "#f7f8f8",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(8,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "9px",
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}));

export default function Menu() {
  const { classes } = useStyles();
  const [slug, setSlug] = useState("");
  const { data: foodItems, isLoading, error } = useGetFoodMenuQuery(slug);
  const { data: categories } = useGetFoodCategoryQuery();

  if (isLoading) {
    return <Loader color="pink" variant="dots"></Loader>;
  }

  if (error) {
    return (
      <Text c={"red"} fw={700} align="center">
        something went wrong
      </Text>
    );
  }

  return (
    <div>
      {" "}
      <Container size={"lg"} pt={110}>
        <div className={classes.container}>
          {categories?.slice(0, 8)?.map((item) => (
            <>
              <Card
                onClick={() => setSlug(item.slug)}
                className={classes.card}
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                <Card.Section className="w-32 h-32 flex flex-col items-center text-center gap-4 p-3 c-h-30 rounded-2xl border-b-2 border-transparent transition hover:bg-[#FFEDF4] bg-[#E6FCF5]">
                  <Image src={item.thumb} height={48} width={75} m="auto" alt={item.name} />
                  <Text weight={600} size="xs" align="center" w={90} m={"auto"}>
                    {item.name}
                  </Text>
                </Card.Section>
              </Card>
            </>
          ))}
        </div>
        <section>
          {/* <div>{content}</div> */}
          <div>
            {foodItems?.length ? (
              foodItems?.slice(0, 1)?.map((item) => (
                <>
                  <FoodItem item={item}></FoodItem>
                </>
              ))
            ) : (
              <>
                <div className="w-80 h-80 mx-auto py-12">
                  <Image src="https://demo.foodking.dev/images/cart/empty-cart.gif" alt="no data found" />
                  <Text className="text-center  font-semibold">
                    Good food is always cooking! Go ahead, order some yummy items from the menu.
                  </Text>
                </div>
              </>
            )}
          </div>
          <div>
            <FoodOrderModal></FoodOrderModal>
            {/* <CartModal
              selectItem={selectItem}
              setSelectItem={setSelectItem}
              incrementFoodItem={incrementFoodItem}
              decrementFoodItem={decrementFoodItem}
              foodItemCount={foodItemCount}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              addonsQuantity={addonsQuantity}
              setAddonsQuantity={setAddonsQuantity}
            ></CartModal> */}
          </div>
        </section>
      </Container>
    </div>
  );
}
