import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre : Genres | null,
}

const GenreList = ({selectedGenre ,  onSelectGenre }: Props) => {
  const { data, isLoading, error } = useData<Genres>("/genres");
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(gener.image_background)}
              borderRadius={8}
              objectFit='cover'
              ></Image>
            <Button
              fontWeight={gener.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onSelectGenre(gener)}
              variant="link"
              fontSize="lg"
              whiteSpace='normal'
              textAlign='left'
            >
              {gener.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
      </>
  );
};

export default GenreList;
