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
    for (let i = 0; i <= n; i++) {
      massArr = [...massArr, probabilityMassFunction(i, n, p)];
    }
  };

let less =  `waiting`
const lessThan = (massArr)=>{
  try{
    less = (massArr.slice(0,x).reduce((a,b)=>a+b)*100).toFixed(4)
  }
  catch{
    less = 'invalid input'
  }
  
}


let greater = `waiting`
const greaterThan = (massArr)=>{
  try{
    greater = (massArr.slice(x+1,n+1).reduce((a,b)=>a+b)*100).toFixed(4)

  }
  catch{
    greater = 'invalid input'
  }
  

}
  let exactly = `waiting`
  let xValue = x

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
    Number of trials, n :
    <br />
    Probability of success on a single trial, p :
  </p>

  <p>
    <input min=1 max={n-1} bind:value={x} type="number" />
    <br />
    <input min={1} max={9999} bind:value={n} type="number" />
    <br />
    <input min=0 max=1 bind:value={p} type="number" /> {p*100}%
    <br />
  </p>
</div>

<button on:click={()=>{
  massEa(x,n,p)
  lessThan(massArr)
  greaterThan(massArr)
  exactly = (massArr[x]*100).toFixed(4)
  xValue = x
  }}>Calculate</button>

<br />
<h3>Results</h3>
<br />
Less than {xValue}: {less}%
<br />
Exactly {xValue} : {exactly}
<br />
Greater than {xValue}: {greater}%
