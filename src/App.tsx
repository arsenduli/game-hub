import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componet/NavBar";
import GameGrid from "./componet/GameGrid";
import GenreList from "./componet/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
function App() {
  const [selecetedGender, setSelectetdGender] = useState<Genres | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: " 200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList onSelectGenre={(gener) => setSelectetdGender(gener)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
