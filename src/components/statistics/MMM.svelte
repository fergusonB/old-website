<script>

// formatting
let arr = ''
$: fArr = arr.split(',').map(x=>Number(x)).sort((a,b)=>a-b)
$: length = fArr.length


// mean, median, mode
$: mean = fArr.reduce((a,b)=>a+b)/length

$: median = length % 2 === 0 ? (fArr[(length/2)-1] + fArr[(length/2)]) / 2: fArr[(length -1) /2]

$: mode = modeF(fArr)

//mode function
const modeF = arr =>{
    let numMapping = {};
    let greatestFreq = 0;
    let mode;
    arr.forEach((number)=>{
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    });
    return +mode;
}


</script>
<h2>Mean, Median, Mode</h2>
<p>

<h3>Paste data (comma separated numbers)</h3>

<input type="text" bind:value={arr}>
<br>


Assessing: [{fArr}]
<br>
<br>

<h3>Mean: {mean}</h3>


<h3>Median: {median}</h3>


<h3>Mode: {mode} </h3>