<script lang="typescript">
    export let plateNumber;

    import { plates, note1, note2, dragTask } from "../stores.js";
    import { afterUpdate } from "svelte";
    import Summary from "./Summary.svelte";

    if ($plates[plateNumber].notes === undefined) {
        $plates[plateNumber].notes = [];
    }

    const newNote = {
        text: "",

        create: () => {
            if (newNote.text !== "") {
                //@ts-ignore
                $plates[plateNumber].notes = [
                    ...$plates[plateNumber].notes,
                    { text: newNote.text },
                ];
                newNote.text = "";
            }
        },

        enterKey: (e) => {
            if (e.keyCode === 13) {
                newNote.create();
            }
        },
    };

    const swapNotes = () => {
        if (
            $plates[$note1[0]].notes[$note1[1]] !== undefined &&
            $plates[$note2[0]].notes[$note2[1]] !== undefined
        ) {
            let tmp = $plates[$note1[0]].notes[$note1[1]];
            $plates[$note1[0]].notes[$note1[1]] =
                $plates[$note2[0]].notes[$note2[1]];
            $plates[$note2[0]].notes[$note2[1]] = tmp;

            setTimeout(() => ($dragTask = true), 0);
        }
    };
</script>

<style>
    input {
        width: 90%;
    }



    .bin {
        float: right;
        user-select: none;
    }

    .note {
        display: inline-block;
        width: 85%;
        overflow: hidden;

    }
    .note:hover {
        cursor: pointer;
        background-color: #ddd;
    }
    .content-edit-text {

        cursor: text;
        font-size: 1.5em;
        text-align: center;

        text-decoration: overline;


    }
</style>


    <span
        class="content-edit-text"
        contenteditable="true"
        bind:innerHTML={$plates[plateNumber].title}>{$plates[plateNumber].title}</span>
       


{#each $plates[plateNumber].notes as note, noteNumber}
    <div
        on:dragover|preventDefault|self
        on:dragend|preventDefault|self
        draggable={true}
        on:dragstart|self={() => {
            $dragTask = false;
            $note1 = [plateNumber, noteNumber];
        }}
        on:dragenter|self={() => ($note2 = [plateNumber, noteNumber])}
        on:dragend|self={() => swapNotes()}
        style={`background-color:${note.colors ? note.colors[1] : 'white'};`}
        class="note card"
        on:click|self={() => {
            note.clicked = !note.clicked;
            $dragTask = false;
        }}>
        {note.text}
        <span
            class="bin"
            on:click|self={() => {
                if (window.confirm('Delete this note?')) {
                    $plates[plateNumber].notes = $plates[plateNumber].notes.filter((x) => x !== note);
                }
            }}>
            🗑️
        </span>
        <br />
        {#if note.summary}📝{/if}
        {#if note.checklist}
            {#if note.checklist.length > 0}✅{/if}
        {/if}
    </div>

    {#if note.clicked}
        <Summary {plateNumber} {noteNumber} />
    {/if}
{/each}

<input
    placeholder="Add a new note"
    on:dragover|preventDefault|self
    on:dragend|preventDefault|self
    on:drop={() => {
        if (!(plateNumber === $note1[0])) {
            $plates[plateNumber].notes = [...$plates[plateNumber].notes, $plates[$note1[0]].notes[$note1[1]]];
            $plates[$note1[0]].notes = [...$plates[$note1[0]].notes.filter((x) => x !== $plates[$note1[0]].notes[$note1[1]])];
            setTimeout(() => ($dragTask = true), 0);
        }
    }}
    on:click={() => (newNote.text = '')}
    on:blur={() => newNote.create()}
    on:keydown={(e) => newNote.enterKey(e)}
    bind:value={newNote.text}
    type="text" />
