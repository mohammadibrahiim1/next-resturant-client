"use client";
import { Button, Card, Image, Text, createStyles, rem } from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import axios from "axios";

import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../Context/DataContext";
import CartModal from "../../../Components/CartModal/CartModal";
import { addToModal } from "../../../redux/action/action";
import { useDispatch } from "react-redux";

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

const OfferItems = ({ params }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  // const { selectItem, setSelectItem } = useContext(ApiContext);
  // console.log(selectItem);
  // const router = useRouter();

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
      {/* new offer page */}
      {data?.map((offer) => (
        <>
          <Text mb={25} color="#FF006B" tt="capitalize" fz="28px" fw={700}>
            {offer?.name}
          </Text>
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

      <div>
        <CartModal></CartModal>
      </div>
    </div>
  );
};

export default OfferItems;
