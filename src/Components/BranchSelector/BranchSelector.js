import { useContext, useState } from "react";
import { ApiContext } from "../../Context/DataContext";
import { Button, Group, Input, Menu, Radio, Text } from "@mantine/core";
import { IconChevronDown, IconSettings } from "@tabler/icons-react";

const BranchSelector = () => {
  const { branches } = useContext(ApiContext);
  console.log(branches);
  const [topping, setTopping] = useState("");
  console.log(topping);

  const onOptionChange = (e) => {
    setTopping(e.target.value);
    // console.log("value");
  };

  return (
    <div className="App">
      <Menu width={180}>
        <Menu.Target>
          {/* <Button variant="subtle" gradient={{ from: "indigo", to: "cyan" }} size="xs"> */}
          <Text
            size={"xs"}
            w={57}
            fw={700}
            variant="gradient"
            gradient={{ from: "#E64980", to: "#F06595" }}
            className="flex justify-between gap-2 items-center"
          >
            Branch <IconChevronDown size={14}></IconChevronDown>{" "}
          </Text>
          {/* </Button> */}
        </Menu.Target>
        {/* <div> */}
        <Text size={"xs"} h={4} w={91} c={"pink"} fw={700}>
          {topping}
        </Text>
        {/* </div> */}
        <Menu.Dropdown>
          <Menu.Label>Select Branch</Menu.Label>
          <Menu.Item>
            {branches.map((branch, i) => (
              <>
                <Radio.Group
                //   name="favoriteFramework"
                //   label="Select your favorite framework/library"
                //   description="This is anonymous"
                >
                  <Group mt="xs">
                    <Radio
                      size="xs"
                      name="topping"
                      value={branch.name}
                      label={branch.name}
                      checked
                      color="pink"
                      id={branch.name}
                      onClick={onOptionChange}
                    />
                    {/* <Radio value="svelte" label="Svelte" />
                    <Radio value="ng" label="Angular" />
                    <Radio value="vue" label="Vue" /> */}
                  </Group>
                </Radio.Group>
                {/* <input
                  type="radio"
                  name="topping"
                  value={branch.name}
                  id={branch.name}
                  // checked={topping === branch.name[0]}
                  onChange={onOptionChange}
                />
                <label htmlFor={branch.name}>{branch.name}</label>
                <br /> */}
              </>
            ))}
          </Menu.Item>

          {/* <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
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
          </Menu.Item> */}
        </Menu.Dropdown>
      </Menu>
      {/* <h3>Branch</h3>
      <Text>{topping}</Text> */}

      {/* {branches.map((branch, i) => (
        <>
          <input
            type="radio"
            name="topping"
            value={branch.name}
            id={branch.name}
            // checked={topping === branch.name[0]}
            onChange={onOptionChange}
          />
          <label htmlFor={branch.name}>{branch.name}</label>
        </>
      ))} */}

      {/* <input
        type="radio"
        name="topping"
        value="Medium"
        id="medium"
        checked={topping === "Medium"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Medium</label>

      <input
        type="radio"
        name="topping"
        value="Large"
        id="large"
        checked={topping === "Large"}
        onChange={onOptionChange}
      />
      <label htmlFor="large">Large</label>

      <p>
        Select topping <strong>{topping}</strong>
      </p> */}
    </div>
  );
};

export default BranchSelector;
