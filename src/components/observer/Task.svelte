<script lang="typescript">
    import Plate from "../../components/observer/Task/Plate.svelte";
    import { plates, dragTask } from "./stores.js";
    import { afterUpdate } from "svelte";

    let dragOne
    let dragTwo

    const swapPlates = ()=>{
        if ($dragTask){ 
            let temp = $plates[dragOne]
        $plates[dragOne] = $plates[dragTwo]
        $plates[dragTwo] = temp

        }


    }

    // @ts-ignore
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
        text: "",

        create: () => {
            if (newPlate.text !== "") {
                //@ts-ignore
                $plates = [...$plates, { title: newPlate.text }];
                newPlate.text = "";
            } else newPlate.text = "";
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
        cursor:grab;
    }

    .bin {
        float: right;
        user-select: none;
    }
    .bin:hover {
        cursor: pointer;
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


<div  class="panel">
    {#each $plates as plate, i}
        <div 
        on:dragover|preventDefault|self
    on:dragend|preventDefault|self
        class="card plate" draggable={$dragTask ? true : false} on:dragstart|self={()=>dragOne = i} on:dragenter|self={()=>dragTwo = i} on:drop={()=>swapPlates()}>
            <span
                class="bin"
                on:click={() => {
                    if (window.confirm('Do you really want delete this plate?')) {
                        $plates = $plates.filter((x) => x !== plate);
                    }
                }}>
                🗑️
            </span>
            <Plate plateNumber={i} />
        </div>
    {/each}
    <div class="newPlate card">
        <input
        placeholder = 'Add a new Plate'
            on:click={() => (newPlate.text = '')}
            on:keypress={(e) => newPlate.enterKey(e)}
            on:blur={() => newPlate.create()}
            bind:value={newPlate.text}
            type="text" />
    </div>
</div>

