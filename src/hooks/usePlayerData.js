import { useState, useEffect } from 'react';

const usePlayerData = () => {
  const [playerData1, setPlayerData1] = useState(null);
  const [playerData2, setPlayerData2] = useState(null);
  const [bigLoading, setBigLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchPlayerData = async (playerId1, playerId2) => {
    setLoading(true);
    try {
        const res1 = await fetch(`http://localhost:3001/scrape/${encodeURIComponent(playerId1)}`);
        const data1 = await res1.json();
        setPlayerData1(data1);  // Only take the first player in the response
    
        const res2 = await fetch(`http://localhost:3001/scrape/${encodeURIComponent(playerId2)}`);
        const data2 = await res2.json();
        setPlayerData2(data2);  // Only take the first player in the response
    
        setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const initializeData = async () => {
    try {
        setBigLoading(true);
      const res = await fetch('http://localhost:3001/scrape-all');
      const data = await res.json();
      console.log('Data initialized', data);
      setBigLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initializeData();
  }, []);
  return { playerData1,playerData2, loading, fetchPlayerData, bigLoading };
};

export default usePlayerData;
