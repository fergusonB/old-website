<script lang="typescript">
    import { plates } from "../stores.js";
    export let plateNumber
    export let noteNumber;
    import Colors from './Colors.svelte';


   
    let title = ''

    const summ = {
        text : '',

        save: () => {
            $plates = $plates;
        },
        exit: () => {
            $plates[plateNumber].notes[noteNumber].clicked = !$plates[plateNumber].notes[noteNumber].clicked;
            summ.save();
        },
        updateSummary: ()=>{
            $plates[plateNumber].notes[noteNumber].summary = summ.text
            summ.save()
        },
        updateTitle: ()=>{
            $plates[plateNumber].notes[noteNumber].text = title
            summ.save()
        }
    };

    if ($plates[plateNumber].notes[noteNumber].summary){
        summ.text = $plates[plateNumber].notes[noteNumber].summary
    }
    if ($plates[plateNumber].notes[noteNumber].text){
        title = $plates[plateNumber].notes[noteNumber].text
    }
</script>

<style>
    .summary {
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        background-color: rgba(221,221,221,0.7);
        height: 100%;
        width: 100%;
        z-index: 1;
        align-items: center;
        justify-content: center;
    }
    .summaryPanel {
        display: block;
        width: 80%;
        max-width: 500px;
        z-index: 2;
    }
    textarea{
        width:100%;
        max-width: 500px;
        min-width:100%;
        min-height:20em;

    }
</style>

<div class="summary" on:click|self={()=>summ.exit()}>
    <div class="summaryPanel card">
        <button style="float:right;" on:click={() => summ.exit()}>❌</button>
        <h3>Notes:</h3><input bind:value={title} on:blur={()=>summ.updateTitle()} type="text">

        <h4>Summary:</h4>
        
        <p>
            <textarea bind:value={summ.text} rows="10" name="summary" on:blur={()=>summ.updateSummary()}/>

        </p>
        <Colors {plateNumber} {noteNumber}/>

    </div>
</div>
