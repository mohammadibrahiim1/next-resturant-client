import { Badge, Button, Card, Container, Group, Image, Text, createStyles } from "@mantine/core";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MenuItems from "../../Components/MenuItems/MenuItems";
import CartModal from "../CartModal/CartModal";
import { ApiContext } from "../../Context/DataContext";

const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
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
  const { categories, allItems, handleFilterItems } = useContext(ApiContext);
  // console.log(categories);

  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.container}>
        {categories?.slice(0, 8)?.map((item) => (
          <>
            <Card
              onClick={() => handleFilterItems(item.slug)}
              // className="cursor-pointer"
              className={classes.card}
              // shadow="sm"
              // padding="xl"
              // component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className="w-32 h-32 flex flex-col items-center text-center gap-4 p-3 c-h-30 rounded-2xl border-b-2 border-transparent transition hover:bg-[#FFEDF4] ">
                <Image src={item.thumb} height={48} width={75} mx="auto" alt={item.name} />
                <Text weight={600} w={85} size="xs">
                  {item.name}
                </Text>
              </Card.Section>
            </Card>
          </>
        ))}
      </div>
      <section>
        <div>
          {
            // allItems ? (
            allItems?.slice(0, 1)?.map((item) => (
              <>
                <MenuItems
                  item={item}
                  // setSelectItem={setSelectItem}
                ></MenuItems>
              </>
            ))
            // )
            // : (
            //   <p className="text-danger">No Food Items Found</p>
            // )
          }
        </div>
        {/* <div>
          {
            <CartModal
            //  selectItem={selectItem} setSelectItem={setSelectItem}
            ></CartModal>
          }
        </div> */}
      </section>
    </div>
  );
};

export default MainMenu;
