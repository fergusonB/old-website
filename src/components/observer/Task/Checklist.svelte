<script lang="typescript">
    import { plates } from "../stores.js";
    export let plateNumber;
    export let noteNumber;

    let inputField = "Write a new item here.";

    const checklist = {
        exists: false,

        list: [],

        add: () => {
            if (inputField !== "" && inputField !=="Write a new item here.") {
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
            checklist.list = [];
            checklist.exists = false;
            checklist.save();
        },

        save: () => {
            $plates[plateNumber].notes[noteNumber].checklist = checklist.list;
        },
    };

    if ($plates[plateNumber].notes[noteNumber].checklist !== undefined) {
        checklist.list = $plates[plateNumber].notes[noteNumber].checklist;
        if (checklist.list.length > 0) checklist.exists = true;
    }
</script>

<style>
    .checkitem:hover {
        cursor: pointer;
        background-color: #ddd;
    }
    .checked {
        opacity: 0.5;
        text-decoration: line-through;
    }
</style>

{#if checklist.exists}
    <br />
    <progress value={checklist.progress()} />
    <span on:click|self={() => checklist.delete()}>🗑️</span>

    <p>
        {#each checklist.list as item, i}
            <span
                on:click={() => (item.checked = !item.checked)}
                class={item.checked ? 'checked checkitem' : 'checkitem'}>{item.name}
            </span>
            <br />
        {/each}
    </p>
    <input
        on:click={() => {
            inputField = '';
        }}
        bind:value={inputField}
        type="text" />
    <button on:click={() => checklist.add()}>Add Item</button>
{:else}
    <button on:click={() => (checklist.exists = true)}>Create Checklist</button>
{/if}
