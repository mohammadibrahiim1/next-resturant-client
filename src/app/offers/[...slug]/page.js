"use client";
import { Button, Card, Image, Text, createStyles, rem } from "@mantine/core";
import { IconShoppingBag } from "@tabler/icons-react";
import axios from "axios";

import { useRouter } from "next/router";

import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  // container: {
  //   marginTop: "65px",
  //   display: "grid",
  //   gridTemplateColumns: "repeat(2,1fr)",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   gap: "28px",
  // },
  // card: {
  //   height: rem(136),
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  //   alignItems: "flex-start",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // },

  // title: {
  //   fontFamily: `Greycliff CF ${theme.fontFamily}`,
  //   fontWeight: 900,
  //   color: theme.white,
  //   lineHeight: 1.2,
  //   fontSize: rem(32),
  //   marginTop: theme.spacing.xs,
  // },

  // category: {
  //   color: theme.white,
  //   opacity: 0.7,
  //   fontWeight: 700,
  //   textTransform: "uppercase",
  // },

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
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.1), 0 5px 20px 0 rgba(0,0,0,0.1) ",
      transition: "0.3s",
    },
    // backgroundColor: "#F8F9FA",
  },

  card_button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
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

const OfferItems = ({ params }) => {
  const { classes } = useStyles();
  // const router = useRouter();

  const [data, setData] = useState([]);
  // console.log(useRouter());
  const slug = params.slug[0];

  const handleOffer = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/offer?slug=${slug}`
      );

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
          <Text
            // mt={46}
            mb={25}
            color="#FF006B"
            tt="capitalize"
            fz="28px"
            fw={700}
          >
            {offer.name}
          </Text>
          <div>
            <div className={classes.card_container}>
              {offer.items.map((item) => (
                <>
                  <Card
                    className={classes.card}
                    // shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                  >
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
                          <Button className={classes.btn} size="xs" radius="lg">
                            <IconShoppingBag height={16} />
                            <Text weight={700}>add</Text>
                          </Button>
                        </div>
                      </div>
                    </Card.Section>
                  </Card>
                </>
              ))}
            </div>
            {/* <img src={offer.image} alt="" srcset="" /> */}
            {/* {offer.items.length} */}
            {/* <Image
              src={offer.image}
              alt=""
              srcset=""
              width="120"
              height="120"
            /> */}
          </div>
        </>
      ))}
    </div>
  );
};

export default OfferItems;
