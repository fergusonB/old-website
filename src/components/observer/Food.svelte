<script>



class Food {
  constructor(quantity, item, expires, price) {
    this.Quantity = quantity;
    this.Item = item;
    this.Expires = expires;
    this.Price = price
  }
}


// master list
let foods = [];

if (process.browser && localStorage.foods){
    foods = JSON.parse(localStorage.foods)
}

// example
let inputQty = 1
let inputItem = 'Item'
let inputDate = '2100-01-01'
let inputPrice = 0.00

// add food
const foodFunction = () =>{
    foods.push(new Food(inputQty,inputItem,inputDate,inputPrice))
    foods = foods
    localStorage.foods = JSON.stringify(foods)
}


</script>

<style>
.titlediv{
    display:grid;
    grid-template-columns: 1fr 1fr;
    
}
.small{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>

<h2 style="text-align:center;">Food</h2>

<div class="titlediv">
<div>
<h3>New</h3>
Quantity: <input type="number" bind:value={inputQty}>
<br>
Item: <input type="text" on:click={()=>inputItem=''} bind:value={inputItem}>
<br>
Expiration: <input type="date" bind:value={inputDate}>
<br>
Price: <input type="number" bind:value={inputPrice}>
<br>
<button on:click={foodFunction} >Add</button>
</div>

<div>
<h3>Trip Stats</h3>
</div>
</div>

<div class="small">
{#each foods as food,i}
     <div class="card" >
    {#each Object.keys(food) as key}
        {key}: {food[key]}
        <br>
     {/each}
     <button on:click={()=>{
         foods.splice(i,1)
         foods = foods
         localStorage.foods = JSON.stringify(foods)
    }}>Delete</button>

</div>

{/each}
</div>
