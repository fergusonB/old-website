<script>
  let x = 1; // number of successes
  let n = 1; // total number of trials
  let p = 0.5; // probability of success on one trial
  let q = 1 - p;

  const fac = (n) => (n ? n * fac(n - 1) : 1);

  const probabilityMassFunction = (x, n, p) => {
    q = 1 - p;
    return (fac(n) / (fac(x) * fac(n - x))) * p ** x * q ** (n - x);
  };

  let results = probabilityMassFunction(Number(x), Number(n), Number(p));
</script>

<style>
  .box {
    display: flex;
  }
  .box input{
      text-align:center;
  }
</style>

<h2>Binomial</h2>
<div class="box">
  <p>
    Number of successes, x :
    <br />
    Number of trials, n :
    <br />
    Probability of success on a single trial, p :
  </p>

  <p>
    <input bind:value={x} type="number" />
    <br />
    <input bind:value={n} type="number" />
    <br />
    <input bind:value={p} type="number" />
    <br />
  </p>
</div>
<button
  on:click={() => (results = probabilityMassFunction(Number(x), Number(n), Number(p)))}>
  Calculate
</button>
<br>
<h3>Results</h3>
<br>
Less than {x}: 
<br>
Exactly {x} : {(results * 100).toFixed(4)}%
<br>
Greater than {x}: 

