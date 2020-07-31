<script>

    let show = false

    let input = 'yo,act,flop,tac,foo,cat,oy,olfp'
    $: formatted = input.split(',')


    function groupAnagrams(words){
        const anagrams = {}
        for (const word of words){
            const sortedWord = word.split('').sort().join('')
            if (sortedWord in anagrams){
                anagrams[sortedWord].push(word)
            }
            else{
                anagrams[sortedWord] = [word]
            }
        }
        return Object.values(anagrams)
    }


</script>

Finds all anagrams in input and groups them together

<br>

<input bind:value={input} >
<br>
{groupAnagrams(formatted)}

<br />
<button on:click={() => (show = !show)}>Show/Hide Code</button>
<br />
{#if show}
    Usage:
    <code>
        groupAnagrams(["oof","foo","bar","rab"])
    </code>
    <br />
    Time: O(w*n*log(n))
    <br />
    Space: O(w*n)
    <pre>{groupAnagrams}</pre>
{/if}
