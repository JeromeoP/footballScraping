import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { useBreakpointValue } from "@chakra-ui/react"; // <-- Add this import
import createRadarData from '../utils/createRadarData';

const RadarChartDisplay = ({ playerData1, playerData2 }) => {
  const radarData = createRadarData(playerData1, playerData2);

  // Responsive values
  const width = useBreakpointValue({ base: 300, md: 500, lg: 600 });
  const height = useBreakpointValue({ base: 250, md: 400, lg: 500 });
  const cx = useBreakpointValue({ base: 150, md: 250, lg: 300 });
  const cy = useBreakpointValue({ base: 125, md: 200, lg: 250 });
  const outerRadius = useBreakpointValue({ base: 75, md: 125, lg: 150 });

  return (
    <RadarChart cx={cx} cy={cy} outerRadius={outerRadius} width={width} height={height} data={radarData}>
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
