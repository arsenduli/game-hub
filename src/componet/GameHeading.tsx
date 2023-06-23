import { Heading } from '@chakra-ui/react';
import React from 'react'
import { GameQuerry } from '../App';
interface Props {
  gameQuery : GameQuerry;
}

const GameHeading = ({gameQuery} : Props) => {

const headingText = `${gameQuery.platform?.name || ''}   ${gameQuery.genre?.name || ''} ${'Games'}`
  return (
    <Heading as='h1' marginY={5}>{headingText}</Heading>
  )
}

export default GameHeading;