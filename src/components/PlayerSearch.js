import React, { useState } from 'react';
import { VStack, HStack ,Flex} from "@chakra-ui/react";

import usePlayerData from '../hooks/usePlayerData';
import PlayerInfo from './PlayerInfo';
import RadarChartDisplay from './RadarChartDisplay';
import PlayerInput from './PlayerInput';
import LoadingSpinner from './LoadingSpinner';
import CompareButton from './CompareButton';

function PlayerSearch() {
  const { playerData1, playerData2, loading, fetchPlayerData, bigLoading, bigData } = usePlayerData();
  const [playerId1, setPlayerId1] = useState('');
  const [playerId2, setPlayerId2] = useState('');

  const handleCompare = () => {
    fetchPlayerData(playerId1,playerId2 );
  };
  console.log("playerdata: ", playerData1)

  if (bigLoading) {
    return (
      <Flex align="center" justify="center" height="100vh">

      <LoadingSpinner />     
      </Flex>
 );
  }
  return (
    <>
    {console.log("playerD", playerData1)}
    <VStack spacing={4}>
      <PlayerInput bigData={bigData} playerId1={playerId1} playerId2={playerId2} setPlayerId1={setPlayerId1} setPlayerId2={setPlayerId2} />
      <CompareButton onClick={handleCompare} loading={loading} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <HStack spacing={4}>
          {!playerData1?.error  && <PlayerInfo playerData={playerData1} />}
          {!playerData2?.error  && <PlayerInfo playerData={playerData2} />}
          {playerData1  && playerData2  && (
            <RadarChartDisplay playerData1={playerData1} playerData2={playerData2} />
          )}
        </HStack>
      )}
    </VStack>
    </>
  );
}

export default PlayerSearch;
