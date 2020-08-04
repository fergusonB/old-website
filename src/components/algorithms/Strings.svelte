<script>
    import Caesar from "../../components/algorithms/strings/Caesar.svelte";
    import Palindrome from "../../components/algorithms/strings/Palindrome.svelte";
    import PalindromicSubstring from "../../components/algorithms/strings/PalindromicSubstring.svelte";
    import GroupAnagrams from "../../components/algorithms/strings/GroupAnagrams.svelte";

    const objs = [
        { component: GroupAnagrams, title: "Group Anagrams" },
        { component: PalindromicSubstring, title: "Palindromic Substring" },
        { component: Caesar, title: "Caesar Cipher" },
        { component: Palindrome, title: "Palindrome" },
    ];
</script>

<style>
    .styling {
        padding: 20px;
    }
</style>

{#each objs as item, i}
    <div
        style={ !(i%2) ? 'background-color:lightgrey;' : 'backround-color:white;'}>
        <div class="styling">
            <h3>{item.title}</h3>
            <p>
                <svelte:component this={item.component} />
            </p>
        </div>
    </div>
{/each}
