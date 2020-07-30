<script>
    let str = 'Are you using the kayak?'
    let show = false

String.prototype.bf_longestPalindromicSubstring = function(){
    let text = this
    let longestNow = [0,1]
    
    const getPalindrome =(str,leftPointer,rightPointer) =>{
        while (leftPointer >=0 && rightPointer < str.length){
            if (str[leftPointer] !== str[rightPointer]) break;
            leftPointer--
            rightPointer++
        }
        return [leftPointer +1, rightPointer]
    }

    for (let i=1;i<text.length;i++){
        const odd = getPalindrome(text,i-1,i+1)
        const even = getPalindrome(text,i-1,i)
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        longestNow = longestNow[1] - longestNow[0] > longest[1] - longest[0] ?  longestNow : longest
    }
    return text.slice(longestNow[0],longestNow[1])


}

</script>
Returns the longest substring that is a palindrome.
<br>
<input bind:value={str}  on:click={()=>str = ''} type="text">
<br>
{str.bf_longestPalindromicSubstring()}
<br>

<button on:click={() => (show  = !show)}>
    Show / Hide Code
</button>
<br />
{#if show}
    Usage:
    <code>String.bf_longestPalindromicSubstring()</code>
    <br />
    Time: O(n^2)
    <br />
    Space: O(1)
    <br />
    <pre>{String.prototype.bf_longestPalindromicSubstring}</pre>
    <br />
{/if}