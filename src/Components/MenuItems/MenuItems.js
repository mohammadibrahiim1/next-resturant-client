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
import React from "react";

const useStyles = createStyles(() => ({
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "14px",
  },
  card: {
    width: "262px",
    height: "312px",
  },
}));

const MenuItems = ({ item }) => {
  const { classes } = useStyles();
  const { items } = item;
  console.log(items);

  return (
    <div>
      <section>
        <div className={classes.card_container}>
          {items?.map((item) => (
            <>
              <Card
                className={classes.card}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <Image src={item.cover} height={160} alt="Norway" />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>Norway Fjord Adventures</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords
                  of Norway
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Book classic tour now
                </Button>
              </Card>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuItems;
