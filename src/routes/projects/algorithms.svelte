<svelte:head>
  <title>Algorithms Library</title>
</svelte:head>

<h1>Common Algorithms</h1>

<script>
import Strings from "../../components/algorithms/Strings.svelte";


let show = {
    strings: false
}

</script>

<h2>Strings <button on:click={()=>show.strings = !show.strings}>show / hide</button></h2>
{#if show.strings}
    <Strings />
{/if}
