<script>
    import Caesar from "../../components/algorithms/strings/Caesar.svelte";
    import Palindrome from "../../components/algorithms/strings/Palindrome.svelte";
    import PalindromicSubstring from "../../components/algorithms/strings/PalindromicSubstring.svelte";
    import GroupAnagrams from "../../components/algorithms/strings/GroupAnagrams.svelte";
    import LongestSubstringNoDuplication from "../../components/algorithms/strings/LongestSubstringNoDuplication.svelte";
    import UnderscoreSubstring from "../../components/algorithms/strings/UnderscoreSubstring.svelte"

    const objs = [
        { component: GroupAnagrams, title: "Group Anagrams" },
        { component: PalindromicSubstring, title: "Palindromic Substring" },
        { component: Caesar, title: "Caesar Cipher" },
        { component: Palindrome, title: "Palindrome" },
        {
            component: LongestSubstringNoDuplication,
            title: "Longest Substring Without Duplication",
        },
        {component: UnderscoreSubstring, title:"Underscore Substring"}
    ];

    let count = 0
</script>

<style>
    .colored{
        background-color: #ddd;
    }
</style>


{#each objs as item, i}

    <div
        class={!(i%2) ? "colored" : ""}> 
        <div style="padding:20px;">
            <h3>{item.title}</h3>
            <p>
                <svelte:component this={item.component} />
            </p>
        </div>
    </div>
{/each}

