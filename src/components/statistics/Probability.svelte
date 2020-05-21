<script>
  let favorable = 1;
  let total = 4;
  let attempts = 1;
</script>

<style>
  #main {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
  #main input {
    text-align: center;
  }
</style>

<h2>Probability</h2>
<div id="main">
  <p>
    Favorable outcomes:
    <br />
    Total outcomes:
    <br />
    Trials:
    <br />
    Probability of success on every trial: {((favorable / total) ** attempts * 100).toFixed(4)}%
  </p>
  <p>
    <input bind:value={favorable} type="number" />
    <br />
    <input bind:value={total} type="number" />
    <br />
    <input bind:value={attempts} type="number" />
    <br />

  </p>
</div>
