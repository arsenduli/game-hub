import { Genres } from "./useGenres";
import useData from "./useData";
import { Platform } from "./usePlatform";


export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms : {platform : Platform} []
    metacritic : number
  }
  


const useGames = (selectedGenre : Genres | null , selectedPlatform : Platform | null) => 
useData<Game>('/games' ,{params :{genres : selectedGenre?.id , platforms : selectedPlatform?.id}  } 
, [selectedGenre?.id , selectedPlatform?.id]  );
export default useGames;