<script>
    $: showHide = {
        palindrome: false,
    };

    String.prototype.bf_palindrome = function () {
        let str = this.toLowerCase();
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



    let palindromeString = "Repaper";
</script>

<p>All of these extend the built in String object.</p>

<h3>Check for Palindrome</h3>
<p>
    Checks if a string is a palindrome.
    <br />
    <input
        on:click={() => (palindromeString = '')}
        bind:value={palindromeString}
        type="text" />
    {palindromeString.bf_palindrome() ? `${palindromeString} is a palindrome.` : `${palindromeString} is not palindrome.`}
    <br />
    <button on:click={() => (showHide.palindrome = !showHide.palindrome)}>
        Show / Hide Code
    </button>
    <br />
    {#if showHide.palindrome}
        Usage:
        <code>String.palindrome()</code>
        <br />
        Time: O(n)
        <br />
        Space: O(1)
        <br />
        <pre>{String.prototype.bf_palindrome}</pre>
        <br />
    {/if}
</p>

