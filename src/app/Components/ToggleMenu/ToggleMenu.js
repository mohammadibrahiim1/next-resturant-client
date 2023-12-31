import { Button, Menu, createStyles } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import React from "react";

const useStyles = createStyles(() => ({
  language_button: {
    border: "1px solid #A6A7AB",
    backgroundColor: "#FFFFFF",
    color: "#000000",

    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
}));

export default function ToggleMenu() {
  const { classes } = useStyles();
  const [value, toggle] = useToggle(["English", "Bangla "]);
  return (
    <div>
      {" "}
      <Menu shadow="md" width={200} position="bottom-start" withArrow>
        <Menu.Target>
          <Button onClick={() => toggle()} className={classes.language_button} radius="xl" size="xs">
            <span className="px-5"> {value}</span>
            {/* <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item> */}
          </Button>
        </Menu.Target>

        {/* <Menu.Dropdown>
      
      <Menu.Item value="option1" icon={<IconSettings size={14} />}>
        English
      </Menu.Item>
      <Menu.Item value="option2" icon={<IconSettings size={14} />}>
        Bangla
      </Menu.Item>
    </Menu.Dropdown> */}
      </Menu>
    </div>
  );
}
