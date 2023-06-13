import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";

interface GameProops {
  game: Game;
}

const GameCard = ({ game }: GameProops) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
