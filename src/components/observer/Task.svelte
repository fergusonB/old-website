<script lang="typescript">
    import Plate from "../../components/observer/Task/Plate.svelte";
    import { plates } from "./stores.js";
    import { afterUpdate } from "svelte";

    let dragOne
    let dragTwo

    const swapPlates = ()=>{
        let temp = $plates[dragOne]
        $plates[dragOne] = $plates[dragTwo]
        $plates[dragTwo] = temp

    }


    if (process.browser) {
        if (localStorage.task === undefined) {
            localStorage.task = JSON.stringify($plates);
        } else {
            $plates = JSON.parse(localStorage.task);
        }
        afterUpdate(() => {
            localStorage.task = JSON.stringify($plates);
        });
    }

    const newPlate = {
        text: "Add another plate",

        create: () => {
            if (newPlate.text !== "") {
                //@ts-ignore
                $plates = [...$plates, { title: newPlate.text }];
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
        overflow-x: scroll;
    }
    .newPlate {
        min-width: 250px;
        margin-top: 0px;
        height: 65vh;
    }

    .plate {
        height: 65vh;
        min-width: 250px;
        max-width: 250px;
        flex: 1;
        overflow-y: scroll;
    }
    .bin {
        float: right;
        user-select: none;
    }
    .bin:hover {
        cursor: pointer;
    }

    h3 {
        background-color: #ddd;
        text-align: center;
    }
</style>

<h2>
    Tasks <span
        on:click={() => {
            if (window.confirm('Do you want to reset everything?')) {
                delete localStorage.task;
                location.reload();
            }
        }}>🗑️</span>
</h2>

<div class="panel">
    {#each $plates as plate, i}
        <div class="card plate" >
            <span
                class="bin"
                on:click={() => {
                    if (window.confirm('Do you really want delete this plate?')) {
                        $plates = $plates.filter((x) => x !== plate);
                    }
                }}>
                🗑️
            </span>
            <h3 draggable={true} on:dragstart={()=>dragOne = i} on:dragenter={()=>dragTwo = i} on:dragend={()=>swapPlates()}>{$plates[i].title}</h3>
            <Plate plateNumber={i} />
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
