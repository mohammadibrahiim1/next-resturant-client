"use client";
import React from "react";
import { Container } from "@mantine/core";
import CategoryMenu from "../../Components/CategoryMenu/CategoryMenu";
import MainMenu from "../../Components/MainMenu/MainMenu";

const Menu = () => {
  return (
    <div>
      <Container>
        <MainMenu></MainMenu>
      </Container>
    </div>
  );
};

export default Menu;
