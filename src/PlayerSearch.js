import React, { useState, useEffect } from 'react';
import { Button, Input, Box, Text, Spinner, VStack, HStack } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

function PlayerSearch() {
  const [playerId1, setPlayerId1] = useState('');
  const [playerId2, setPlayerId2] = useState('');
  const [playerData1, setPlayerData1] = useState(null);
  const [playerData2, setPlayerData2] = useState(null);
  const [loading, setLoading] = useState(false);
  let RadarData = null;
  const searchPlayers = async () => {
    setLoading(true);
    const res1 = await fetch(`http://localhost:3001/scrape/${encodeURIComponent(playerId1)}`);
    const data1 = await res1.json();
    setPlayerData1(data1);  // Only take the first player in the response

    const res2 = await fetch(`http://localhost:3001/scrape/${encodeURIComponent(playerId2)}`);
    const data2 = await res2.json();
    setPlayerData2(data2);  // Only take the first player in the response

    setLoading(false);
console.log("hej", data1)
    
  };
  if (playerData1 && playerData2 !== null)
  
  {
    RadarData = [
   
      {
        subject: 'Goals per 90',
        [playerData1.name]: playerData1.goalsPer90,
        [playerData2.name]: playerData2.goalsPer90,
      },
      {
        subject: 'Assists per 90',
        [playerData1.name]: playerData1.assistsPer90,
        [playerData2.name]: playerData2.assistsPer90,
      },
      {
        subject: 'Goals + Assists per 90',
        [playerData1.name]: playerData1.goalsAssistsPer90,
        [playerData2.name]: playerData2.goalsAssistsPer90,
      },
      {
        subject: 'Goals from Penalties per 90',
        [playerData1.name]: playerData1.goalsPensPer90,
        [playerData2.name]: playerData2.goalsPensPer90,
      },
      {
        subject: 'Goals + Assists from Penalties per 90',
        [playerData1.name]: playerData1.goalsAssistsPensPer90,
        [playerData2.name]: playerData2.goalsAssistsPensPer90,
      },
      {
        subject: 'xG per 90',
        [playerData1.name]: playerData1.xgPer90,
        [playerData2.name]: playerData2.xgPer90,
      },
      {
        subject: 'xA per 90',
        [playerData1.name]: playerData1.xgAssistPer90,
        [playerData2.name]: playerData2.xgAssistPer90,
      },
      {
        subject: 'xG + xA per 90',
        [playerData1.name]: playerData1.xgXgAssistPer90,
        [playerData2.name]: playerData2.xgXgAssistPer90,
      },
      {
        subject: 'Non-Penalty xG per 90',
        [playerData1.name]: playerData1.npxgPer90,
        [playerData2.name]: playerData2.npxgPer90,
      },
      {
        subject: 'Non-Penalty xG + xA per 90',
        [playerData1.name]: playerData1.npxgXgAssistPer90,
        [playerData2.name]: playerData2.npxgXgAssistPer90,
      },
      // Add more subjects here for more data points in the chart...
    ];
  }
// Add a useEffect hook to run when the component mounts
useEffect(() => {
  // This function initializes the app's data
  const initializeData = async () => {
    const res = await fetch('http://localhost:3001/scrape-all');
    const data = await res.json();
    console.log('Data initialized', data);
  };

  // Call the function
  initializeData();
}, []); // Empty dependency array so this runs once when the component mounts
  
  const PlayerInfo = ({ playerData }) => (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" padding={4} marginTop={4}>
      <Text fontSize="xl" marginBottom={2}>Player: {playerData.name}</Text>
      <Text>Games Played: {playerData.games}</Text>
      <Text>Goals Scored: {playerData.goals}</Text>
      <Text>Expected Goals: {playerData.xG}</Text>
      <Text>Non-Penalty Expected Goals: {playerData.npxG}</Text>
      <Text>Assists: {playerData.assist}</Text>
      <Text>Expected Assists: {playerData.xgAssist}</Text>
      <Text>Position: {playerData.position}</Text>
      <Text>Nationality: {playerData.nationality}</Text>
      <Text>Age: {playerData.age}</Text>
      <Text>Games Started: {playerData.gamesStarts}</Text>
      <Text>Minutes Played: {playerData.minutes}</Text>
      <Text>Minutes per 90: {playerData.minutes90s}</Text>
      <Text>Goals + Assists: {playerData.goalsAssists}</Text>
      <Text>Goals from Penalties: {playerData.goalsPens}</Text>
      <Text>Penalties Made: {playerData.pensMade}</Text>
      <Text>Penalties Attempted: {playerData.pensAtt}</Text>
      <Text>Yellow Cards: {playerData.yellowCards}</Text>
      <Text>Red Cards: {playerData.redCards}</Text>
      <Text>Non-Penalty xG + xA: {playerData.npxgXgAssist}</Text>
      <Text>Progressive Carries: {playerData.progressiveCarries}</Text>
      <Text>Progressive Passes: {playerData.progressivePasses}</Text>
      <Text>Progressive Passes Received: {playerData.progressivePassesReceived}</Text>
      <Text>Goals per 90: {playerData.goalsPer90}</Text>
      <Text>Assists per 90: {playerData.assistsPer90}</Text>
      <Text>Goals + Assists per 90: {playerData.goalsAssistsPer90}</Text>
      <Text>Goals from Penalties per 90: {playerData.goalsPensPer90}</Text>
      <Text>Goals + Assists from Penalties per 90: {playerData.goalsAssistsPensPer90}</Text>
      <Text>xG per 90: {playerData.xgPer90}</Text>
      <Text>xA per 90: {playerData.xgAssistPer90}</Text>
      <Text>xG + xA per 90: {playerData.xgXgAssistPer90}</Text>
      <Text>Non-Penalty xG per 90: {playerData.npxgPer90}</Text>
      <Text>Non-Penalty xG + xA per 90: {playerData.npxgXgAssistPer90}</Text>
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
          {RadarData && (
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={RadarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar name={playerData1.name} dataKey={playerData1.name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name={playerData2.name} dataKey={playerData2.name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
          )}
        </HStack>
      )}
    </VStack>
  );
}

export default PlayerSearch;