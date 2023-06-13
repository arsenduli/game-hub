import { HStack, Image, Text, Input, Button, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="60px"></Image>
      <HStack>
        <Show above="lg">
          <Input htmlSize={100} width="auto" placeholder="Basic usage" />
          <Button colorScheme="green">Search</Button>
        </Show>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
