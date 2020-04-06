<script>
//initial page render, show summary data - total cases, new cases ( %) , deaths, new deaths %, recovered, new recovered %
//selection for countries, top countries beginning?


    import { onMount } from 'svelte';


    let summary;

    let state = ''

 



	onMount(async () => {
		const res = await fetch(`https://api.covid19api.com/summary`);
        summary = await res.json();
        
    });
    


    

</script>

<h1>Current COVID19 Data</h1>





{#if summary && state ===''}

<h2>Global</h2>
<p>
     Total Cases: {JSON.stringify(summary.Global.TotalConfirmed)} (Estimated {((JSON.stringify(summary.Global.TotalConfirmed)/7713468000)*100).toFixed(4)}% of global population.)
     <br>
          New Cases: {JSON.stringify(summary.Global.NewConfirmed)} (Change of +{((summary.Global.NewConfirmed/summary.Global.TotalConfirmed)*100).toFixed(2)}%)
     <br>
Total Deaths: {JSON.stringify(summary.Global.TotalDeaths)}
<br>
New Deaths: {JSON.stringify(summary.Global.NewDeaths)} (Change of +{((summary.Global.NewDeaths/summary.Global.TotalDeaths)*100).toFixed(2)}%)
     <br>
Total Recovered: {JSON.stringify(summary.Global.TotalRecovered)}
<br>
New Recoveries: {JSON.stringify(summary.Global.NewRecovered)} (Change of +{((summary.Global.NewRecovered/summary.Global.TotalRecovered)*100).toFixed(2)}%)
</p>




{:else if  state !== ``}
nothing

{:else}
     Getting data from covid19api.com ...
{/if}
