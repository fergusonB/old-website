<script>
  import { fly } from 'svelte/transition';

  export let display = [];
  export let valid;
  export let data;



  const save = (i, ip, ei, el, j) => {
    if (process.browser && valid) {
      let temp = localStorage.dungeons;
      temp = temp.split("\n");
      temp[0] = JSON.parse(temp[0]);

      temp[0].items[i].power = ip;

      try {
        temp[0].items[i].enchantments[j].id = ei;
        temp[0].items[i].enchantments[j].level = el;
        console.log("enchants updated");
      } catch {
        console.log("power updated");
      }

      temp[0] = JSON.stringify(temp[0]);
      temp = temp.join("\n");
      localStorage.dungeons = temp;
      data = localStorage.dungeons;
    } else {
      alert("Error, clearing data and refreshing the page.");
      localStorage.dungeons = "";
      location.reload();
    }
  };

  let enchantList = [
    "Accelerating",
    "AnimaConduitMelee",
    "AnimaConduitRanged",
    "BonusShot",
    "Burning",
    "Celerity",
    "ChainReaction",
    "Chains",
    "Chilling",
    "Committed",
    "Cowardice",
    "CriticalHit",
    "Deflecting",
    "Echo",
    "Electrified",
    "Exploding",
    "Explorer",
    "FinalShout",
    "FireAspect",
    "FireTrail",
    "FoodReserves",
    "Freezing",
    "Frenzied",
    "FuseShot",
    "Gravity",
    "GravityMelee",
    "GravityPulse",
    "Growing",
    "HealthSynergy",
    "Infinity",
    "Leeching",
    "Looting",
    "MultiShot",
    "Piercing",
    "PoisonedMelee",
    "PoisonedRanged",
    "PotionFortification",
    "Power",
    "Prospector",
    "Protection",
    "Punch",
    "RadianceMelee",
    "RadianceRanged",
    "Rampaging",
    "RapidFire",
    "Recycler",
    "Ricochet",
    "Sharpness",
    "Shockwave",
    "Smiting",
    "Snowing",
    "SoulSiphon",
    "SpeedSynergy",
    "SpiritSpeed",
    "Stunning",
    "Supercharge",
    "SurpriseGift",
    "Swiftfooted",
    "Swirling",
    "TempoTheft",
    "Thorns",
    "Thundering",
    "Unchanting",
    "Unset",
    "Weakening",
    "WildRage",
  ];
</script>

<style>
  .container {
    display: grid;

    
  }
  .card {
    width: 90%;
  }
</style>



<h2>Items</h2>
<p>
  {#if process.browser && typeof display === 'object' && display.items.length > 0}
    <div  class="container">
      {#each display.items as item, i}
        <div in:fly="{{ y: -500, duration: 1000 }}" 
        
          class="card"
          style={`background-color:${item.rarity === 'Unique' ? '#ff7500' : item.rarity === 'Rare' ? '#10a66c' : 'white'}`}>
          <h3>{item.equipmentSlot || `Item Slot ${i - 5}`}</h3>
          <br />
          <strong>{item.type}</strong>
          <br />
          {item.rarity}
          <br />
          Power: {Math.round(9.98633 * item.power - 9.39419)} | {item.power}
          <br />
          <input
            on:change={() => save(i, item.power)}
            bind:value={item.power}
            min={1.445555555555555}
            max={11.755555555555555}
            step={0.000000000000001}
            type="range" />
          <br />

          <br />
          {#if item.enchantments}
            <br />
            {#each item.enchantments as en, j}
              {#if en.level > 0}
                <!-- svelte-ignore a11y-no-onchange -->
                <select
                  on:change={() => setTimeout(() => {
                      save(i, item.power, en.id, en.level, j);
                    }, 100)}
                  bind:value={en.id}>
                  {#each enchantList as enl}
                    <option value={enl}>{enl}</option>
                  {/each}
                </select>
                <input
                  on:change={() => save(i, item.power, en.id, en.level, j)}
                  bind:value={en.level}
                  type="number"
                  min={0}
                  max={3} />
                <br />
              {/if}
            {/each}
          {/if}

        </div>
      {/each}
    </div>
  {/if}
</p>
