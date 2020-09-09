<script lang="typescript">
    import { plates } from "../stores.js";
    export let plateNumber;
    export let noteNumber;

    let inputField = "";

    const checklist = {
        exists: false,

        list: [],

        add: () => {
            if (inputField !== "") {
                checklist.list = [
                    ...checklist.list,
                    { name: inputField, checked: false },
                ];
                checklist.save();
            }
        },

        progress: () => {
            let count = 0;
            for (let item of checklist.list) {
                if (item.checked) count++;
            }
            return count / checklist.list.length || 0;
        },

        delete: () => {
            if (window.confirm("Delete this checklist?")) {
                checklist.list = [];
                checklist.exists = false;
                checklist.save();
            }
        },

        save: () => {
            $plates[plateNumber].notes[noteNumber].checklist = checklist.list;
        },

        showChecked: true,
    };

    if ($plates[plateNumber].notes[noteNumber].checklist !== undefined) {
        checklist.list = $plates[plateNumber].notes[noteNumber].checklist;
        if (checklist.list.length > 0) checklist.exists = true;
    }
</script>

<style>

    .checkitem{
        display:inline-flex;

        width:98%;
        border:0px;
        margin:0px;
        padding:5px;

        background-color:whitesmoke ;

    }
    .checkitem:hover {
        cursor: pointer;

    }
    .checked {
        opacity: 0.5;
        text-decoration: line-through;
    }
    .alternating{
        background-color:#ddd;

    }
</style>

{#if checklist.exists}
    <h4>Checklist:</h4>
    <br />
    <progress value={checklist.progress()} />
    <span on:click|self={() => checklist.delete()}>🗑️</span>

        {#each checklist.list as item, i}
            {#if checklist.showChecked}
                <div
                    on:click={() => (item.checked = !item.checked)}
                    class:alternating={i%2} class={item.checked ? 'checked  checkitem' : '  checkitem'}>{item.name}
    </div>
                <br />
            {:else if !item.checked}
                <div
                    on:click={() => (item.checked = !item.checked)}
                    class={item.checked ? 'checked  checkitem' : '  checkitem'}>{item.name}
</div>
                <br />
            {/if}
        {/each}

    <input
        on:keydown={(e) => {
            if (e.keyCode === 13) {
                checklist.add();
                inputField = '';
            }
        }}
        on:click={() => {
            inputField = '';
        }}
        bind:value={inputField}
        type="text"
        placeholder="Write a new item here" />
    <button on:click={() => checklist.add()}>Add Item</button>
    <button
        on:click={() => (checklist.showChecked = !checklist.showChecked)}>{checklist.showChecked ? 'Hide checked' : 'Show checked'}</button>
{:else}
    <button on:click={() => (checklist.exists = true)}>Create Checklist</button>
{/if}
