<script lang="typescript">
    import Plate from "../../components/observer/Task/Plate.svelte";

    $:   plates = [
        { title: "fuck" },
        { title: "holy" },
        { title: "three" },
        { title: "four" },
        { title: "five" },
        { title: "six" },
    ];

    const newPlate = {
        text:'Add another plate',

        create: ()=>{
            if (newPlate.text !== ''){
                plates = [...plates,{title:newPlate.text}]
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
        <Plate title={plate.title} />
    {/each}
    <div class="newPlate card"><input on:click={()=>newPlate.text=''} on:blur={()=>newPlate.create()} bind:value={newPlate.text} type="text"></div>

</div>
