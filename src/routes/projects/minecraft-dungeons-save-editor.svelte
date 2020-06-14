<script>


import Emeralds from "../../components/dungeons/Emeralds.svelte";


let data = []
let valid = false
let display = `Waiting for valid save`



if (process.browser && localStorage.dungeons){
    data = localStorage.dungeons
}

$: if (process.browser){
    localStorage.dungeons=data  

    try {
        display = JSON.parse(localStorage.dungeons.split('\n')[0])
        valid = true
    }
    catch{
        valid = false
    }
}




</script>

<svelte:head>
  <title>MineCraft Dungeons Save Editor</title>
</svelte:head>

<h1>MineCraft Dungeons Save Editor</h1>

<p>
This editor was designed for the Switch version of the game.
<br>
It's likely that it will also work on console versions of the game. It will not work for the PC version.
</p>

<p>
To begin, paste the <strong>contents</strong> of a character file below (e.g. Character174B9BB908D803BDD4E3EE64BB9A4F84)
<br>


<textarea style="width:50%;height:5em;" bind:value={data}/>
<br>
The edits will update this text area. You can simply paste it back into the save file once you have made your changes.
<br>

<strong>Make sure you have a backup before making changes.</strong>
</p>


<Emeralds {valid} {display} bind:data  />


