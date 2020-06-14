<script>
import Emeralds from "../../components/dungeons/Emeralds.svelte";

let data = []

if (process.browser && localStorage.dungeons){
    data = localStorage.dungeons
}

$: if (process.browser){
    localStorage.dungeons=data
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
<input type="text" bind:value={data}>

</p>


<Emeralds/>

