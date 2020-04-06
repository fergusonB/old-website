<script>
//initial page render, show summary data - total cases, new cases ( %) , deaths, new deaths %, recovered, new recovered %
//selection for countries, top countries beginning?


    import { onMount } from 'svelte';


    let summary;
    let state = ''
    let countrydata
 



	onMount(async () => {
		const res = await fetch(`https://api.covid19api.com/summary`);
        summary = await res.json();

        
    });
    
    const currentCountry = async (state) =>{
		const res = await fetch(`https://api.covid19api.com/${state}/status/confirmed`);
        countrydata = await res.json();
    }

    

</script>

<h1>Current COVID19 Data</h1>



<p>Select a Country</p>
<button on:click={()=>{state=`Algeria`}}>state test</button>
{#if summary && state ===''}

<h2>Global</h2>
<p>
     Total Cases: {JSON.stringify(summary.Global.TotalConfirmed)}
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


{:else}
     Getting data from covid19api.com ...
{/if}
