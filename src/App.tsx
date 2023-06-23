import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./componet/NavBar";
import GameGrid from "./componet/GameGrid";
import GenreList from "./componet/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./componet/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./componet/SortSelector";
import GameHeading from "./componet/GameHeading";

export interface GameQuerry {
  genre : Genres | null;
  platform : Platform | null;
  ordering : string,
  serachText : string,
}
function App() {
  const [gameQuerry , setGameQuerry] = useState<GameQuerry>({} as GameQuerry);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: " 200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={(serachText => setGameQuerry({...gameQuerry , serachText}))}/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList selectedGenre={gameQuerry.genre} onSelectGenre={(genre) => setGameQuerry({...gameQuerry, genre})} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
          <GameHeading gameQuery={gameQuerry} />
        <Flex  marginBottom={5} paddingLeft={2}>
          <Box marginRight={3}>
          <PlatformSelector selectedPlatform={gameQuerry.platform} onSelectPlatform={(platform => setGameQuerry({...gameQuerry , platform}))} />
          </Box>
          <SortSelector SelectSortOrders={gameQuerry.ordering} onSelectSortOrders={(ordering=> setGameQuerry({...gameQuerry , ordering}))} />
        </Flex>
        <GameGrid gameQuery={gameQuerry} />
      </GridItem>
    </Grid>
  );
}

export default App;
