<script>

let save = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let mapping = {
    0:'',
    1:'X',
    2:'O'
}



let point1
let point2
let gameover = 0
let formattedWin=``

const stateFunc = (x,y)=>{
    if (!gameover){
        if (save[x][y]){
        alert(`You can't select a space that has already been selected.`)
     }
        else{
        save[x][y] +=1;
        winner()
        computerDecision()
        winner()
        }
    }

}

const computerDecision = ()=> {
    const randomizer = () =>{
        point1 = Math.floor(Math.random()*3)
        point2 = Math.floor(Math.random()*3)
    }
    if (gameover===0){
        randomizer()
        if (save[point1][point2] === 0){
            save[point1][point2]+=2
           
        }
    else{
        try {
            computerDecision()
        } catch (error) {
            
        }

        }

    }

}

const winner =()=>{
    const whowon= (winner) =>{
        gameover = 1
        formattedWin = `Player ${winner} is the winner`
        

    }
    if (save[0][0] && save[0][0]===save[0][1] && save[0][1]===save[0][2]){
   
        whowon(save[0][0]);
    }
    else if (save[1][0] && save[1][0]===save[1][1] && save[1][1]===save[1][2]){
        
        whowon(save[1][0]);
    }
    else if (save[2][0] && save[2][0]===save[2][1] && save[2][1]===save[2][2]){
   
        whowon(save[2][0]);
    }
    else if (save[0][0] && save[0][0]===save[1][0] && save[1][0]===save[2][0]){
        
        whowon(save[0][0]);
    }
    else if (save[0][1] && save[0][1]===save[1][1] && save[1][1]===save[2][1]){
        
        whowon(save[0][1]);
    }
    else if (save[0][2] && save[0][2]===save[1][2] && save[1][2]===save[2][2]){
        
        whowon(save[0][2]);
    }
    else if (save[0][0] && save[0][0]===save[1][1] && save[1][1]===save[2][2]){
        
        whowon(save[0][0]);
    }
    else if (save[0][2] && save[0][2]===save[1][1] && save[1][1]===save[2][0]){
        
        whowon(save[0][2]);
    }
}


const reset = () => {
    gameover = 0
    save = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ]
    formattedWin = ` `
}
</script>

<style>
.board {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;


}
.card{
    display:flex;
    font-size:3em;
    user-select: none;
    width:5vh;
    height:5vh;
    justify-content:center;
    align-items:center;



    
}
.card:hover{
    cursor:pointer;
}
</style>

<svelte:head>
  <title>Tic Tac Toe</title>
</svelte:head>

<h1>Tic Tac Toe</h1>

<div class="board">
<div on:click={()=>stateFunc(0,0)} class="card">{mapping[save[0][0]]}</div>
<div on:click={()=>stateFunc(0,1)} class="card">{mapping[save[0][1]]}</div>
<div on:click={()=>stateFunc(0,2)} class="card">{mapping[save[0][2]]}</div>
<div on:click={()=>stateFunc(1,0)} class="card">{mapping[save[1][0]]}</div>
<div on:click={()=>stateFunc(1,1)} class="card">{mapping[save[1][1]]}</div>
<div on:click={()=>stateFunc(1,2)} class="card">{mapping[save[1][2]]}</div>
<div on:click={()=>stateFunc(2,0)} class="card">{mapping[save[2][0]]}</div>
<div on:click={()=>stateFunc(2,1)} class="card">{mapping[save[2][1]]}</div>
<div on:click={()=>stateFunc(2,2)} class="card">{mapping[save[2][2]]}</div>



</div>
<p on:click={reset} class="card">
<img alt="reset icon" src="data:image/png;base64,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"/>
</p>
<p style="text-align:center;font-size:2em;">{formattedWin}</p>
