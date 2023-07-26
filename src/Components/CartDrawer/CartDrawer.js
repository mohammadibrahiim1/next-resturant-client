import { Button, Drawer, Group, Text, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingBag } from "@tabler/icons-react";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../Context/DataContext";
import CartItem from "../../Components/CartItem/CartItem";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

const useStyles = createStyles(() => ({
  cart_button: {
    border: "1px solid #A6A7AB",
    backgroundColor: "#000000 !important",
    color: "#FFFFFF",
    fontSize: "15px",
  },
}));

const CartDrawer = () => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { cartItems, addToCart, removeFromCart, handleIncrement, handleDecrement, clearCart, getCartTotal } =
    useContext(ApiContext);

  // console.log(cart);
  return (
    <div>
      <Drawer.Root opened={opened} onClose={close} position="right">
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title fw={600}>My Cart</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <div>
              {cartItems.length ? (
                cartItems?.map((item) => (
                  <>
                    <CartItem
                      item={item}
                      removeFromCart={removeFromCart}
                      // getCartTotal={getCartTotal}
                      handleDecrement={handleDecrement}
                      handleIncrement={handleIncrement}
                      // removeFromCart={removeFromCart}
                    ></CartItem>
                  </>
                ))
              ) : (
                <Text className="text-center" fz={"sm"}>
                  Good food is always cooking! Go ahead, order some yummy items from the menu.
                </Text>
              )}
            </div>
            <div className="flex justify-between  mt-[560px] rounded-lg bg-white p-3  shadow-md">
              <Text c={"#000"} fw={700} fz={"sm"}>
                SubTotal :{" "}
              </Text>
              <Text c={"#4DB759"} fw={600} fz={"sm"}>
                ${getCartTotal()}
              </Text>
            </div>
            <Link href="/checkout">
              <Button color="pink" w="100%" radius={25} size="md" mt={19}>
                Proceed to checkout
              </Button>
            </Link>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Group position="center">
        <Button
          className={classes.cart_button}
          radius="xl"
          size="xs"
          onClick={open}
          //   px={5}
        >
          <IconShoppingBag height={19} /> ${getCartTotal()}
        </Button>
      </Group>
    </div>
  );
};

export default CartDrawer;
