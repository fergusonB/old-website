<script>

export let display = []
export let valid
export let data



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

let enchantList = ["Accelerating", "AnimaConduitMelee", "AnimaConduitRanged", "BonusShot", "Burning", "Celerity", "ChainReaction", "Chains", "Chilling", "Committed", "Cowardice", "CriticalHit", "Deflecting", "Echo", "Electrified", "Exploding", "Explorer", "FinalShout", "FireAspect", "FireTrail", "FoodReserves", "Freezing", "Frenzied", "FuseShot", "Gravity", "GravityMelee", "GravityPulse", "Growing", "HealthSynergy", "Infinity", "Leeching", "Looting", "MultiShot", "Piercing", "PoisonedMelee", "PoisonedRanged", "PotionFortification", "Power", "Prospector", "Protection", "Punch", "RadianceMelee", "RadianceRanged", "Rampaging", "RapidFire", "Recycler", "Ricochet", "Sharpness", "Shockwave", "Smiting", "Snowing", "SoulSiphon", "SpeedSynergy", "SpiritSpeed", "Stunning", "Supercharge", "SurpriseGift", "Swiftfooted", "Swirling", "TempoTheft", "Thorns", "Thundering", "Unchanting", "Unset", "Weakening", "WildRage"]

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
            Enchantments: 
            <br>
                {#each item.enchantments as en}
                     {#if en.level > 0}
                <select bind:value={en.id}>
                {#each enchantList as enl}
                     <option value={enl}>{enl}</option>
                {/each}
                </select>
                <input bind:value={en.level} type="number" min={0} max={3}/>
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
