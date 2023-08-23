import { Group, Menu, Radio, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useGetBranchesQuery } from "../../redux/features/api/apiSlice";

export default function BranchSelector() {
  const [topping, setTopping] = useState("");

  const { data: branches } = useGetBranchesQuery();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("branch"));
    if (items) {
      setTopping(items);
    }
  }, []);
  // console.log(topping);

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("branch", JSON.stringify(topping));
  }, [topping]);
  return (
    <div>
      {" "}
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
            {/* {topping} */}
          </Text>

          <Menu.Dropdown>
            <Menu.Label>Select Branch</Menu.Label>
            <Menu.Item>
              {branches?.map((branch) => (
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
    </div>
  );
}
