"use client";
import React from "react";
import OfferCard from "../../Components/OfferCard/OfferCard";
// import OfferItems from "../offerItems/page";
import { Text } from "@mantine/core";

const Offers = () => {
  return (
    <div>
      <section>
        <Text
          // mt={46}
          mb={18}
          color="#FF006B"
          tt="capitalize"
          fz="28px"
          fw={700}
        >
          All Offers
        </Text>
        <OfferCard></OfferCard>
      </section>
    </div>
  );
};

export default Offers;
