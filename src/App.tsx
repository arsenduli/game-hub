import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componet/NavBar";
import GameGrid from "./componet/GameGrid";
import GenreList from "./componet/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./componet/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuerry {
  genre : Genres | null;
  platform : Platform | null;
}
function App() {
  const [gameQuerry , setGameQuerry] = useState<GameQuerry>({} as GameQuerry);
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
          <GenreList selectedGenre={gameQuerry.genre} onSelectGenre={(genre) => setGameQuerry({...gameQuerry, genre})} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatform={gameQuerry.platform} onSelectPlatform={(platform => setGameQuerry({...gameQuerry , platform}))} />
        <GameGrid gameQuery={gameQuerry} />
      </GridItem>
    </Grid>
  );
}

export default App;
