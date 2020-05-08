<script>
export let data;


$: total = process.browser ? data.map(x=>x.Price).reduce((a,b)=>a+b,0).toFixed(2) : 'Waiting...'
</script>

<p>
Total Spent: ${total}
</p>