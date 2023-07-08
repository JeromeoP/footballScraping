const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const NodeCache = require('node-cache');

const app = express();
app.use(cors());

const myCache = new NodeCache({ stdTTL: 3600, checkperiod: 600 }); // Create a cache object
const port = 3001; // Your backend port

// A new endpoint that scrapes all player data once and stores it in the cache
app.get('/scrape-all', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://fbref.com/en/comps/9/stats/Premier-League-Stats', {
        waitUntil: 'networkidle0',  // wait until all network connections are idle
    });

    // Wait for the specific selector to be present on the page
    await page.waitForSelector("#stats_standard tbody tr");

    const playerName = req.params.playerName;

    const data = await page.evaluate(() => {
        const allPlayerData = [];
        const players = Array.from(document.querySelectorAll("#stats_standard tbody tr"));

        players.forEach(player => {
            try {
                const nameCell = player.querySelector("td[data-stat='player']");
                if (nameCell) {
                    const anchor = nameCell.querySelector("a");
                    if (anchor) {
                        const name = anchor.textContent;
                        const href = anchor.href;
                        const gamesCell = player.querySelector("td[data-stat='games']");
                        const goalsCell = player.querySelector("td[data-stat='goals']");
                        const xgCell = player.querySelector("td[data-stat='xg']");
                        const npxgCell = player.querySelector("td[data-stat='npxg']");
                        const positionCell = player.querySelector("td[data-stat='position']");
                        const nationalityCell = player.querySelector("td[data-stat='nationality']");
                        const ageCell = player.querySelector("td[data-stat='age']");
                        const gamesStartsCell = player.querySelector("td[data-stat='games_starts']");
                        const minutesCell = player.querySelector("td[data-stat='minutes']");
                        const minutes90sCell = player.querySelector("td[data-stat='minutes_90s']");
                        const goalsAssistsCell = player.querySelector("td[data-stat='goals_assists']");
                        const goalsPensCell = player.querySelector("td[data-stat='goals_pens']");
                        const pensMadeCell = player.querySelector("td[data-stat='pens_made']");
                        const pensAttCell = player.querySelector("td[data-stat='pens_att']");
                        const yellowCardsCell = player.querySelector("td[data-stat='cards_yellow']");
                        const redCardsCell = player.querySelector("td[data-stat='cards_red']");
                        const npxgXgAssistCell = player.querySelector("td[data-stat='npxg_xg_assist']");
                        const progressiveCarriesCell = player.querySelector("td[data-stat='progressive_carries']");
                        const progressivePassesCell = player.querySelector("td[data-stat='progressive_passes']");
                        const progressivePassesReceivedCell = player.querySelector("td[data-stat='progressive_passes_received']");
                        const goalsPer90Cell = player.querySelector("td[data-stat='goals_per90']");
                        const assistsPer90Cell = player.querySelector("td[data-stat='assists_per90']");
                        const goalsAssistsPer90Cell = player.querySelector("td[data-stat='goals_assists_per90']");
                        const goalsPensPer90Cell = player.querySelector("td[data-stat='goals_pens_per90']");
                        const goalsAssistsPensPer90Cell = player.querySelector("td[data-stat='goals_assists_pens_per90']");
                        const xgPer90Cell = player.querySelector("td[data-stat='xg_per90']");
                        const xgAssistPer90Cell = player.querySelector("td[data-stat='xg_assist_per90']");
                        const xgXgAssistPer90Cell = player.querySelector("td[data-stat='xg_xg_assist_per90']");
                        const npxgPer90Cell = player.querySelector("td[data-stat='npxg_per90']");
                        const npxgXgAssistPer90Cell = player.querySelector("td[data-stat='npxg_xg_assist_per90']");
                        
                        const assisstCell = player.querySelector("td[data-stat='assists']");
                        const xgAssisstCell = player.querySelector("td[data-stat='xg_assist']");

                        const assist = assisstCell ? assisstCell.textContent : null;
                        const xgAssist = xgAssisstCell ? xgAssisstCell.textContent : null;

                        const xG = xgCell ? xgCell.textContent : null;
                        const npxG = npxgCell ? npxgCell.textContent : null;
                        const position = positionCell ? positionCell.textContent : null;
                        const nationality = nationalityCell ? nationalityCell.textContent : null;
                        const age = ageCell ? ageCell.textContent : null;
                        const gamesStarts = gamesStartsCell ? gamesStartsCell.textContent : null;
                        const minutes = minutesCell ? minutesCell.textContent : null;
                        const minutes90s = minutes90sCell ? minutes90sCell.textContent : null;
                        const goalsAssists = goalsAssistsCell ? goalsAssistsCell.textContent : null;
                        const goalsPens = goalsPensCell ? goalsPensCell.textContent : null;
                        const pensMade = pensMadeCell ? pensMadeCell.textContent : null;
                        const pensAtt = pensAttCell ? pensAttCell.textContent : null;
                        const yellowCards = yellowCardsCell ? yellowCardsCell.textContent : null;
                        const redCards = redCardsCell ? redCardsCell.textContent : null;
                        const npxgXgAssist = npxgXgAssistCell ? npxgXgAssistCell.textContent : null;
                        const progressiveCarries = progressiveCarriesCell ? progressiveCarriesCell.textContent : null;
                        const progressivePasses = progressivePassesCell ? progressivePassesCell.textContent : null;
                        const progressivePassesReceived = progressivePassesReceivedCell ? progressivePassesReceivedCell.textContent : null;
                        const goalsPer90 = goalsPer90Cell ? goalsPer90Cell.textContent : null;
                        const assistsPer90 = assistsPer90Cell ? assistsPer90Cell.textContent : null;
                        const goalsAssistsPer90 = goalsAssistsPer90Cell ? goalsAssistsPer90Cell.textContent : null;
                        const goalsPensPer90 = goalsPensPer90Cell ? goalsPensPer90Cell.textContent : null;
                        const goalsAssistsPensPer90 = goalsAssistsPensPer90Cell ? goalsAssistsPensPer90Cell.textContent : null;
                        const xgPer90 = xgPer90Cell ? xgPer90Cell.textContent : null;
                        const xgAssistPer90 = xgAssistPer90Cell ? xgAssistPer90Cell.textContent : null;
                        const xgXgAssistPer90 = xgXgAssistPer90Cell ? xgXgAssistPer90Cell.textContent : null;
                        const npxgPer90 = npxgPer90Cell ? npxgPer90Cell.textContent : null;
                        const npxgXgAssistPer90 = npxgXgAssistPer90Cell ? npxgXgAssistPer90Cell.textContent : null;


                        const games = gamesCell ? gamesCell.textContent : null;
                        const goals = goalsCell ? goalsCell.textContent : null;
                            allPlayerData.push({
                                name,
                                href,
                                games,
                                goals,
                                assist,
                                xG,
                                npxG,
                                xgAssist,
                                position,
                                nationality,
                                age,
                                gamesStarts,
                                minutes,
                                minutes90s,
                                goalsAssists,
                                goalsPens,
                                pensMade,
                                pensAtt,
                                yellowCards,
                                redCards,
                                npxgXgAssist,
                                progressiveCarries,
                                progressivePasses,
                                progressivePassesReceived,
                                goalsPer90,
                                assistsPer90,
                                goalsAssistsPer90,
                                goalsPensPer90,
                                goalsAssistsPensPer90,
                                xgPer90,
                                xgAssistPer90,
                                xgXgAssistPer90,
                                npxgPer90,
                                npxgXgAssistPer90,
                            });
                    }
                }
            } catch(e) {    
                console.error(e);
            }
        });

        return allPlayerData; // This will be an array of all player data objects
    });
    
    await browser.close();

    // Now, store each player data in the cache with the player's name as the key
    data.forEach(playerData => {
        myCache.set(playerData.name.toLowerCase(), playerData);
    });
    console.log("cahce: ", myCache.data)
    res.send({ status: 'Data scraped and cached' });
});

app.get('/scrape/:player', (req, res) => {
    const player = req.params.player.toLowerCase(); // Ensure the case matches the cached keys
    const playerData = myCache.get(player); // Fetch player data from cache
  
    if (playerData) {
      console.log(`Data retrieved from cache for player: ${player}`);
      res.json(playerData); // Return the player data
    } else {
      console.error(`No data found for player: ${player}`);
      res.status(404).json({ error: `No data found for player: ${player}` });
    }
  });
  
  

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});