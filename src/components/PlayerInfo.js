import React from 'react';
import { Box, Text } from '@chakra-ui/react';

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

export default PlayerInfo;
