"use client";
import { Button, Text, createStyles } from "@mantine/core";
import React, { useState } from "react";
import { useGetFoodCategoryQuery } from "../../redux/features/api/apiSlice";
import HomeMenuItem from "../HomeMenuItem/HomeMenuItem";

const useStyles = createStyles(() => ({
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(8,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "9px",
  },

  heading: {
    fontSize: "2rem",
    lineHeight: "2rem",
    fontWeight: "700",
    textTransform: "capitalize",
    color: "#000000",
    // paddingBottom: "15px",
  },
  heading_container: {
    display: "flex",
    // gridTemplateColumns: "repeat(2,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
    marginBottom: "15px",
    marginTop: " 80px",
  },

  btn_viewAll: {
    color: "#FF006B",
    fontSize: "13px",
    textTransform: "capitalize",
    backgroundColor: "#FFF0F6 !important",
    twBgOpacity: "1",
    "&:hover": {
      backgroundColor: "#FF006B !important",
      color: "#FFFFFF",
      transition: ".3s",
    },
  },
}));

export default function HomeMenu() {
  const { classes } = useStyles();
  const [viewAll, setViewAll] = useState(8);
  const handelViewAll = () => {
    setViewAll((preValue) => preValue + 1);
  };

  const { data: categories, isLoading, isError } = useGetFoodCategoryQuery();
  console.log(categories);

  if (isLoading) {
    return <div className="text-center text-red-500">Loading...</div>;
  }

  return (
    <div>
      {" "}
      <div>
        <section>
          <div className={classes.heading_container}>
            <Text className={classes.heading}>Our Menu</Text>
            <Button onClick={handelViewAll} className={classes.btn_viewAll} size="xs" radius={15}>
              view all
            </Button>
          </div>
          <div className={classes.card_container}>
            {categories?.slice(0, viewAll).map((item) => (
              <>
                <HomeMenuItem item={item}></HomeMenuItem>
              </>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
