"use client";
import { Card, Container, Image, Text, createStyles } from "@mantine/core";
import { IconArrowNarrowLeft, IconShoppingBag } from "@tabler/icons-react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToModal } from "../../redux/features/modalSlice/modalSlice";
import FoodOrderModal from "../../Components/FoodOrderModal/FoodOrderModal";
const useStyles = createStyles((theme) => ({
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

  card_button: {
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
export default function OfferItems({ params }) {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const [data, setData] = useState([]);
  console.log(data);

  const slug = params.slug[0];

  const handleOffer = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/offer?slug=${slug}`);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleOffer();
  }, []);

  return (
    <div>
      {" "}
      <Container size={"lg"} pt={110}>
        {/* new offer page */}
        {data?.map((offer) => (
          <>
            <div className="flex justify-between items-center">
              <Text mb={25} color="#FF006B" tt="capitalize" fz="28px" fw={700}>
                {offer?.name}
              </Text>
            </div>
            <div>
              <div className={classes.card_container}>
                {offer?.items?.map((item) => (
                  <>
                    <Card className={classes.card} shadow="sm" padding="lg" radius="md">
                      <Card.Section>
                        <Image src={item.cover} height={160} alt={item.name} />
                        <div className="p-3">
                          <Text fz="sm" weight={700}>
                            {item.name}
                          </Text>

                          <Text size="xs" color="dimmed" className="pt-2">
                            {item.description.slice(0, 70)}...
                          </Text>

                          <div className={classes.card_button}>
                            <Text size="lg" color="dark" weight={700}>
                              ${item.flat_price}
                            </Text>
                            <label
                              htmlFor="my_modal_6"
                              onClick={() => dispatch(addToModal(item))}
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
            </div>
          </>
        ))}

        <Link href={"/offers"} className="flex justify-start items-center  mt-3">
          <IconArrowNarrowLeft color="#FF006B" size={"1.5rem"} />
          <Text c={"#FF006B"} fw={700} fz={16}>
            Back
          </Text>
        </Link>

        <div>
          <FoodOrderModal></FoodOrderModal>
        </div>
      </Container>
    </div>
  );
}
