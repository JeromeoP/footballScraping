import React from 'react';
import { HStack } from '@chakra-ui/react';
import Select from 'react-select'

const PlayerInput = ({bigData, playerId1, playerId2, setPlayerId1, setPlayerId2 }) => {
  const capitalizeName = name => name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const formattedBigData = bigData.map(item => {
    const capitalizedItem = capitalizeName(item);
    return { value: item, label: capitalizedItem }
  });

  return (
    <HStack spacing={4}>
      <Select 
        value={formattedBigData.find(option => option.value === playerId1)} 
        onChange={selectedOption => setPlayerId1(selectedOption.value)} 
        placeholder="Player 1" 
        options={formattedBigData} 
      />
      <Select 
        value={formattedBigData.find(option => option.value === playerId2)} 
        onChange={selectedOption => setPlayerId2(selectedOption.value)} 
        placeholder="Player 2" 
        options={formattedBigData} 
      />
    </HStack>
  );
}

export default PlayerInput;
