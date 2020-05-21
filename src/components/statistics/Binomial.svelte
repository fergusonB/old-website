<h2>Binomial</h2>

<script>



let x = 1 //number of successes
let n = 10 // number of trials

let p = .5 // probability of success

$: q =1-p // probability of failure

const fact = (n)=> n ? n*fact(n-1):1


let answer
$: if (x&&n&&p&&q){
    answer = probabilityMass(x,n,p,q)
}

const probabilityMass = (x,n,p,q) =>{
    return (fact(n) /    fact(x) * fact(( n-x))) * (p**x)  * (q**((n-x)))
}

</script>

<input bind:value={x} type="number"> x, number of successes
<br>
<input bind:value={n} type="number"> n, number of trials
<br>
<input bind:value={p} type="number"> p, probability of success (decimal)
<br>

{answer}