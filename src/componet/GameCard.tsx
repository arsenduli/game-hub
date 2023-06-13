import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameProops {
  game: Game;
}

const GameCard = ({ game }: GameProops) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
