import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componet/NavBar";
import GameGrid from "./componet/GameGrid";
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem padding="20px" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem padding="20px" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
