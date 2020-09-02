<script lang="typescript">
    import { plates } from "../stores.js";
    export let plateNumber;
    export let noteNumber;
    import Colors from "./Colors.svelte";
    import Checklist from './Checklist.svelte'

    $: backgroundColors = $plates[plateNumber].notes[noteNumber].colors || [
        "white",
        "white",
        "black",
    ];

    let title = "";

    const summ = {
        text: "",

        save: () => {
            $plates = $plates;
        },
        exit: () => {
            $plates[plateNumber].notes[noteNumber].clicked = !$plates[
                plateNumber
            ].notes[noteNumber].clicked;
            summ.save();
        },
        updateSummary: () => {
            $plates[plateNumber].notes[noteNumber].summary = summ.text;
            summ.save();
        },
        updateTitle: () => {
            $plates[plateNumber].notes[noteNumber].text = title;
            summ.save();
        },
    };

    if ($plates[plateNumber].notes[noteNumber].summary) {
        summ.text = $plates[plateNumber].notes[noteNumber].summary;
    }
    if ($plates[plateNumber].notes[noteNumber].text) {
        title = $plates[plateNumber].notes[noteNumber].text;
    }
</script>

<style>
    .summary {
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: 1;
        align-items: center;
        justify-content: center;
        opacity: 0.9;
    }
    .summaryPanel {
        display: block;
        width: 80%;
        max-width: 500px;
        z-index: 2;
        max-height: 90%;
        overflow-y:scroll;
    }

    textarea {
        width: 100%;
        max-width: 500px;
        min-width: 100%;
        min-height: 10em;
    }
</style>

<div
    class="summary"
    on:click|self={() => summ.exit()}
    style={`background-color:${backgroundColors[1]};`}>
    <div
        style={`background-color:${backgroundColors[0]};`}
        class="summaryPanel card">
        <button style="float:right;" on:click={() => summ.exit()}>❌</button>
        <h3>Notes:</h3><input
            style={`color:${backgroundColors[2]};`}
            bind:value={title}
            on:blur={() => summ.updateTitle()}
            type="text" />

        <h4>Summary:</h4>

        <p>
            <textarea
                style={`color:${backgroundColors[2]};`}
                bind:value={summ.text}
                rows="10"
                name="summary"
                on:blur={() => summ.updateSummary()} />
        </p>
        <p>
            <Colors {plateNumber} {noteNumber} />
            <Checklist {plateNumber} {noteNumber}/>
        </p>
    </div>
</div>


