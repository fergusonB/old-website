<script>
  import FoodTrip from "../../components/observer/FoodTrip.svelte";
  import FoodLifeTime from "../../components/observer/FoodLifetime.svelte";

  class Food {
    constructor(quantity, item, expires, price, location, tripid, date) {
      this.Quantity = quantity;
      this.Item = item;
      this.Expires = expires;
      this.Price = price;
      this.Location = location;
      this.TripID = tripid;
      this.Date = date;
    }
  }

  // master list
  let foods = [];
  $: foodFollow = foods;

  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  date = `${date.getFullYear()}-${month}-${day}`;

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
        inputTripID,
        date
      )
    );
    foods = foods;
    localStorage.foods = JSON.stringify(foods);
  };

  const save = () => {
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
  h3 {
    text-align: center;
  }

  .red {
    background-color: #ff7043;
  }

  .yellow {
    background-color: #fff176;
  }

  .colorContainer {
    display: flex;
    justify-content: space-between;
  }
  .picker {
    border: 1px solid black;
    padding: 5px;
  }
  [contenteditable] {
    background-color: rgba(255, 255, 255, 0.5);
text-align:center;
    padding-right: 10px;
  }
  [contenteditable]:hover {
    cursor: pointer;
    background-color: white;

  }
  .text {
  display:inline-block;
  width: 100px;
  height:1.5em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  <div>
    <h3>Lifetime Stats</h3>
    <FoodLifeTime data={foods} />
  </div>

</div>
<h3>Inventory</h3>
<div class="small">
  {#each foods as food, i}
    {#if !food.Hidden}
      <div
        class="card {new Date(food.Expires).getTime() - new Date(food.Date).getTime() < 604800000 ? `red` : new Date(food.Expires).getTime() - new Date(food.Date).getTime() < 2404800000 ? `yellow` : `temp`}"
        style="filter: drop-shadow(5px 0px {food.Color});">
        Item:
        <span class="text"
          contenteditable="true"
          on:blur={save}
          bind:textContent={food.Item}>
          {food.Item}
        </span>
        <br />
        Quantity:
        <span class="text"
          contenteditable="true"
          on:blur={() => {
            food.Quantity = Number(food.Quantity);
            save();
          }}
          bind:textContent={food.Quantity}>
          {food.Quantity}
        </span>
        <br />
        Expiration: {food.Expires}
        <br />
        <button
          on:click={() => {
            let hide = prompt(`Are you sure you would like to ARCHIVE? Data will still be represented in the stats but it will no longer be visible. (y = yes / n = no)`);
            if (hide === 'y' || hide === 'Y') {
              food.Hidden = 1;
              localStorage.foods = JSON.stringify(foods);
            }
          }}>
          Archive
        </button>
        <button
          on:click={() => {
            let del = prompt(`Are you sure you would like to DELETE? This will remove all data for ${food.Item}(y = yes / n = no)`);
            if (del === 'y' || del === 'Y') {
              foods.splice(i, 1);
              save();
            }
          }}>
          Delete
        </button>
        <br />
        <br />
        <div class="colorContainer">
          <div
            class="picker"
            style="background-color:white;"
            on:click={() => {
              food.Color = 'white';
              save();
            }} />
          <div
            class="picker"
            style="background-color:#1565C0;"
            on:click={() => {
              food.Color = '#1565C0';
              save();
            }} />
          <div
            class="picker"
            style="background-color:#EF6C00;"
            on:click={() => {
              food.Color = '#EF6C00';
              save();
            }} />
          <div
            class="picker"
            style="background-color:black;"
            on:click={() => {
              food.Color = 'black';
              save();
            }} />
        </div>

        <div class="bar" />
      </div>
    {/if}
  {/each}
</div>

<div>
  <h3>Trip Stats</h3>
  <FoodTrip currentTrip={inputTripID} data={foods} />

</div>

<button
  on:click={() => {
    let erase = prompt('This will erase all data for this page PERMANENTLY. Please type "DELETE" if you wish to continue.');
    if (erase === 'DELETE') {
      localStorage.foods = [];
      location.reload();
    }
  }}>
  Delete all Food
</button>
