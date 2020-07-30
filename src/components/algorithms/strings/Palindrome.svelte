<script>


String.prototype.bf_palindrome = function () {
        let str = this
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    let palindromeString = "rotator";

    let show = false

</script>
Checks a single string, looks for exact palindrome.
<br />
<input
    style={palindromeString.bf_palindrome() ? 'background-color:lightgreen;' : 'background-color:white;'}
    on:click={() => (palindromeString = '')}
    bind:value={palindromeString}
    type="text" />
{palindromeString.bf_palindrome() ? `${palindromeString} is a palindrome.` : `${palindromeString} is not palindrome.`}
<br />
<button on:click={() => (show  = !show)}>
    Show / Hide Code
</button>
<br />
{#if show}
    Usage:
    <code>String.bf_palindrome()</code>
    <br />
    Time: O(n)
    <br />
    Space: O(1)
    <br />
    <pre>{String.prototype.bf_palindrome}</pre>
    <br />
{/if}