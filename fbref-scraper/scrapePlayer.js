const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // Your MongoDB connection string
const client = new MongoClient(uri);

module.exports = async (req, res) => {
  const player = req.query.player.toLowerCase();

  try {
    await client.connect();
    const collection = client.db("test").collection("players");
    const playerData = await collection.findOne({ name: player });

    if (playerData) {
      res.json(playerData);
    } else {
      res.status(404).json({ error: `No data found for player: ${player}` });
    }
  } finally {
    await client.close();
  }
};
