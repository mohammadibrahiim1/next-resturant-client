import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  Text,
  createStyles,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import MenuItems from "../../Components/MenuItems/MenuItems";

const useStyles = createStyles(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(8,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "9px",
  },
}));

const MainMenu = () => {
  const [filterItems, setFilterItems] = useState([]);
  console.log(filterItems);
  const { classes } = useStyles();
  const {
    data: menu = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/allMenu");
      const data = await res.json();
      setFilterItems(data);
      //   console.log(data);
      return data;
    },
  });

  const handleFilterItems = async (slug) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/menu?slug=${slug}`
      );
      //   const data = await res.json();
      //   console.log(data);
      setFilterItems(res.data);
    } catch (error) {
      console.log(error);
    }

    // const data = await res.json();
    // console.log(data);
    // return data;
  };

  return (
    <div>
      <div className={classes.container}>
        {menu.map((item) => (
          <>
            <Card
              onClick={() => handleFilterItems(item.slug)}
              className="cursor-pointer"
              //   className={classes.card}
              // shadow="sm"
              // padding="xl"
              // component="a"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <Card.Section className="w-32 h-32 flex flex-col items-center text-center gap-4 p-3 c-h-30 rounded-2xl border-b-2 border-transparent transition hover:bg-[#FFEDF4] bg-[#F7F7FC]">
                <Image
                  src={item.thumb}
                  height={48}
                  width={75}
                  mx="auto"
                  alt={item.name}
                />
                <Text weight={600} w={85} size="xs">
                  {item.name}
                </Text>
              </Card.Section>
            </Card>
          </>
        ))}
      </div>
      <section>
        {Array.isArray(filterItems) &&
          filterItems.slice(0, 1).map((item) => (
            <>
              <MenuItems item={item}></MenuItems>
            </>
          ))}
      </section>
    </div>
  );
};

export default MainMenu;
