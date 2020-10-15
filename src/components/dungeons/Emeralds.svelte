<script>

export let valid = false
export let display
export let data


let emeralds = 0
let col='white'




$:if (process.browser && valid){
    emeralds = display.currency[0].count
}
else{
    emeralds = 0
}

const modEmeralds = (emer)=>{
    if (process.browser && valid){
        let temp = localStorage.dungeons
        temp = temp.split('\n')
        temp[0] = JSON.parse(temp[0])
        temp[0].currency[0].count = emer
        temp[0] = JSON.stringify(temp[0])
        temp = temp.join('\n')
        localStorage.dungeons = temp
        data = localStorage.dungeons
        col = '#17dd62'
        setTimeout(() => {  col='white'; }, 500);



    }
    else{
        alert('Please enter valid save data first.')
    }
}

$:emer = emeralds

</script>

<h2>Emeralds</h2>
<p>
<input maxlength="9" on:change={modEmeralds(emer)} style="background-color:{col}" bind:value={emer} type="digit">

</p>

