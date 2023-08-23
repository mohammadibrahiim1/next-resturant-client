import { Button, Menu, Text, createStyles } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconChevronDown,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUserCircle,
} from "@tabler/icons-react";
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
      <Menu shadow="md" width={360}>
        <Menu.Target>
          <Button className={classes.profile_button} radius="xl" size="xs">
            <IconUserCircle height={19} width={19} /> Account <IconChevronDown height={15} width={15} />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            }
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
          <Menu.Item color="red" icon={<IconTrash size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
