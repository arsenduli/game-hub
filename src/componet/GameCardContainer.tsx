import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface CardProops {
  children: ReactNode;
}

const GameCardContainer = ({ children }: CardProops) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
