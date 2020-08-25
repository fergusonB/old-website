<script lang="typescript">
    export let title = "Placeholder";
    export let notes = [];

    const newNote = {
        text: "Add a new note",

        create: () => {
            if (newNote.text !== "") {
                notes = [...notes, { text: newNote.text }];
                newNote.text = "";
                
            } 
        },

        enterKey: (e) => {
            if (e.keyCode === 13) {
                newNote.create();
            }
        },
    };
</script>

<style>
    .plate {
        height: 65vh;
        min-width: 250px;
        max-width: 250px;
        flex: 1;
        overflow: scroll;
    }
    input {
        width: 90%;
    }
    h3 {
        background-color: #ddd;
        text-align: center;
    }
</style>

<div class="card plate">

    <h3>{title}</h3>

    {#each notes as note}
        <div class="card">{note.text}</div>
    {/each}


    <input
        on:click={() => (newNote.text = '')}
        on:blur={() => newNote.create()}
        on:keydown={(e) => newNote.enterKey(e)}
        bind:value={newNote.text}
        type="text" />

</div>
