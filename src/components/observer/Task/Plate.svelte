<script lang="typescript">
        let notes = [];
    export let plate;
    import {plates} from '../stores.js'
    import Summary from './Summary.svelte'


    const newNote = {
        text: "Add a new note",

        create: () => {
            if (newNote.text !== "") {
                notes = [...notes, { text: newNote.text }];
                newNote.text = "";
                plate.notes = notes;
                $plates=$plates
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
    input {
        width: 90%;
    }
    h3 {
        background-color: #ddd;
        text-align: center;
    }
    .bin {

        user-select:none;
    }
    .bin:hover{
        cursor:pointer
    }
    .note{
    display:inline-block;
    width:70%;
    }
    .note:hover{
        cursor: pointer;
    }

</style>

<h3>{plate.title}</h3>

{#each notes as note}
    <div class="note card" on:click={()=>{
        note.clicked = !note.clicked
            
    }}>

        {note.text}

    </div>
    <span class="bin" on:click={() => {
        (notes = notes.filter((x) => x !== note))
        plate.notes = notes
        $plates=$plates
    }}>
        🗑️
    </span>
    {#if note.clicked}
    <Summary {note}/>
{/if}
{/each}

<input
    on:click={() => (newNote.text = '')}
    on:blur={() => newNote.create()}
    on:keydown={(e) => newNote.enterKey(e)}
    bind:value={newNote.text}
    type="text" />

