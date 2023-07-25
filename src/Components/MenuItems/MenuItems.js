import { Badge, Button, Card, Container, Group, Image, Modal, Text, createStyles } from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../Context/DataContext";
import { useDisclosure } from "@mantine/hooks";
import CartModal from "../CartModal/CartModal";
// import CartModal from "../../Components/CartModal/CartModal";

const useStyles = createStyles(() => ({
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "14px",
  },
  card: {
    width: "262px",
    height: "299px",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",
      transition: "0.3s",
    },
    // backgroundColor: "#F8F9FA",
  },

  card_button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
  },

  btn: {
    color: "#FF006B",
    backgroundColor: "#FFFFFF !important",
    border: "1px solid #FFFFFF",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",

    "&:hover": {
      backgroundColor: "#FF006B !important",
      border: "1px solid #FF006B",
      color: "#FFFFFF",
      transition: ".5s",
    },
  },
}));

const MenuItems = ({ item, setSelectItem }) => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(ApiContext);

  const { classes } = useStyles();
  const { items, addons } = item;

  // const [selectItem, setSelectedItem] = useState(null);
  // console.log(selectItem);

  // const selectedItem = () => {
  //   setSelectedItem(items);
  // };

  return (
    <div>
      <section>
        <Text mt={46} mb={21} color="#FF006B" tt="capitalize" fz="28px" fw={700}>
          {item.name}
        </Text>
        <div className={classes.card_container}>
          {items?.map((item) => (
            <>
              <Card
                className={classes.card}
                // shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <Image src={item.cover} height={160} alt={item.name} />
                  <div className="p-3">
                    <Text fz="sm" weight={700}>
                      {item.name}
                    </Text>

                    <Text size="xs" color="dimmed" className="pt-2">
                      {item.description.slice(0, 70)}...
                    </Text>

                    <div className={classes.card_button}>
                      <Text size="lg" color="dark" weight={700}>
                        ${item.flat_price}
                      </Text>
                      <Button
                        // onClick={() => setSelectItem(item)}
                        onClick={() => addToCart(item)}
                        className={classes.btn}
                        size="xs"
                        radius="lg"
                      >
                        <IconShoppingBag height={16} />
                        <Text weight={700}>add</Text>
                      </Button>
                      <CartModal cart={cartItems}></CartModal>
                    </div>
                  </div>
                </Card.Section>
              </Card>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuItems;
