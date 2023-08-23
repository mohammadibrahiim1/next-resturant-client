"use client";
import { Container, Text } from "@mantine/core";
import React from "react";
import OfferCard from "../Components/OfferCard/OfferCard";

export default function Offers() {
  return (
    <div>
      <Container size={"lg"} pt={110}>
        <Text color="#FF006B" tt="capitalize" fz="28px" fw={700}>
          All Offers
        </Text>
        <OfferCard></OfferCard>
      </Container>
    </div>
  );
}
