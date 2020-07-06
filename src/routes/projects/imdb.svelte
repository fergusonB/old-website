<svelte:head>
  <title>IMDB Ratings</title>
</svelte:head>

<style>
.season{
    display:flex;
    align-items:center;
    
}
.seasonBox{
  padding:10px;
  border:1px solid white;
}
.seasonBox:hover{
  border:1px solid black;
}
.episode{
    border:1px solid white;
    padding: 10px;
    
}
.episode:hover{
    border: 1px solid black;
}

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: black;
  color: #fff;
  text-align: left;
  padding: 5px;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
    top:100%;
    left:50%;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>

<h1>IMDB Show Ratings</h1>

<p>This takes output from my project <a target="_blank" href="https://github.com/fergusonB/Puppeteer-IMDB-Scraper"> here</a>. It requires node, npm, and Puppeteer</p>

<p>
Please paste the contents from 'out.json' here and press go to generate a new chart.
<br>
Click <button on:click={()=>{
  fetch('https://ferguson.work/api/imdb/')
  .then(response => response.json())
  .then(data => userData = data);}}>here</button> to see a Game of Thrones example.
<br>
</p>
<p>
<input type="text" on:click={()=>userData = ''} bind:value={userData}> <button on:click={()=>data = JSON.parse(userData)}>Generate</button>

</p>



