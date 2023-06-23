import { Genres } from "./useGenres";
import useData from "./useData";
import { Platform } from "./usePlatform";
import { GameQuerry } from "../App";


export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms : {platform : Platform} []
    metacritic : number
  }
  


const useGames = (gameQuery : GameQuerry) => 
useData<Game>('/games' ,{params :{genres : gameQuery.genre?.id , platforms : gameQuery.platform?.id , ordering : gameQuery.ordering , search : gameQuery.serachText}  } 
, [gameQuery]  );
export default useGames;