<script>
    let text = 'Enter Phrase'
    let shift = 3

    String.prototype.bf_caesarEncrypt = function(num){
        if (isNaN(num)) return 'Usage: [String].bf_caesarEncrypt([number to shift])'
        let str = this
        const key = num%26
        const shiftedLetters = []
        const getLetter = (letter,key)=>{
            const newLetter = letter.charCodeAt() + key
            return newLetter <=122 ? String.fromCharCode(newLetter) : String.fromCharCode(96+(newLetter%122))
        }
        for (let letter of str){
            shiftedLetters.push(getLetter(letter,key))
        }
        return shiftedLetters.join('')
        
    }
    

</script>

<h4>Encrypt</h4>
<input on:click={()=>text = ''} bind:value={text} type="text" >
<input bind:value={shift} type="number">
<br>
{text.bf_caesarEncrypt(shift)}