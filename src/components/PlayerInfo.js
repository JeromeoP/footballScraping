
import React from 'react';
import { Box, Text, Progress, Stack, Flex } from '@chakra-ui/react';

const PlayerInfo = ({ playerData1, playerData2 }) => (
  playerData1 && playerData2 && (
    <Flex direction="column" alignItems="center" justifyContent="center">
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" padding={4} marginTop={4}>
      <Text fontSize="xl" marginBottom={2}>Player: {playerData1.name} vs {playerData2.name}</Text>

      {[
      ['Games Played', 'games'],
      ['Goals Scored', 'goals'],
      ['Expected Goals', 'xG'],
      ['Non-Penalty Expected Goals', 'npxG'],
      ['Assists', 'assist'],
      ['Expected Assists', 'xgAssist'],
      ['Games Started', 'gamesStarts'],
      ['Minutes Played', 'minutes'],
      ['Minutes per 90', 'minutes90s'],
      ['Goals + Assists', 'goalsAssists'],
      ['Goals from Penalties', 'goalsPens'],
      ['Penalties Made', 'pensMade'],
      ['Penalties Attempted', 'pensAtt'],
      ['Yellow Cards', 'yellowCards'],
      ['Red Cards', 'redCards'],
      ['Non-Penalty xG + xA', 'npxgXgAssist'],
      ['Progressive Carries', 'progressiveCarries'],
      ['Progressive Passes', 'progressivePasses'],
      ['Progressive Passes Received', 'progressivePassesReceived'],
      ['Goals per 90', 'goalsPer90'],
      ['Assists per 90', 'assistsPer90'],
      ['Goals + Assists per 90', 'goalsAssistsPer90'],
      ['Goals from Penalties per 90', 'goalsPensPer90'],
      ['Goals + Assists from Penalties per 90', 'goalsAssistsPensPer90'],
      ['xG per 90', 'xgPer90'],
      ['xA per 90', 'xgAssistPer90'],
      ['xG + xA per 90', 'xgXgAssistPer90'],
      ['Non-Penalty xG per 90', 'npxgPer90'],
      ['Non-Penalty xG + xA per 90', 'npxgXgAssistPer90'],
    
    
    ].map(([label, field]) => {
        const player1Value = parseFloat(playerData1[field]);
        const player2Value = parseFloat(playerData2[field]);
        const totalValue = player1Value + player2Value;
      
        let player1Percentage = totalValue !== 0 ? (player1Value / totalValue) * 100 : 0;
        let player2Percentage = totalValue !== 0 ? (player2Value / totalValue) * 100 : 0;
      
        return (
          <React.Fragment key={field}>
            <Text>{label}:</Text>
            <Stack direction="row" spacing={4} align="center">
            <Text flex="1" color={player1Value >= player2Value ? "blue.500" : "red.500"}>{player1Value}</Text>
            <Progress flex="1" value={player1Percentage} colorScheme={player1Value >= player2Value ? "blue" : "red"} />
            <Progress flex="1" value={player2Percentage} colorScheme={player1Value <= player2Value ? "blue" : "red"} />
            <Text flex="1" color={player1Value <= player2Value ? "blue.500" : "red.500"}>{player2Value}</Text>
            </Stack>

          </React.Fragment>
        );
      })}

<Text>Position: {playerData1.position} vs {playerData2.position}</Text>


      <Text marginTop={2}>More Info: <a href={playerData1.href}>Player 1 Link</a> | <a href={playerData2.href}>Player 2 Link</a></Text>
    </Box>
    </Flex>
  )
);

export default PlayerInfo;
