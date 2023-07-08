const createRadarData = (playerData1, playerData2) => {
    // Assumes playerData1 and playerData2 are not null
    let RadarData = null;
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
  
    return RadarData;
  };
  
  export default createRadarData;
  