"use client";
import { Card, Image, Text, createStyles } from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToModal } from "../../redux/features/modalSlice/modalSlice";

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
    height: "299px",
    border: "1px solid #f8f8f8",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",
      transition: "0.3s",
    },
  },

  card_footer_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
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

export default function FoodItem({ item }) {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { items, addons, _id } = item;
  return (
    <div>
      <div>
        <section>
          <Text mt={46} mb={21} color="#FF006B" tt="capitalize" fz="28px" fw={700}>
            {item.name}
          </Text>

          <div className={classes.card_container}>
            {items?.map((foodItem) => (
              <>
                <Card className={classes.card} padding="lg" radius="md" shadow="sm">
                  <Card.Section>
                    <Image src={foodItem.cover} height={160} alt={foodItem.name} />
                    <div className="p-3">
                      <Text fz="sm" weight={700}>
                        {foodItem.name}
                      </Text>

                      <Text size="xs" color="dimmed" className="pt-2">
                        {foodItem.description.slice(0, 70)}...
                      </Text>

                      <div className={classes.card_footer_container}>
                        <Text size="lg" color="dark" weight={700}>
                          ${foodItem.flat_price}
                        </Text>
                        <label
                          htmlFor="my_modal_6"
                          onClick={() => dispatch(addToModal(foodItem))}
                          // onClick={() => setSelectItem(item)}
                          className={classes.btn}
                        >
                          <IconShoppingBag height={16} />
                          <Text weight={700} size={"sm"}>
                            add
                          </Text>
                        </label>
                      </div>
                    </div>
                  </Card.Section>
                </Card>
              </>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
