<script lang="typescript">

    let show = false
    let input = "Are you climbing the trail?";

    const longestSubstringNoDuplication = (str) => {
        const last = {};

        let longest = [0, 1];
        let start = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] in last) {
                start = Math.max(start, last[str[i]] + 1);
            }
            if (longest[1] - longest[0] < i + 1 - start) {
                longest = [start, i + 1];
            }
            last[str[i]] = i;
        }
        return str.slice(longest[0], longest[1]);
    };
</script>

Checks a string for the longest substring without any duplicating characters.
<br />

<input bind:value={input} type="text" />
<br />
{longestSubstringNoDuplication(input)}

<br />
<button on:click={() => (show = !show)}>Show/Hide Code</button>
<br />
{#if show}
    Usage:
    <code>
        longestSubstringNoDuplication(input)
    </code>
    <br />
    Time: O(n)
    <br />
    Space: O( min(n, a) )
    <pre>{longestSubstringNoDuplication}</pre>
{/if}
