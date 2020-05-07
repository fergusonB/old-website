<script>
export let data;
export let currentTrip;

$: trips = [...new Set(data.map(x=>x.TripID))];

let selectedTrip

</script>

<h3>Trip Stats</h3>
Current:
<br>
{currentTrip}
<br>
Selected:
<br>
{selectedTrip}
<select bind:value={selectedTrip}>
    <option value={currentTrip}>{currentTrip}</option>
{#each trips as trip}
     <option value={trip}>{trip}</option>
{/each}
</select>
<br>
