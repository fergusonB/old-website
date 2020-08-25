<script lang="typescript">
    import Plate from "../../components/observer/Task/Plate.svelte";

    let plates = [{ title: "To Do" }, { title: "Doing" }, { title: "Done" }]
   

    if (process.browser){
        
    if (localStorage.task === undefined){
        localStorage.task = JSON.stringify([{ title: "To Do" }, { title: "Doing" }, { title: "Done" }])
    }
    else{
        plates = JSON.parse(localStorage.task)
    }
    }
    

    const newPlate = {
        text: "Add another plate",

        create: () => {
            if (newPlate.text !== "") {
                plates = [...plates, { title: newPlate.text }];
                newPlate.text = "";
                localStorage.task = JSON.stringify(plates)
            } else newPlate.text = "Add another plate";
        },
        enterKey: (e) => {
            if (e.keyCode === 13) {
                newPlate.create();
            }
        },

        delete: ()=>{
            
        }
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
    .bin {
        float: right;
    }
    .plate {
        height: 65vh;
        min-width: 250px;
        max-width: 250px;
        flex: 1;
        overflow: scroll;
    }
</style>

<h2>Tasks</h2>

<div class="panel">

    {#each plates as plate}
        <div class="card plate">
            <span
                class="bin"
                on:click={() => {
                    (plates = plates.filter((x) => x !== plate))
                    localStorage.task = JSON.stringify(plates)
                }}>
                🗑️
            </span>
            <Plate {plate} />
        </div>
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
