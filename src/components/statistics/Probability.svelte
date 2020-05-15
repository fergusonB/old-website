<h2>Probability</h2>

<script>

let favorable = 1
let total = 4
let attempts = 1

</script>

<p>

Favorable outcomes: <input bind:value={favorable} type="number">
<br>
Total outcomes: <input bind:value={total} type="number">
<br>
Trials: <input bind:value={attempts} type="number">


<br>

Probability of success on every trial: {(((favorable / total)**attempts)*100).toFixed(4)}%

</p>