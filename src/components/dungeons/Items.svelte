<script>

export let display = []
export let valid
export let data
let powerSet = []

const save = (i, ip) => {
    if (process.browser && valid){
        let temp = localStorage.dungeons
        temp = temp.split('\n')
        temp[0] = JSON.parse(temp[0])


        temp[0].items[i].power = ip

        
        temp[0] = JSON.stringify(temp[0])
        temp = temp.join('\n')
        localStorage.dungeons = temp
        data = localStorage.dungeons
        alert('Saved!')
    }
    else{
        alert('Error, please refresh the page.')
    }
}

let enchantList = [
  'Thundering',
  'Echo',
  'Prospector',
  'Swirling',
  'Freezing',
  'RadianceMelee',
  'FireTrail',
  'HealthSynergy',
  'Snowing',
  'Celerity',
  'GravityPulse',
  'FinalShout',
  'Accelerating',
  'RadianceRanged',
  'WildRage',
  'Punch',
  'ChainReaction',
  'Gravity',
  'Unset',
  'Rampaging',
  'FireAspect',
  'Weakening',
  'Smiting',
  'SpeedSynergy',
  'Chilling',
  'Unchanting',
  'PoisonedRanged',
  'FuseShot',
  'Recycler',
  'Thorns',
  'Swiftfooted',
  'Protection',
  'Frenzied',
  'SpiritSpeed',
  'PotionFortification',
  'Supercharge',
  'RapidFire',
  'TempoTheft',
  'Cowardice',
  'Chains',
  'Shockwave',
  'Burning',
  'Stunning',
  'GravityMelee',
  'Deflecting',
  'BonusShot',
  'Power',
  'MultiShot',
  'Explorer',
  'Leeching',
  'Exploding',
  'Looting',
  'Piercing',
  'CriticalHit',
  'Infinity',
  'Growing',
  'Committed',
  'PoisonedMelee',
  'Sharpness',
  'Ricochet',
  'AnimaConduitRanged',
  'AnimaConduitMelee',
  'FoodReserves',
  'SurpriseGift',
  'Electrified',
  'SoulSiphon'
]

</script>

<h2>Items</h2>

<style>

.container{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.card{
    width:90%;

}
</style>

<p>
{#if process.browser && typeof(display) === "object" && display.items.length > 0}
    <div class="container">
        {#each display.items as item,i}
        <div class="card" style={`background-color:${item.rarity === 'Unique' ? '#ff7500': item.rarity === 'Rare' ? '#10a66c' : 'white'}`}>
            <h3>{item.equipmentSlot || `Item Slot ${i-5}`}</h3>
            <br>
            <strong >{item.type}</strong>
            <br>
            {item.rarity}
            <br>
            Approx. Power: {Math.round(9.98633 * item.power - 9.39419)}
            <br>
            <input bind:value={item.power} min={1.445555555555555} max={11.755555555555555}  step={0.000000000000001} type="range"/>
            <br>
             {item.power}
            <br>

            <br> 
            {#if item.enchantments}
                {#each item.enchantments as enchants,i}
                    {#if enchants.level > 0}
                         {enchants.id} {enchants.level}
                         <br>
                    {/if}
                {/each}

                

            {/if}

            <button on:click|preventDefault={()=>save(i,item.power)} style="float:right;">Save</button>
        </div>
        {/each}
    </div>

{/if}
</p>
