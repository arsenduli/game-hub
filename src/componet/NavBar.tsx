import { HStack, Image, Text, Input, Button, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import SerachInput from "./SerachInput";
interface Proops {
  onSearch : (searchText : string) => void;
}
const NavBar = ({onSearch}:Proops) => {
  return (
    <HStack justifyContent="space-between" padding="20px">
      <Image src={logo} boxSize="60px"></Image>
      <SerachInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
