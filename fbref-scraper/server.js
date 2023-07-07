const express = require('express');
const cors = require('cors');

const puppeteer = require('puppeteer');

const app = express();
app.use(cors());

const port = 3001; // Your backend port
app.get('/scrape/:playerName', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://fbref.com/en/comps/9/stats/Premier-League-Stats', {
        waitUntil: 'networkidle0',  // wait until all network connections are idle
    });

    // Wait for the specific selector to be present on the page
    await page.waitForSelector("#stats_standard tbody tr");

    const playerName = req.params.playerName;

    const data = await page.evaluate((playerName) => {
        const playerData = [];
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
                        const games = gamesCell ? gamesCell.textContent : null;
                        const goals = goalsCell ? goalsCell.textContent : null;
                        if(name.toLowerCase() === playerName.toLowerCase()) {
                            playerData.push({
                                name,
                                href,
                                games,
                                goals,
                            });
                        }
                    }
                }
            } catch(e) {
                console.error(e);
            }
        });

        return playerData;
    }, playerName); // pass playerName into the page.evaluate callback
    
    await browser.close();
    res.send(data);
});

  

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
