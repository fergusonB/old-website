<script>
export let data;
export let currentTrip;
let selectedTrip;

$: trips = [...new Set(data.map(x=>x.TripID).filter(x=>x!==currentTrip))];
$: tripTotal = process.browser ? data.map(x=> x.TripID === selectedTrip ? x.Price : 0).reduce((a,b)=>a+b,0).toFixed(2) : 'Waiting...'
$: tripAverage = process.browser ? Number(tripTotal) / (data.filter(x=>x.TripID===selectedTrip,0).length) : 'Waiting...'
$: tripDate = process.browser  ? data.map(x=> x.TripID === selectedTrip ? x.Date : 0).filter(x=>x!==0)[0]: 'Waiting...'
$: tripLocation = process.browser  ? data.map(x=> x.TripID === selectedTrip ? x.Location : 0).filter(x=>x!==0)[0]: 'Waiting...'






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
Date: {tripDate || `Waiting...`}
<br>
Location: {tripLocation || `Waiting...`}
<br>
Trip Total: ${tripTotal}
<br>
Item Average: ${tripAverage && process.browser ? tripAverage.toFixed(2) : '0.00'}
</p>