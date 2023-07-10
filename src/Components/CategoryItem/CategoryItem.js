import { Card, Image, Text, createStyles } from "@mantine/core";
import Link from "next/link";
import React from "react";

const useStyles = createStyles(() => ({
  //   card: {
  //     width: "140px",
  //     height: "120px",
  //     // swiper-slide w-32 flex flex-col items-center text-center gap-4 p-3 c-h-30 rounded-2xl border-b-2 border-transparent transition hover:bg-[#FFEDF4] bg-[#F7F7FC]
  //   },
  //   card_info: {
  //     width: "128px",
  //     height: "128px",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     textAlign: "center",
  //     gap: "4px",
  //   },
}));

const CategoryItem = ({ category }) => {
  const { classes } = useStyles();
  console.log(category);
  const { thumb, name } = category;
  return (
    <div>
      <Link
        className={classes.card}
        // shadow="sm"
        // padding="xl"
        // component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <Card.Section className="w-32 h-32 flex flex-col items-center text-center gap-4 p-3 c-h-30 rounded-2xl border-b-2 border-transparent transition hover:bg-[#FFEDF4] bg-[#F7F7FC]">
          <Image src={thumb} height={48} width={75} mx="auto" alt={name} />
          <Text weight={600} w={85} size="xs">
            {name}
          </Text>
        </Card.Section>
      </Link>
    </div>
  );
};

export default CategoryItem;
