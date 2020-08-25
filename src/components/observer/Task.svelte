<script lang="typescript">
    import Plate from "../../components/observer/Task/Plate.svelte";

    $: plates = [{ title: "To Do" }, { title: "Doing" }, { title: "Done" }];

    const newPlate = {
        text: "Add another plate",

        create: () => {
            if (newPlate.text !== "") {
                plates = [...plates, { title: newPlate.text }];
                newPlate.text = "";
            } else newPlate.text = "Add another plate";
        },
        enterKey: (e) => {
            if (e.keyCode === 13) {
                newPlate.create();
            }
        },
    };
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
        height: 65vh;
    }
</style>

<h2>Tasks</h2>

<div class="panel">

    {#each plates as plate}
        <Plate title={plate.title} data={plate} />
    {/each}
    <div class="newPlate card">
        <input
            on:click={() => (newPlate.text = '')}
            on:keypress={(e) => newPlate.enterKey(e)}
            on:blur={() => newPlate.create()}
            bind:value={newPlate.text}
            type="text" />
    </div>

</div>
