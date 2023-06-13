import { Badge } from "@chakra-ui/react";
import React from "react";

interface ScoreProps {
  score: number;
}

const CriticScore = ({ score }: ScoreProps) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
