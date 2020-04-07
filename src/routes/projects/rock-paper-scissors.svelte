<script>
	let wins = 0
	let losses = 0
	let ties = 0
	let roll
	let selection
	let result
	
	let whowins = {
		1: '🗿',
		2: '🧻',
		3: '✂️'
	}
	
	const rando = () =>{
		roll = Math.floor(Math.random() * 3)+1
	}
	
const rock = () =>{
	rando()
	selection = 1
	if (selection === roll){
		ties+=1
		result = `Tie`
	}
	else if(selection === roll - 1){
		losses+=1
		result = `You lost.`
	}
	else{
		wins+=1
		result = `You won.`
	}

}
const paper = () =>{
	rando()
	selection = 2
	if (selection === roll){
		ties+=1
		result = `Tie`
	}
	else if(selection === roll - 1){
		losses+=1
		result = `You lost.`
	}
	else{
		wins+=1
		result = `You won.`
	}
}
const scissors = () =>{
	rando()
	selection = 3
	if (selection === roll){
		ties+=1
		result = `Tie`
	}
	else if(roll === 2){
		wins+=1
		result = `You won.`
	}
	else{
		losses+=1
		result = `You lost.`
	}
	
}


 
	   
	
</script>

<style>
.icongrid {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.icons{
    font-size: 2em;
}
.icons:hover{
    cursor:pointer;
}
.text{
	text-align: center;
	font-size:2em;
}
</style>
<svelte:head>
  <title>Rock Paper Scissors</title>
</svelte:head>

<h1>Rock, Paper, Scissors</h1>

<div class="icongrid">
<div  class="icons card" on:click|preventDefault={rock}>🗿</div> 
<div  class="icons card" on:click|preventDefault={paper}>🧻</div> 
<div  class="icons card" on:click|preventDefault={scissors}>✂️</div> 
</div>
<div class="text">
<br>
{whowins[selection] ? `You selected ${whowins[selection]}` : ``}

<br>
{roll !== undefined ? `The computer selected ${whowins[roll]}` : `Please make a selection`}
<br>
{result ? result : ``}
<br>
Wins: {wins}
<br>
Losses: {losses}
<br>
Ties:{ties}
<br>
</div>

