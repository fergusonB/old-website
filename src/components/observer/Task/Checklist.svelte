<script lang="typescript">
        import { plates } from "../stores.js";

    let inputField = "new checkbox";

    const checklist = {
        exists: false,

        list: [],

        add: () => {
            checklist.list = [
                ...checklist.list,
                { name: inputField, checked: false },
            ];
        },

        progress:()=>{
            let count = 0
            for (let item of checklist.list){
                if (item.checked) count++
            }
            return (count / checklist.list.length) || 0
        },

        delete:()=>{
            checklist.list = []
            checklist.exists = false
        }


    };
</script>

<style>
    .checked {
        opacity: 0.5;
        text-decoration: line-through;
    }
</style>

{#if checklist.exists}
<br>
<progress value={checklist.progress()}></progress> <span on:click|self={()=>checklist.delete()}>🗑️</span>


    <p>
        
        {#each checklist.list as item, i}
            <span
                on:click={() => (item.checked = !item.checked)}
                class={item.checked ? 'checked' : ''}>{item.name}
            </span>
            <br />
        {/each}
    </p>
    <input bind:value={inputField} type="text" />
    <button on:click={() => checklist.add()}>Add Item</button>
{:else}
    <button on:click={() => (checklist.exists = true)}>Create Checklist</button>
{/if}
