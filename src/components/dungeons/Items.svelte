<script>

export let display = []

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
            {#if item.enchantments}
                {#each item.enchantments as enchants,i}
                    {#if enchants.level > 0}
                         {enchants.id} {enchants.level}
                         <br>
                    {/if}
                {/each}

            {/if}

            <button style="float:right;">Save</button>
        </div>
        {/each}
    </div>

{/if}
</p>
