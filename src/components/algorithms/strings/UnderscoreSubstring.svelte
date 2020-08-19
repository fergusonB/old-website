<script lang="typescript">
    let show = true;

    let string = "testthis is a testtest to see if testestest it works";
    let substring = "test";


    const underscoreSubstring = {
        findSubstringLocations: () => {

        },
        collapseLocations: ()=>{

        },
        addUnderscoresToString: ()=>{

        },
        
        perform: (string,substring)=>{
            return 'test'
        }
    }




  



</script>

<button on:click={() => (show = !show)}>Show / Hide Code</button>
<br />
{#if show}
    Usage:
    <code>underscoreSubstring.perform(string,substring)</code>
    <br />
    Time: O(n * m)
    <br />
    Space: O(n)
    <br />
    <pre>{JSON.stringify(underscoreSubstring)}</pre>
    <br />
{/if}
