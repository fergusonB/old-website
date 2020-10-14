<script>

import { saveAs } from 'file-saver';
import Emeralds from "../../components/dungeons/Emeralds.svelte";

import Items from "../../components/dungeons/Items.svelte";

let files
let data = []
let valid = false
let display = `Waiting for valid save`




if (process.browser && localStorage.dungeons){
    data = localStorage.dungeons
}

$: if (process.browser){
    localStorage.dungeons=data  

    try {
        display = JSON.parse(localStorage.dungeons.split('\n')[0])
        valid = true
    }
    catch{
        valid = false
    }
}



const getSampleData=async()=>{
    let res = await fetch('./dungeonsdata.txt')
    data = await res.text()
    
}


const fileUpload = async()=>{
    data = await files[0].text()
}


const downloadSave = ()=>{
    if (valid && files){
        let filename = files[0].name
        let contents = localStorage.dungeons
        let download = new Blob([contents.toString()],{ type: "text/text" })
        saveAs(download,filename)
    }
    else{
        alert('Invalid file\nPlease upload your character file.')
    }
    
}

const clearData = () =>{
    delete localStorage.dungeons
    location.reload()
}


</script>

<svelte:head>
  <title>Dungeons Save Editor</title>
</svelte:head>

<h1>Dungeons Save Editor</h1>
<p>
This editor was designed for the Switch version of the game.
<br>
It's likely that it will also work on other console versions of the game. It will not work for the PC version.
<br>
Do not bring any items you make here online, I haven't integrated any kind of legality checking. This is for testing / Min-Maxing only.
</p>

<p>
To begin, upload a character file below (e.g. Character174B9BB908D803BDD4E3EE64BB9A4F84)
<br>
To get this file from the Switch, you need to have a hacked console, and a data tool like JKSV. 
There are plenty of resources online so I will not go into them here.

<br><br>
Need some <a href='Click here to load sample data' on:click|preventDefault={getSampleData} >sample data?</a>
<br>


<br>


<input type="file" bind:files on:change={fileUpload}>
<br>
<button on:click={downloadSave}>Download modified save</button>  <button on:click={clearData}>Clear Data</button>


<br>
<strong>Make sure you have a backup before making changes.</strong>
</p>



<Emeralds {valid} {display} bind:data  />



<Items {valid} {display} bind:data/>
