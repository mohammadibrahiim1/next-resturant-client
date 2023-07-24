import { Button, Drawer, Group, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingBag } from "@tabler/icons-react";
import React, { useContext } from "react";
import { ApiContext } from "../../Context/DataContext";
import CartItem from "../../Components/CartItem/CartItem";

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
  const { cart, removerFromCart, productQuantity, setProductQuantity } = useContext(ApiContext);
  console.log(cart);
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
            {cart?.map((item) => (
              <>
                <CartItem
                  item={item}
                  // setProductQuantity={setProductQuantity}
                  // increaseQuantity={increaseQuantity}
                  removerFromCart={removerFromCart}
                  // productQuantity={productQuantity}
                ></CartItem>
              </>
            ))}
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
          <IconShoppingBag height={19} /> $00.00
        </Button>
      </Group>
    </div>
  );
};

export default CartDrawer;
