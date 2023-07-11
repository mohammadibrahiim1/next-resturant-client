import {
  Avatar,
  Button,
  Card,
  Group,
  Image,
  Text,
  createStyles,
} from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import React from "react";

const useStyles = createStyles((theme) => ({
  card: {
    width: "357px",
    height: "124px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    // border: "1px solid gray",
  },

  title: {
    fontWeight: 500,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },

  group: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  },
  card_button: {
    display: "flex",
    // gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    // gap: "12px",
    // marginTop: "10px",
  },

  btn: {
    color: "#FF006B",
    backgroundColor: "#FFFFFF !important",
    border: "1px solid #FFFFFF",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",

    "&:hover": {
      backgroundColor: "#FF006B !important",
      border: "1px solid #FF006B",
      color: "#FFFFFF",
      transition: ".5s",
    },
  },
}));

const PopularItemsCard = ({ popularItem }) => {
  const { classes } = useStyles();
  console.log(popularItem);
  const { flat_price, cover, name, description } = popularItem;
  return (
    <div>
      {/* <div className={classes.card}>
        <div className={classes.group}>
          <div className={classes.image}>
            <img src={cover} alt="" srcset="" />
          </div>
          <div>
            <div>
              <h5>{name}</h5>
              <h5>{description.slice(0, 5)}</h5>
              <h5>{flat_price}</h5>
            </div>
          </div>
        </div>
      </div> */}
      <Card withBorder radius="md" p={0} className={classes.card}>
        <Group noWrap spacing={0}>
          <Image src={cover} height={124} width={112} />
          <div className={classes.body}>
            <Text transform="capitalize" color="dark" weight={700} size="sm">
              {name.slice(0, 17)}
            </Text>
            <Text className={classes.title} mb="md" size="xs">
              {description.slice(0, 32)}...
            </Text>

            <div className={classes.card_button}>
              <Text size="lg" color="dark" weight={700}>
                ${flat_price}
              </Text>
              <Button className={classes.btn} size="xs" radius="lg">
                <IconShoppingBag height={16} />
                <Text weight={700}>add</Text>
              </Button>
            </div>
            {/* <Group noWrap spacing="xs">
              <Group spacing="xs" noWrap>
                <Avatar size={20} src={author.avatar} />
                <Text size="xs">{author.name}</Text>
              </Group>
              <Text size="xs" color="dimmed">
                •
              </Text>
              <Text size="xs" color="dimmed">
                {date}
              </Text>
            </Group> */}
          </div>
        </Group>
      </Card>
    </div>
  );
};

export default PopularItemsCard;
