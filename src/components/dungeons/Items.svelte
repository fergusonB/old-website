<script>

export let display = []

</script>

<h2>Items</h2>


{#if process.browser && typeof(display) === "object" && display.items.length > 0}

        {#each display.items as item,i}
        <div class="card" style={`background-color:${item.rarity === 'Unique' ? '#ff7500': item.rarity === 'Rare' ? '#10a66c' : 'white'};`}>
            {item.equipmentSlot || `Item Slot ${i-5}`}
            <br>
            {item.type}
            <br>
            {item.rarity}
            <br>
            {item.power}
            <br>
            {item.enchantments}
        </div>
        {/each}

{/if}
