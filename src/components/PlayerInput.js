import React from 'react';
import { Input, HStack } from '@chakra-ui/react';

const PlayerInput = ({ playerId1, playerId2, setPlayerId1, setPlayerId2 }) => (
  <HStack spacing={4}>
    <Input value={playerId1} onChange={e => setPlayerId1(e.target.value)} placeholder="Player 1" />
    <Input value={playerId2} onChange={e => setPlayerId2(e.target.value)} placeholder="Player 2" />
  </HStack>
);

export default PlayerInput;
