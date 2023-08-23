import { Avatar, Button, Menu, Text, createStyles } from "@mantine/core";
import { IconKey, IconLogout } from "@tabler/icons-react";
import {
  IconAddressBook,
  IconArrowsLeftRight,
  IconBrandMessenger,
  IconChevronDown,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconToolsKitchen,
  IconTrash,
  IconUserCircle,
  IconUserEdit,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const useStyles = createStyles(() => ({
  profile_button: {
    border: "1px solid #FF006B",
    backgroundColor: "#FF006B !important ",
    color: "#FFFFFF",
    fontSize: "14px",

    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
}));

export default function UserProfile() {
  const { classes } = useStyles();
  return (
    <div>
      {" "}
      <Menu position="top-end" shadow="md" width={"340px"}>
        <Menu.Target>
          <Button className={classes.profile_button} radius="xl" size="xs">
            <IconUserCircle height={19} width={19} /> Account <IconChevronDown height={15} width={15} />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>
            <div className="text-center py-7">
              <Avatar className="flex mx-auto" radius={"xl"} size={"lg"} src="avatar.png" alt="it's me" />
              <Text> Mohammad Ibrahim </Text>
              <Text> User Email</Text>
              <Text>01625619689</Text>
            </div>
          </Menu.Label>

          <Menu.Item fw={600} tt={"capitalize"} icon={<IconToolsKitchen size={18} />}>
            {" "}
            <Link href={"/myOrders"}>My Orders</Link>{" "}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item fw={600} tt={"capitalize"} icon={<IconUserEdit size={18} />}>
            {" "}
            <Link href={"/myOrders"}>Edit Profile</Link>{" "}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item fw={600} tt={"capitalize"} icon={<IconBrandMessenger size={18} />}>
            {" "}
            <Link href={"/myOrders"}>Chat</Link>{" "}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item fw={600} tt={"capitalize"} icon={<IconAddressBook size={18} />}>
            {" "}
            <Link href={"/myOrders"}>Address</Link>{" "}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item fw={600} tt={"capitalize"} icon={<IconKey size={18} />}>
            {" "}
            <Link href={"/myOrders"}>Change Password</Link>{" "}
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item fw={600} tt={"capitalize"} color="red" icon={<IconLogout size={18} />}>
            <Link href={"/phoneAuthentication"}>sign in</Link>{" "}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
