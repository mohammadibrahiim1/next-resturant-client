import { Card, Group, Image, Text, createStyles } from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import React from "react";
import { addToModal } from "../../redux/features/modalSlice/modalSlice";
import { useDispatch } from "react-redux";

const useStyles = createStyles((theme) => ({
  card: {
    width: "357px",
    height: "124px",
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    // width: "262px",
    // height: "299px",
    border: "1px solid #f8f8f8",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",
      transition: "0.3s",
    },
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "9px",
    paddingLeft: "7px",
    borderRadius: "11px",
    cursor: "pointer",
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

export default function PopularItemCard({ item }) {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { flat_price, cover, name, description } = item;
  return (
    <div>
      {" "}
      <div>
        <Card shadow="sm" radius="md" p={0} className={classes.card}>
          <Group noWrap spacing={0}>
            <Image src={cover} alt="cover photo" height={124} width={112} />
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
                <label htmlFor="my_modal_6" onClick={() => dispatch(addToModal(item))} className={classes.btn}>
                  <IconShoppingBag height={16} />
                  <Text weight={700} size={"sm"}>
                    add
                  </Text>
                </label>
              </div>
            </div>
          </Group>
        </Card>
      </div>
    </div>
  );
}
