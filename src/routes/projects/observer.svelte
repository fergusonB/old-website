<script>
import Task from "../../components/observer/Task.svelte";
import Food from "../../components/observer/Food.svelte";

const state = {
  task: true,
  food: false
}

$: taskColor = state.task ? 'color:lightgreen;' : 'color:white;'
$: foodColor = state.food ? 'color:lightgreen;' : 'color:white;'

</script>

<svelte:head>
  <title>The Observer</title>
</svelte:head>

<style>

</style>

<h1>The Observer</h1>


<p>
    The Observer uses local storage, it does not record any of your data. The data is remembered only on this device; however, you may download and load the JSON to new devices.
</p>

<button style={taskColor} on:click={()=>state.task = !state.task}>Tasks</button> <button style = {foodColor} on:click={()=>state.food=!state.food}>Food Tracker</button>

{#if state.task}
  <div ><Task/></div>
{/if}
{#if state.food}
<div><Food/></div>
{/if}






