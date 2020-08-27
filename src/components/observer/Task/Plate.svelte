<script lang="typescript">

    export let plateNumber;
    import {plates} from '../stores.js'
    import Summary from './Summary.svelte'
    
    
    if ($plates[plateNumber].notes === undefined){
        $plates[plateNumber].notes = []
    }

    const newNote = {
        text: "Add a new note",

        create: () => {
            if (newNote.text !== "") {
                $plates[plateNumber].notes = [...$plates[plateNumber].notes, { text: newNote.text }];
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

{#each $plates[plateNumber].notes as note,j}
    <div class="note card" on:click|self={()=>{
        note.clicked = !note.clicked 
            
    }}>
        
        {note.text}
        <span class="bin" on:click|self={() => {
            $plates[plateNumber].notes =  $plates[plateNumber].notes.filter((x) => x !== note)
        }}>
            🗑️
        </span>
<br>
        {#if note.summary }
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

{JSON.stringify($plates[plateNumber].notes)}