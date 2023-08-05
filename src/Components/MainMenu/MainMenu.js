import { Badge, Button, Card, Container, Group, Image, Text, createStyles } from "@mantine/core";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MenuItems from "../../Components/MenuItems/MenuItems";
import CartModal from "../CartModal/CartModal";
import { ApiContext } from "../../Context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategory, fetchProductsData, handleFilterItem } from "../../redux/thunk/products/fetchProducts";
// import filterDataBySlug from "../../redux/action/filterAction";

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

  const dispatch = useDispatch();

  const products = useSelector((state) => state.item.products);
  const categories = useSelector((state) => state.item.categories);
  const filteredData = useSelector((state) => state.item.filteredData);
  console.log(filteredData);
  console.log({ products: products, categories: categories });

  useEffect(() => {
    dispatch(fetchProductsData());
    dispatch(fetchProductCategory());
  }, [dispatch]);

  let content;
  // if (products.length) {
  //   content = products?.map((item) => (
  //     <>
  //       <MenuItems item={item}></MenuItems>
  //     </>
  //   ));
  // }
  if (products.length || filteredData.length) {
    content = products?.slice(0, 1).map((item) => (
      <>
        <MenuItems item={item}></MenuItems>
      </>
    ));
  }
  // const handleFilterData = (slug) => {
  //   dispatch(filterDataBySlug(slug));
  // };
  // if (categories.length) {
  //   content = categories?map()
  // }

  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {categories?.slice(0, 8)?.map((item) => (
          <>
            <Card
              onClick={() => handleFilterItem(item.slug)}
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
        <div>{content}</div>
        {/* <div>
          {products?.slice(0, 1)?.map((item) => (
            <>
              <MenuItems item={item} setSelectItem={setSelectItem}></MenuItems>
            </>
          ))}
        </div> */}
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
