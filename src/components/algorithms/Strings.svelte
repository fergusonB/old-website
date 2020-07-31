<script>

    import Caesar from "../../components/algorithms/strings/Caesar.svelte"
    import Palindrome from "../../components/algorithms/strings/Palindrome.svelte"
    import PalindromicSubstring from "../../components/algorithms/strings/PalindromicSubstring.svelte"
    import GroupAnagrams from "../../components/algorithms/strings/GroupAnagrams.svelte"

    let show = {
        caesar: false,
        palindrome: false,
        palindromic: false,
        groupAnagrams:true
    }

</script>

<p>All of these extend the built in String object.</p>


<h3 on:click={()=>show.groupAnagrams = !show.groupAnagrams}>Group Anagrams ▼</h3> 
{#if show.groupAnagrams}
<p><GroupAnagrams/></p>
{/if}

<h3 on:click={()=>show.caesar = !show.caesar}>Caesar ▼</h3> 
{#if show.caesar}
<p><Caesar/></p>
{/if}


<h3 on:click={()=>show.palindromic = !show.palindromic}>Palindromic Substring ▼</h3>

{#if show.palindromic}
<p> <PalindromicSubstring/>
</p>
{/if}


<h3 on:click={()=>show.palindrome = !show.palindrome}>Palindrome ▼</h3>
{#if show.palindrome}
<p>
    <Palindrome/>
    </p>
    
{/if}
