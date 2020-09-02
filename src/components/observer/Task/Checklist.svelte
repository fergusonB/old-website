<script lang="typescript">
    let inputField = "new checkbox";

    const checklist = {
        exists: false,

        list: [{ name: "hello", checked: false }],

        add: () => {
            checklist.list = [
                ...checklist.list,
                { name: inputField, checked: false },
            ];
        },
    };
</script>

<style>
    .checked {
        opacity: 0.5;
        text-decoration: line-through;
    }
</style>

{#if checklist.exists}
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
