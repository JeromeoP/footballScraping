const createRadarData = (playerData1, playerData2) => {
    // Assumes playerData1 and playerData2 are not null
    let RadarData = null;
    if (playerData1 && playerData2 !== null)
  
    {
      RadarData = [
     
        {
          subject: 'Goals',
          [playerData1.name]: playerData1.goalsPer90,
          [playerData2.name]: playerData2.goalsPer90,
        },
        {
          subject: 'Assists',
          [playerData1.name]: playerData1.assistsPer90,
          [playerData2.name]: playerData2.assistsPer90,
        },
        {
          subject: 'G+A',
          [playerData1.name]: playerData1.goalsAssistsPer90,
          [playerData2.name]: playerData2.goalsAssistsPer90,
        },
 
        {
          subject: 'xG',
          [playerData1.name]: playerData1.xgPer90,
          [playerData2.name]: playerData2.xgPer90,
        },
        {
          subject: 'xA',
          [playerData1.name]: playerData1.xgAssistPer90,
          [playerData2.name]: playerData2.xgAssistPer90,
        },
        {
          subject: 'xG + xA',
          [playerData1.name]: playerData1.xgXgAssistPer90,
          [playerData2.name]: playerData2.xgXgAssistPer90,
        },
        {
          subject: 'NPxG',
          [playerData1.name]: playerData1.npxgPer90,
          [playerData2.name]: playerData2.npxgPer90,
        },
        {
          subject: 'NPxG + xA',
          [playerData1.name]: playerData1.npxgXgAssistPer90,
          [playerData2.name]: playerData2.npxgXgAssistPer90,
        },
        // Add more subjects here for more data points in the chart...
      ];
    }
  
    return RadarData;
  };
  
  export default createRadarData;
  