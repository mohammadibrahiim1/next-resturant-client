import { Badge, Button, Card, Container, Group, Image, Text, createStyles } from "@mantine/core";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MenuItems from "../../Components/MenuItems/MenuItems";
import CartModal from "../CartModal/CartModal";
import { ApiContext } from "../../Context/DataContext";

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

const MainMenu = () => {
  const {
    categories,
    allItems,
    handleFilterItems,
    selectItem,
    setSelectItem,
    foodItemCount,
    setCount,
    handleDecrement,
    handleIncrement,
    addonsQuantity,
    setAddonsQuantity,
    incrementFoodItem,
    decrementFoodItem,
  } = useContext(ApiContext);
  // console.log(categories);

  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {categories?.slice(0, 8)?.map((item) => (
          <>
            <Card
              onClick={() => handleFilterItems(item.slug)}
              className={classes.card}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section
                className="w-32 h-32 flex flex-col items-center  gap-4 p-3  rounded-2xl 
               transition  hover:bg-[#FFEDF4] mx-auto"
              >
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
        <div>
          {allItems?.slice(0, 1)?.map((item) => (
            <>
              <MenuItems item={item} setSelectItem={setSelectItem}></MenuItems>
            </>
          ))}
        </div>
        <div>
          <CartModal
            selectItem={selectItem}
            setSelectItem={setSelectItem}
            incrementFoodItem={incrementFoodItem}
            decrementFoodItem={decrementFoodItem}
            foodItemCount={foodItemCount}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            addonsQuantity={addonsQuantity}
            setAddonsQuantity={setAddonsQuantity}
          ></CartModal>
        </div>
      </section>
    </div>
  );
};

export default MainMenu;
