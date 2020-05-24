<script>
  let x = 5; // number of successes
  let n = 7; // total number of trials
  let p = 0.65; // probability of success on one trial
  let q = 1 - p;

  const fac = (n) => (n ? n * fac(n - 1) : 1);

  const probabilityMassFunction = (x, n, p) => {
    q = 1 - p;
    return (fac(n) / (fac(x) * fac(n - x))) * p ** x * q ** (n - x);
  };

  let massArr = [];

  const massEa = (x, n, p) => {
    massArr = [];
    x = Number(x);
    n = Number(n);
    p = Number(p);
    for (let i = 0; i <= x - 1; i++) {
      massArr = [...massArr, probabilityMassFunction(i, n, p)];
    }
  };

  $: massEa(x, n, p);

  $: results = probabilityMassFunction(Number(x), Number(n), Number(p));
</script>

<style>
  .box {
    display: flex;
  }
  .box input {
    text-align: center;
  }
</style>

<h2>Binomial Distribution</h2>
<div class="box">
  <p>
    Number of successes, x :
    <br />
    Number of trials, n (limit 9999) :
    <br />
    Probability of success on a single trial, p :
  </p>

  <p>
    <input min=1 max={n} bind:value={x} type="number" />
    <br />
    <input min={1} max={9999} bind:value={n} type="number" />
    <br />
    <input min=0 max=1 bind:value={p} type="number" /> {p*100}%
    <br />
  </p>
</div>

<br />
<h3>Results</h3>
<br />
Less than {x}: {massArr.length > 0 ? (massArr.reduce((a, b) => a + b) * 100).toFixed(4) : `Invalid Input`}%
<br />
Exactly {x} : {(results * 100).toFixed(4)}%
<br />
Greater than {x}: {massArr.length > 0 ? ((1 - (massArr.reduce((a, b) => a + b) + results)) * 100).toFixed(4) : `Invalid Input`}%
