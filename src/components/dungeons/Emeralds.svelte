<script>

export let valid = false
export let display


let emeralds = 0

$: if (process.browser && valid){
    emeralds = display.currency[0].count
}
else{
    emeralds = 0
}

const modEmeralds = ()=>{
    if (process.browser && valid){
        let temp = localStorage.dungeons
        temp = temp.split('\n')
        temp[0] = JSON.parse(temp[0])
        temp[0].currency[0].count = emeralds
        temp[0] = JSON.stringify(temp[0])
        temp = temp.join('\n')
        localStorage.dungeons = temp


        
    }
    else{
        alert('Please enter valid save data first')
    }
}


</script>

<h2>Emeralds</h2>


<input bind:value={emeralds} type="number">
<button on:click={modEmeralds}>Edit</button>

