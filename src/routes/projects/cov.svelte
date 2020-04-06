<script>
    import { onMount } from 'svelte';


    let summary;
 



	onMount(async () => {
		const res = await fetch(`https://api.covid19api.com/summary`);
        summary = await res.json();

        
    });
    

    

</script>


{#if summary}
     {#each summary.Countries as country}
     {JSON.stringify(country.Country)}
     <br>
{/each}
{:else}
     loading
{/if}
