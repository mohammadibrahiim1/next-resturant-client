import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../Context/DataContext";
import { Group, Menu, Radio, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const BranchSelector = () => {
  const { branches, topping, onOptionChange } = useContext(ApiContext);

  return (
    <div className="App">
      <Menu width={180}>
        <Menu.Target>
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
        </Menu.Target>

        <Text size={"xs"} h={4} w={91} c={"pink"} fw={700}>
          {topping}
        </Text>

        <Menu.Dropdown>
          <Menu.Label>Select Branch</Menu.Label>
          <Menu.Item>
            {branches.map((branch) => (
              <>
                <Radio.Group>
                  <Group mt="xs">
                    <Radio
                      size="xs"
                      name="topping"
                      value={branch.name}
                      label={branch.name}
                      color="pink"
                      id={branch.name}
                      onClick={onOptionChange}
                    />
                  </Group>
                </Radio.Group>
              </>
            ))}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default BranchSelector;
