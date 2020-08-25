<script lang="typescript">

    import Plate from "../../components/observer/Task/Plate.svelte";

    

    $:   plates = [
        { title: "To Do" },{title:"Doing"},{title:"Done"}
    ];

   

    const newPlate = {
        text:'Add another plate',

        create: ()=>{
            if (newPlate.text !== ''){
                plates = [...plates,{title:newPlate.text}]
                newPlate.text = 'Add another plate'
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
        min-width: 250px;
        margin-top: 0px;
        height:65vh;
    }
</style>

<h2>Tasks</h2>

<div class="panel">

    {#each plates as plate}
        <Plate title={plate.title}  />
    {/each}
    <div class="newPlate card"><input on:click={()=>newPlate.text=''}  on:blur={()=>newPlate.create()} bind:value={newPlate.text} type="text"></div>

</div>
