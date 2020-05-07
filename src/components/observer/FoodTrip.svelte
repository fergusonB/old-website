<script>
export let data;
export let currentTrip;

$: trips = [...new Set(data.map(x=>x.TripID).filter(x=>x!==currentTrip))];
$: tripTotal = process.browser ? data.map(x=> x.TripID === selectedTrip ? x.Price : 0).reduce((a,b)=>a+b).toFixed(2) : 'Waiting...'
$: tripAverage = process.browser ? Number(tripTotal) / (data.filter(x=>x.TripID===selectedTrip).length) : 'Waiting...'

let selectedTrip

</script>


<p>
Current Trip: {currentTrip} 
<br>
 Current trip will reset on refresh or new visit.
<br>
<br>
Selected (showing data for selected):
<br>
<select bind:value={selectedTrip}>
    <option value={currentTrip}>{currentTrip}</option>
{#each trips as trip}
     <option value={trip}>{trip}</option>
{/each}
</select>

</p>

<p>
Trip Total: ${tripTotal}
<br>
Item Average: ${tripAverage && process.browser ? tripAverage.toFixed(2) : '0.00'}
</p>