"use client";

import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const OfferItems = () => {
  const router = useRouter();
  console.log(router.query);
  // const { data } = router.query;
  // const decodedData = JSON.parse(decodeURIComponent(data));
  // console.log(offer);

  return <div>new offer page</div>;
};

export default OfferItems;
