<script>

export let display = []
export let valid
export let data
let col='white'
let powerSet = []

const save = (i) => {
    if (process.browser && valid){
        let temp = localStorage.dungeons
        temp = temp.split('\n')
        temp[0] = JSON.parse(temp[0])


        temp[0].items[i].power = 5

        
        temp[0] = JSON.stringify(temp[0])
        temp = temp.join('\n')
        localStorage.dungeons = temp
        data = localStorage.dungeons
        col = '#17dd62'
        setTimeout(() => {  col='white'; }, 500);
    }
    else{
        alert('Error, please refresh the page.')
    }
}

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
        <div class="card" style={`background-color:${item.rarity === 'Unique' ? '#ff7500': item.rarity === 'Rare' ? '#10a66c' : 'white'};`}>
            <h3>{item.equipmentSlot || `Item Slot ${i-5}`}</h3>
            <br>
            <strong>{item.type}</strong>
            <br>
            {item.rarity}
            <br>
            Approx. Power: {Math.round(9.98633 * item.power - 9.39419)}
    
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

            <button on:click|preventDefault={()=>save(i)} style="float:right;">Save</button>
        </div>
        {/each}
    </div>

{/if}
</p>
