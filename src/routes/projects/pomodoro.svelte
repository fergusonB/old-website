<svelte:head>
  <title>Pomodoro Timer</title>
</svelte:head>
<script lang="typescript">

    let state:string = 'work';





</script>
<style>

.pomo{
    display:flex;
}


</style>

<div class="pomo">

<button on:click={()=>state='work'}>Work</button> 
<button on:click={()=>state='break'}>Break</button>
<button on:click={()=>state='long break'}>Long Break</button>

{#if state === 'work'}
     <!-- content here -->
{:else if  state === 'break'}
     <!-- else if content here -->
{:else}
     <!-- else content here -->
{/if}
<h2>Work</h2>



<h2>Short Break</h2>


<h2>Long Break</h2>

</div>