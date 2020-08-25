<script lang="typescript">
    import Plate from "../../components/observer/Task/Plate.svelte";

    $:   plates = [
        { title: "fuck", notes:[{text:'test'},{text:'test2'}] }
    ];

    const newPlate = {
        text:'Add another plate',

        create: ()=>{
            if (newPlate.text !== ''){
                plates = [...plates,{title:newPlate.text, notes:[]}]
            }
            else newPlate.text = 'Add another plate'
            
        }

    }


</script>

<style>
    .panel {
        display: flex;
        align-items: center;
        overflow: scroll;
    }
    .newPlate {
        min-width: 300px;
    }
</style>

<h2>Tasks</h2>

<div class="panel">

    {#each plates as plate}
        <Plate title={plate.title} notes={plate.notes} />
    {/each}
    <div class="newPlate card"><input on:click={()=>newPlate.text=''}  on:blur={()=>newPlate.create()} bind:value={newPlate.text} type="text"></div>

</div>
