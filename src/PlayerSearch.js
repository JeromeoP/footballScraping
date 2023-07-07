import React, { useState } from 'react';
import { Button, Input, Box, Text, Spinner, VStack, HStack } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function PlayerSearch() {
  const [playerId1, setPlayerId1] = useState('');
  const [playerId2, setPlayerId2] = useState('');
  const [playerData1, setPlayerData1] = useState(null);
  const [playerData2, setPlayerData2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);

  const searchPlayers = async () => {
    setLoading(true);
    const res1 = await fetch(`http://localhost:3001/scrape/${encodeURIComponent(playerId1)}`);
    const data1 = await res1.json();
    setPlayerData1(data1[0]);  // Only take the first player in the response

    const res2 = await fetch(`http://localhost:3001/scrape/${encodeURIComponent(playerId2)}`);
    const data2 = await res2.json();
    setPlayerData2(data2[0]);  // Only take the first player in the response

    setLoading(false);

    const chartData = [
      {
        name: 'Goals',
        [data1[0].name]: data1[0].goals,
        [data2[0].name]: data2[0].goals,
      },
    ];
    setChartData(chartData);
  };

  const PlayerInfo = ({ playerData }) => (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" padding={4} marginTop={4}>
      <Text fontSize="xl" marginBottom={2}>Player: {playerData.name}</Text>
      <Text>Games Played: {playerData.games}</Text>
      <Text>Goals Scored: {playerData.goals}</Text>
      <Text>Clean Sheets: {playerData.clean_sheets}</Text>
      <Text marginTop={2}>More Info: <a href={playerData.href}>Link</a></Text>
    </Box>
  );

  return (
    <VStack spacing={4}>
      <HStack spacing={4}>
        <Input value={playerId1} onChange={e => setPlayerId1(e.target.value)} placeholder="Player 1" />
        <Input value={playerId2} onChange={e => setPlayerId2(e.target.value)} placeholder="Player 2" />
      </HStack>
      <Button onClick={searchPlayers} isLoading={loading}>Compare</Button>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <HStack spacing={4}>
          {playerData1 && <PlayerInfo playerData={playerData1} />}
          {playerData2 && <PlayerInfo playerData={playerData2} />}
          {chartData && (
            <BarChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={playerData1.name} fill="#8884d8" />
              <Bar dataKey={playerData2.name} fill="#82ca9d" />
            </BarChart>
          )}
        </HStack>
      )}
    </VStack>
  );
}

export default PlayerSearch;
