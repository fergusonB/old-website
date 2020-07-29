<script>
    let text = "Enter Phrase";
    let textd = "Hqwhu Skudvh";
    let shift = 3;
    let shiftd = 3;

    let show = false;

    String.prototype.bf_caesar = function (num) {
        if (isNaN(num)) return 'Usage: String.bf_caesar([number to encrypt][negative number to decrypt])'
        let text = this
        let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let encrypted = [];
        for (let letter of text) {
            let i = alphabet.indexOf(letter)%26;
            if (i > -1) encrypted.push(alphabet[(i + num) % 26]);
            else encrypted.push(letter);
        }
        return encrypted.join("");
    };
</script>

<input on:click={() => (text = '')} bind:value={text} type="text" />
<input bind:value={shift} type="number" />
<br />
{text.bf_caesar(shift)}
<br />
<button on:click={() => (show = !show)}>Show/Hide Code</button>
<br />
{#if show}
    Usage:
    <code>
        String.bf_caesar([number to encrypt][negative number to decrypt])
    </code>
    <br />
    Time: O(n)
    <br />
    Space: O(n)
    <pre>{String.prototype.bf_caesar}</pre>
{/if}
