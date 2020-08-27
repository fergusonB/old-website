<script lang="typescript">
        let notes = [];
    export let plateNumber;
    import {plates} from '../stores.js'
    import Summary from './Summary.svelte'
    


    const newNote = {
        text: "Add a new note",

        create: () => {
            if (newNote.text !== "") {
                notes = [...notes, { text: newNote.text }];
                newNote.text = "";
                $plates[plateNumber].notes = notes;
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
        float:right;
        user-select:none;
    }

    .note{
    display:inline-block;
    width:85%;
    overflow: hidden;
    }
    .note:hover{
        cursor: pointer;
        background-color: #ddd;
    }

</style>

<h3>{$plates[plateNumber].title}</h3>

{#each notes as note,j}
    <div class="note card" on:click|self={()=>{
        note.clicked = !note.clicked
            
    }}>

        {note.text}
        <span class="bin" on:click|self={() => {
            (notes = notes.filter((x) => x !== note))
            plates[plateNumber].notes = notes
            $plates=$plates
        }}>
            🗑️
        </span>
<br>
        {#if note.summary}
        📝
        {/if}

    </div>



    {#if note.clicked}
    <Summary {plateNumber} noteNumber={j}/>

{/if}
{/each}

<input
    on:click={() => (newNote.text = '')}
    on:blur={() => newNote.create()}
    on:keydown={(e) => newNote.enterKey(e)}
    bind:value={newNote.text}
    type="text" />

