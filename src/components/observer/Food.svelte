<script>
import FoodTrip from "../../components/observer/FoodTrip.svelte";

  class Food {
    constructor(quantity, item, expires, price, location, tripid) {
      this.Quantity = quantity;
      this.Item = item;
      this.Expires = expires;
      this.Price = price;
      this.Location = location;
      this.TripID = tripid;
    }
  }

  // master list
  let foods = [];
  $: foodFollow = foods;

  let date = new Date
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (day < 10){
      day = '0' + day
  }
  if (month <10){
      month = '0' + month
  }
  date = `${date.getFullYear()}-${month}-${day}`

  if (process.browser && localStorage.foods) {
    foods = JSON.parse(localStorage.foods);
  }

  // example
  let inputQty = 1;
  let inputItem = "Item";
  let inputDate = date;
  let inputPrice = 0.0;
  let inputLocation = "Costco";
  let inputTripID =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  // add food
  const foodFunction = () => {
    foods.push(
      new Food(
        inputQty,
        inputItem,
        inputDate,
        inputPrice,
        inputLocation,
        inputTripID
      )
    );
    foods = foods;
    localStorage.foods = JSON.stringify(foods);
  };
</script>

<style>
  .titlediv {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .small {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  h3{
      text-align: center;
  }
</style>

<h2 style="text-align:center;">Food</h2>

<div class="titlediv">
  <div>
    <h3>New</h3>
    Quantity:
    <input type="number" bind:value={inputQty} />
    <br />
    Item:
    <input
      type="text"
      on:click={() => (inputItem = '')}
      bind:value={inputItem} />
    <br />
    Expiration:
    <input type="date" bind:value={inputDate} />
    <br />
    Price:
    <input type="number" bind:value={inputPrice} />
    <br />
    Location:
    <input type="text" bind:value={inputLocation} />
    <br />
    <button on:click={foodFunction}>Add</button>
  </div>


</div>
<h3>Inventory</h3>
<div class="small">
  {#each foods as food, i}
    <div class="card">
      Quantity: {food.Quantity}
      <br />
      Item: {food.Item}
      <br />
      Expiration: {food.Expires}
      <br />
      <button
        on:click={() => {
          foods.splice(i, 1);
          foods = foods;
          localStorage.foods = JSON.stringify(foods);
        }}>
        Delete
      </button>
      

    </div>
  {/each}
</div>

  <div>
  <h3>Trip Stats</h3>
    <FoodTrip currentTrip = {inputTripID} data = {foods}/>

  </div>