{#each Object.keys(data) as season,i}
    <div class="season">
    <div class="seasonBox">
    {i < 9 ? season.replace('season','S0'): season.replace('season','S')}
    </div>
    {#each data[season] as episode}
         <div class="episode tooltip" style={`background-color:${colors[Math.round(episode.rating)]};`}>
         {episode.rating.toFixed(1)}
            <span class="tooltiptext">
                Episode: {episode.episode}<br>
                Title: {episode.title}<br>
                Rating: {episode.rating}<br>
                Votes: {episode.votes}
            </span>
         </div>
    {/each}
    
    </div>
{/each}



<script>



let colors = {
    0:`#FFFFFF`,
    1:`#FF0000`,
    2:`#FF0000`,
    3:`#FF0000`,
    4:`#FF0000`,
    5:`#FF0000`,
    6:`#FFFF00`,
    7:`#FFFF00`,
    8:`#7FFF00`,
    9:`#00FF00`,
    10:`#00FF00`
}

let userData = `Showing Breaking Bad`




let data = {"season1":[{
  "episode": 1,
  "title": "Pilot",
  "rating": 9.0,
  "votes": 22864
},{
  "episode": 2,
  "title": "Cat's in the Bag...",
  "rating": 8.7,
  "votes": 16407
},{
  "episode": 3,
  "title": "...And the Bag's in the River",
  "rating": 8.8,
  "votes": 15886
},{
  "episode": 4,
  "title": "Cancer Man",
  "rating": 8.3,
  "votes": 15431
},{
  "episode": 5,
  "title": "Gray Matter",
  "rating": 8.4,
  "votes": 15125
},{
  "episode": 6,
  "title": "Crazy Handful of Nothin'",
  "rating": 9.3,
  "votes": 17496
},{
  "episode": 7,
  "title": "A No-Rough-Stuff-Type Deal",
  "rating": 8.9,
  "votes": 15385
}],"season2":[{
  "episode": 1,
  "title": "Seven Thirty-Seven",
  "rating": 8.7,
  "votes": 13755
},{
  "episode": 2,
  "title": "Grilled",
  "rating": 9.3,
  "votes": 16051
},{
  "episode": 3,
  "title": "Bit by a Dead Bee",
  "rating": 8.4,
  "votes": 13350
},{
  "episode": 4,
  "title": "Down",
  "rating": 8.3,
  "votes": 13492
},{
  "episode": 5,
  "title": "Breakage",
  "rating": 8.4,
  "votes": 13081
},{
  "episode": 6,
  "title": "Peekaboo",
  "rating": 8.9,
  "votes": 14462
},{
  "episode": 7,
  "title": "Negro Y Azul",
  "rating": 8.7,
  "votes": 13018
},{
  "episode": 8,
  "title": "Better Call Saul",
  "rating": 9.2,
  "votes": 15323
},{
  "episode": 9,
  "title": "4 Days Out",
  "rating": 9.1,
  "votes": 14916
},{
  "episode": 10,
  "title": "Over",
  "rating": 8.6,
  "votes": 12750
},{
  "episode": 11,
  "title": "Mandala",
  "rating": 8.9,
  "votes": 13207
},{
  "episode": 12,
  "title": "Phoenix",
  "rating": 9.3,
  "votes": 14844
},{
  "episode": 13,
  "title": "ABQ",
  "rating": 9.3,
  "votes": 14845
}],"season3":[{
  "episode": 1,
  "title": "No Más",
  "rating": 8.6,
  "votes": 12647
},{
  "episode": 2,
  "title": "Caballo sin Nombre",
  "rating": 8.7,
  "votes": 12225
},{
  "episode": 3,
  "title": "I.F.T.",
  "rating": 8.5,
  "votes": 12279
},{
  "episode": 4,
  "title": "Green Light",
  "rating": 8.3,
  "votes": 12532
},{
  "episode": 5,
  "title": "Más",
  "rating": 8.7,
  "votes": 11888
},{
  "episode": 6,
  "title": "Sunset",
  "rating": 9.3,
  "votes": 14256
},{
  "episode": 7,
  "title": "One Minute",
  "rating": 9.6,
  "votes": 17634
},{
  "episode": 8,
  "title": "I See You",
  "rating": 8.8,
  "votes": 12329
},{
  "episode": 9,
  "title": "Kafkaesque",
  "rating": 8.5,
  "votes": 12229
},{
  "episode": 10,
  "title": "Fly",
  "rating": 7.8,
  "votes": 21484
},{
  "episode": 11,
  "title": "Abiquiu",
  "rating": 8.5,
  "votes": 12107
},{
  "episode": 12,
  "title": "Half Measures",
  "rating": 9.5,
  "votes": 17029
},{
  "episode": 13,
  "title": "Full Measure",
  "rating": 9.7,
  "votes": 19169
}],"season4":[{
  "episode": 1,
  "title": "Box Cutter",
  "rating": 9.2,
  "votes": 15362
},{
  "episode": 2,
  "title": "Thirty-Eight Snub",
  "rating": 8.3,
  "votes": 12716
},{
  "episode": 3,
  "title": "Open House",
  "rating": 8.1,
  "votes": 12832
},{
  "episode": 4,
  "title": "Bullet Points",
  "rating": 8.7,
  "votes": 11958
},{
  "episode": 5,
  "title": "Shotgun",
  "rating": 8.7,
  "votes": 11982
},{
  "episode": 6,
  "title": "Cornered",
  "rating": 8.5,
  "votes": 12136
},{
  "episode": 7,
  "title": "Problem Dog",
  "rating": 8.9,
  "votes": 12635
},{
  "episode": 8,
  "title": "Hermanos",
  "rating": 9.3,
  "votes": 14281
},{
  "episode": 9,
  "title": "Bug",
  "rating": 8.9,
  "votes": 12760
},{
  "episode": 10,
  "title": "Salud",
  "rating": 9.6,
  "votes": 18086
},{
  "episode": 11,
  "title": "Crawl Space",
  "rating": 9.7,
  "votes": 20916
},{
  "episode": 12,
  "title": "End Times",
  "rating": 9.5,
  "votes": 16164
},{
  "episode": 13,
  "title": "Face Off",
  "rating": 9.9,
  "votes": 39035
}],"season5":[{
  "episode": 1,
  "title": "Live Free or Die",
  "rating": 9.3,
  "votes": 18204
},{
  "episode": 2,
  "title": "Madrigal",
  "rating": 8.9,
  "votes": 15220
},{
  "episode": 3,
  "title": "Hazard Pay",
  "rating": 8.9,
  "votes": 14749
},{
  "episode": 4,
  "title": "Fifty-One",
  "rating": 8.9,
  "votes": 14853
},{
  "episode": 5,
  "title": "Dead Freight",
  "rating": 9.7,
  "votes": 22189
},{
  "episode": 6,
  "title": "Buyout",
  "rating": 9.1,
  "votes": 15226
},{
  "episode": 7,
  "title": "Say My Name",
  "rating": 9.6,
  "votes": 19536
},{
  "episode": 8,
  "title": "Gliding Over All",
  "rating": 9.6,
  "votes": 20307
},{
  "episode": 9,
  "title": "Blood Money",
  "rating": 9.5,
  "votes": 19772
},{
  "episode": 10,
  "title": "Buried",
  "rating": 9.2,
  "votes": 17112
},{
  "episode": 11,
  "title": "Confessions",
  "rating": 9.6,
  "votes": 21116
},{
  "episode": 12,
  "title": "Rabid Dog",
  "rating": 9.2,
  "votes": 17855
},{
  "episode": 13,
  "title": "To'hajiilee",
  "rating": 9.8,
  "votes": 30212
},{
  "episode": 14,
  "title": "Ozymandias",
  "rating": 10.0,
  "votes": 114208
},{
  "episode": 15,
  "title": "Granite State",
  "rating": 9.7,
  "votes": 30569
},{
  "episode": 16,
  "title": "Felina",
  "rating": 9.9,
  "votes": 81758
}]}



</script>