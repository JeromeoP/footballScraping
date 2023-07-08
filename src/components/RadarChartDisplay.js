import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import createRadarData from '../utils/createRadarData';

const RadarChartDisplay = ({ playerData1, playerData2 }) => {
  const radarData = createRadarData(playerData1, playerData2);
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={radarData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Tooltip />
      <Radar name={playerData1.name} dataKey={playerData1.name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name={playerData2.name} dataKey={playerData2.name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarChartDisplay;
