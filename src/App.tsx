import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componet/NavBar";
import GameGrid from "./componet/GameGrid";
import GenreList from "./componet/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./componet/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
function App() {
  const [selecetedGender, setSelectetdGender] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectetdPlatform] = useState<Platform | null>(null);
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
          <GenreList selectedGenre={selecetedGender} onSelectGenre={(gener) => setSelectetdGender(gener)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(plat => setSelectetdPlatform(plat))} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selecetedGender} />
      </GridItem>
    </Grid>
  );
}

export default App;
