import { Card, Image, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function HomeMenuItem({ item }) {
  const { thumb, name } = item;
  return (
    <div>
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <Card.Section className="w-32 h-32 flex flex-col items-center text-center gap-4 p-3 c-h-30 rounded-2xl border-b-2 border-transparent transition hover:bg-[#FFEDF4] bg-[#E6FCF5]">
          <Image src={thumb} height={48} width={75} m="auto" alt={name} />
          <Text weight={600} w={85} m={"auto"} size="xs">
            {name}
          </Text>
        </Card.Section>
      </Link>
    </div>
  );
}
