<script lang="typescript">
    import { plates } from "../stores.js";
export let plateNumber
export let noteNumber


let show = false;

const colors =["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange"]
const colorData = {
  "red": [
    "#d50000",
    "#ff5131",
    "#9b0000"
  ],
  "pink": [
    "#c51162",
    "#fd558f",
    "#8e0038"
  ],
  "purple": [
    "#aa00ff",
    "#e254ff",
    "#7200ca"
  ],
  "deepPurple": [
    "#6200ea",
    "#9d46ff",
    "#0a00b6"
  ],
  "indigo": [
    "#304ffe",
    "#7a7cff",
    "#0026ca"
  ],
  "blue": [
    "#2962ff",
    "#768fff",
    "#0039cb"
  ],
  "lightBlue": [
    "#0091ea",
    "#64c1ff",
    "#0064b7"
  ],
  "cyan": [
    "#00b8d4",
    "#62ebff",
    "#0088a3"
  ],
  "teal": [
    "#00bfa5",
    "#5df2d6",
    "#008e76"
  ],
  "green": [
    "#00c853",
    "#5efc82",
    "#009624"
  ],
  "lightGreen": [
    "#64dd17",
    "#9cff57",
    "#1faa00"
  ],
  "lime": [
    "#aeea00",
    "#e4ff54",
    "#79b700"
  ],
  "yellow": [
    "#ffd600",
    "#ffff52",
    "#c7a500"
  ],
  "amber": [
    "#ffab00",
    "#ffdd4b",
    "#c67c00"
  ],
  "orange": [
    "#ff6d00",
    "#ff9e40",
    "#c43c00"
  ],
  "deepOrange": [
    "#dd2c00",
    "#ff6434",
    "#a30000"
  ]
}


</script>

<style>
    .colors{
        display:grid;
        grid-template-columns: repeat(3,1fr);
        justify-content: space-between;

    }
    .colorBlock{
        margin:0.5em;
        height: 2em;
        width:2em;
    }
</style>


    <button on:click|self={()=>show = !show}>Select Color</button>
    {#if show}
    <div class="colors">
        {#each colors as color}
            <div on:click|self={()=>{
                $plates[plateNumber].notes[noteNumber].colors = colorData[color]
                show = !show
            }} style={`background-color:${colorData[color][0]}`} class="colorBlock"/>
        {/each}
        </div>
    {/if}
