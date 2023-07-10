import { Button, Drawer, Group, createStyles } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconShoppingBag } from "@tabler/icons-react";
import React from "react";

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
  return (
    <div>
      <Drawer
        position="right"
        opened={opened}
        onClose={close}
        title="Cart"
        overlayProps={{ opacity: 0.5, blur: 0 }}
      >
        {/* Drawer content */}
      </Drawer>

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
