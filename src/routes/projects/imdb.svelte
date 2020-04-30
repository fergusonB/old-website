<svelte:head>
  <title>Projects</title>
</svelte:head>

<style>
.season{
    display:flex;
    
}
.episode{
    padding: 10px;
    border:1px solid white;
    
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
    margin-left:-125px;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>

<h1>IMDB Show Ratings</h1>

<p>This takes output from my project <a href="https://github.com/fergusonB/Puppeteer-IMDB-Scraper"> here</a>. It requires node, npm, and Puppeteer</p>

<p>
Please paste the contents from 'out.json' here and press go to generate a new chart.
<br>
Click <a href='Copy Breaking Bad Data' on:click|preventDefault={()=>copyToClipboard()} on:click={()=>alert('Copied!')}>here</a> to copy example data for Breaking Bad data to your clipboard.
<br>
<input type="text" bind:value={userData}> <button on:click={()=>data = JSON.parse(userData)}>Go</button>

</p>



{#each Object.keys(data) as season}
    <div class="season">
    {season.replace('s','S')}
    
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

let userData = `Game of Thrones example`


const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = breakingbad;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};


let data = {"season1":[{
  "episode": 1,
  "title": "Winter Is Coming",
  "rating": 9.1,
  "votes": 38634
},{
  "episode": 2,
  "title": "The Kingsroad",
  "rating": 8.8,
  "votes": 29281
},{
  "episode": 3,
  "title": "Lord Snow",
  "rating": 8.7,
  "votes": 27692
},{
  "episode": 4,
  "title": "Cripples, Bastards, and Broken Things",
  "rating": 8.8,
  "votes": 26283
},{
  "episode": 5,
  "title": "The Wolf and the Lion",
  "rating": 9.1,
  "votes": 27348
},{
  "episode": 6,
  "title": "A Golden Crown",
  "rating": 9.2,
  "votes": 27077
},{
  "episode": 7,
  "title": "You Win or You Die",
  "rating": 9.2,
  "votes": 27553
},{
  "episode": 8,
  "title": "The Pointy End",
  "rating": 9.0,
  "votes": 25642
},{
  "episode": 9,
  "title": "Baelor",
  "rating": 9.6,
  "votes": 36215
},{
  "episode": 10,
  "title": "Fire and Blood",
  "rating": 9.5,
  "votes": 31788
}],"season2":[{
  "episode": 1,
  "title": "The North Remembers",
  "rating": 8.8,
  "votes": 24833
},{
  "episode": 2,
  "title": "The Night Lands",
  "rating": 8.5,
  "votes": 23456
},{
  "episode": 3,
  "title": "What Is Dead May Never Die",
  "rating": 8.8,
  "votes": 23175
},{
  "episode": 4,
  "title": "Garden of Bones",
  "rating": 8.8,
  "votes": 22412
},{
  "episode": 5,
  "title": "The Ghost of Harrenhal",
  "rating": 8.8,
  "votes": 22601
},{
  "episode": 6,
  "title": "The Old Gods and the New",
  "rating": 9.1,
  "votes": 23610
},{
  "episode": 7,
  "title": "A Man Without Honor",
  "rating": 8.9,
  "votes": 23002
},{
  "episode": 8,
  "title": "The Prince of Winterfell",
  "rating": 8.8,
  "votes": 22726
},{
  "episode": 9,
  "title": "Blackwater",
  "rating": 9.7,
  "votes": 39639
},{
  "episode": 10,
  "title": "Valar Morghulis",
  "rating": 9.4,
  "votes": 28085
}],"season3":[{
  "episode": 1,
  "title": "Valar Dohaeris",
  "rating": 8.8,
  "votes": 24806
},{
  "episode": 2,
  "title": "Dark Wings, Dark Words",
  "rating": 8.6,
  "votes": 22466
},{
  "episode": 3,
  "title": "Walk of Punishment",
  "rating": 8.9,
  "votes": 22674
},{
  "episode": 4,
  "title": "And Now His Watch Is Ended",
  "rating": 9.6,
  "votes": 30924
},{
  "episode": 5,
  "title": "Kissed by Fire",
  "rating": 9.0,
  "votes": 23106
},{
  "episode": 6,
  "title": "The Climb",
  "rating": 8.8,
  "votes": 22974
},{
  "episode": 7,
  "title": "The Bear and the Maiden Fair",
  "rating": 8.7,
  "votes": 22220
},{
  "episode": 8,
  "title": "Second Sons",
  "rating": 9.0,
  "votes": 22798
},{
  "episode": 9,
  "title": "The Rains of Castamere",
  "rating": 9.9,
  "votes": 86749
},{
  "episode": 10,
  "title": "Mhysa",
  "rating": 9.2,
  "votes": 25803
}],"season4":[{
  "episode": 1,
  "title": "Two Swords",
  "rating": 9.1,
  "votes": 29299
},{
  "episode": 2,
  "title": "The Lion and the Rose",
  "rating": 9.7,
  "votes": 45858
},{
  "episode": 3,
  "title": "Breaker of Chains",
  "rating": 8.9,
  "votes": 24707
},{
  "episode": 4,
  "title": "Oathkeeper",
  "rating": 8.8,
  "votes": 23733
},{
  "episode": 5,
  "title": "First of His Name",
  "rating": 8.7,
  "votes": 22963
},{
  "episode": 6,
  "title": "The Laws of Gods and Men",
  "rating": 9.7,
  "votes": 42265
},{
  "episode": 7,
  "title": "Mockingbird",
  "rating": 9.1,
  "votes": 25579
},{
  "episode": 8,
  "title": "The Mountain and the Viper",
  "rating": 9.7,
  "votes": 45933
},{
  "episode": 9,
  "title": "The Watchers on the Wall",
  "rating": 9.6,
  "votes": 38663
},{
  "episode": 10,
  "title": "The Children",
  "rating": 9.7,
  "votes": 37973
}],"season5":[{
  "episode": 1,
  "title": "The Wars to Come",
  "rating": 8.5,
  "votes": 26060
},{
  "episode": 2,
  "title": "The House of Black and White",
  "rating": 8.5,
  "votes": 22994
},{
  "episode": 3,
  "title": "High Sparrow",
  "rating": 8.5,
  "votes": 22274
},{
  "episode": 4,
  "title": "Sons of the Harpy",
  "rating": 8.7,
  "votes": 22875
},{
  "episode": 5,
  "title": "Kill the Boy",
  "rating": 8.6,
  "votes": 23163
},{
  "episode": 6,
  "title": "Unbowed, Unbent, Unbroken",
  "rating": 8.0,
  "votes": 26234
},{
  "episode": 7,
  "title": "The Gift",
  "rating": 9.0,
  "votes": 25302
},{
  "episode": 8,
  "title": "Hardhome",
  "rating": 9.9,
  "votes": 87056
},{
  "episode": 9,
  "title": "The Dance of Dragons",
  "rating": 9.5,
  "votes": 38097
},{
  "episode": 10,
  "title": "Mother's Mercy",
  "rating": 9.1,
  "votes": 36937
}],"season6":[{
  "episode": 1,
  "title": "The Red Woman",
  "rating": 8.5,
  "votes": 35870
},{
  "episode": 2,
  "title": "Home",
  "rating": 9.4,
  "votes": 42204
},{
  "episode": 3,
  "title": "Oathbreaker",
  "rating": 8.7,
  "votes": 30061
},{
  "episode": 4,
  "title": "Book of the Stranger",
  "rating": 9.1,
  "votes": 32356
},{
  "episode": 5,
  "title": "The Door",
  "rating": 9.7,
  "votes": 63521
},{
  "episode": 6,
  "title": "Blood of My Blood",
  "rating": 8.4,
  "votes": 29881
},{
  "episode": 7,
  "title": "The Broken Man",
  "rating": 8.6,
  "votes": 29018
},{
  "episode": 8,
  "title": "No One",
  "rating": 8.4,
  "votes": 33037
},{
  "episode": 9,
  "title": "Battle of the Bastards",
  "rating": 9.9,
  "votes": 185023
},{
  "episode": 10,
  "title": "The Winds of Winter",
  "rating": 9.9,
  "votes": 128637
}],"season7":[{
  "episode": 1,
  "title": "Dragonstone",
  "rating": 8.6,
  "votes": 46295
},{
  "episode": 2,
  "title": "Stormborn",
  "rating": 8.9,
  "votes": 39901
},{
  "episode": 3,
  "title": "The Queen's Justice",
  "rating": 9.2,
  "votes": 41608
},{
  "episode": 4,
  "title": "The Spoils of War",
  "rating": 9.8,
  "votes": 78987
},{
  "episode": 5,
  "title": "Eastwatch",
  "rating": 8.8,
  "votes": 39680
},{
  "episode": 6,
  "title": "Beyond the Wall",
  "rating": 9.0,
  "votes": 57956
},{
  "episode": 7,
  "title": "The Dragon and the Wolf",
  "rating": 9.4,
  "votes": 57481
}],"season8":[{
  "episode": 1,
  "title": "Winterfell",
  "rating": 7.6,
  "votes": 121825
},{
  "episode": 2,
  "title": "A Knight of the Seven Kingdoms",
  "rating": 7.9,
  "votes": 119953
},{
  "episode": 3,
  "title": "The Long Night",
  "rating": 7.5,
  "votes": 200271
},{
  "episode": 4,
  "title": "The Last of the Starks",
  "rating": 5.5,
  "votes": 152756
},{
  "episode": 5,
  "title": "The Bells",
  "rating": 6.0,
  "votes": 177949
},{
  "episode": 6,
  "title": "The Iron Throne",
  "rating": 4.1,
  "votes": 220561
}]}

let breakingbad = `{"season1":[{
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
}]}`

</script>