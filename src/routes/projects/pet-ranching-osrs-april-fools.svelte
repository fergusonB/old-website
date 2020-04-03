<script>
  let route = "menu";
  let entry;

  let links = {
    heron: [
      "https://oldschool.runescape.wiki/images/a/a0/Heron.png?32604",
      "https://oldschool.runescape.wiki/images/d/df/Heron_chathead.png?9994c",
      "https://oldschool.runescape.wiki/images/thumb/b/b4/Heron_pet.png/280px-Heron_pet.png?1a8a8",
      "A long-legged bird that likes to fish. The Heron pet can have a dowsing effect on your opponents with water-based moves.",
      "Water"
    ],
    phoenix: [
      "https://oldschool.runescape.wiki/images/c/c1/Phoenix.png?55ffd",
      "https://oldschool.runescape.wiki/images/6/67/Phoenix_chathead.png?d80fa",
      "https://oldschool.runescape.wiki/images/thumb/0/0e/Phoenix_pet.png/250px-Phoenix_pet.png?f6800",
      "A fiery bird which rose out of ashes. The Phoenix pet can singe your opponents with fiery-based moves.",
      "Fire"
    ],
    tangleroot: [
      "https://oldschool.runescape.wiki/images/1/1c/Tangleroot.png?6317c",
      "https://oldschool.runescape.wiki/images/7/7f/Tangleroot_chathead.png?669c6",
      "https://oldschool.runescape.wiki/images/thumb/2/2e/Tangleroot_pet.png/230px-Tangleroot_pet.png?6bb98",
      "A small living tree creature. The Tangleroot pet can savagely cut and snare your opponents with its grass-based moves.",
      "Grass"
    ],
    babymole: [
      "https://oldschool.runescape.wiki/images/5/50/Baby_mole.png?877bd",
      "https://oldschool.runescape.wiki/images/9/9f/Baby_mole_chathead.png?90ae2",
      "https://oldschool.runescape.wiki/images/thumb/c/c7/Baby_mole_pet.png/270px-Baby_mole_pet.png?ced53",
      "The baby mole can dig, taking you back to your respawn point.",
      "Ground"
    ],
    hellpuppy: [
      "https://oldschool.runescape.wiki/images/7/74/Hellpuppy.png?9ece7",
      "https://oldschool.runescape.wiki/images/8/87/Hellpuppy_chathead.png?9a63b",
      "https://oldschool.runescape.wiki/images/thumb/0/04/Hellpuppy_pet.png/280px-Hellpuppy_pet.png?b9d9d",
      "The Hellpuppy can burn trees, clearing your path.",
      "Fire"
    ],
    kreearajr: [
      "https://oldschool.runescape.wiki/images/7/75/Pet_kree%27arra.png?0102a",
      "https://oldschool.runescape.wiki/images/1/17/Kree%27arra_Jr._chathead.png?59995",
      "https://oldschool.runescape.wiki/images/thumb/4/4d/Kree%27arra_Jr..png/270px-Kree%27arra_Jr..png?ce6c4",
      "The bird is the word... of law. Kree can fly, quickly taking you to any city you like.",
      "Flying"
    ],
    bloodhound: [
      "https://oldschool.runescape.wiki/images/6/6d/Bloodhound.png?ddf8a",
      "https://oldschool.runescape.wiki/images/4/45/Bloodhound_chathead.png?49c0e",
      "https://oldschool.runescape.wiki/images/thumb/e/e3/Bloodhound_pet.png/280px-Bloodhound_pet.png?1f705",
      "Bloodhound can sniff out treasure, randomly finding items for you. Can smell Uri from anywhere. Loves caskets and squirrels.",
      "Normal"
    ],
    kraken: [
      "https://oldschool.runescape.wiki/images/0/0e/Pet_kraken.png?88e42",
      "https://oldschool.runescape.wiki/images/8/84/Pet_kraken_chathead.png?64c9d",
      "https://oldschool.runescape.wiki/images/thumb/9/93/Kraken_pet.png/290px-Kraken_pet.png?a4955",
      "Kraken can surf, carrying you across water to new locations. Scientists still don't understand how the kraken walks. Can be taken underwater.",
      "Water"
    ],
    abyssalorphan: [
      "https://oldschool.runescape.wiki/images/2/2a/Abyssal_orphan.png?957a1",
      "https://oldschool.runescape.wiki/images/f/f2/Abyssal_orphan_chathead.png?1a49f",
      "https://oldschool.runescape.wiki/images/thumb/0/00/Scion.png/250px-Scion.png?2dd37",
      "Abyssal Orphan can teleport you, meaning you don't have to carry runes or teletabs in your inventory. Born in the death throes of an Abyssal Sire. You are his father.",
      "Dark"
    ]
  };
</script>

<style>
  img {
    height: 5vh;
  }
  .skillcape {
    float: right;
    height: 20vh;
  }

  .dex {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: center;
  }

  .bounce {
    position: relative;
    bottom: 0;

    height: 24px;
    width: 21px;
    animation:bounce 1s infinite; 
    -webkit-animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0% {
      bottom: 5px;
    }
    25%,
    75% {
      bottom: 15px;
    }
    50% {
      bottom: 20px;
    }
    100% {
      bottom: 0;
    }
  }
</style>

<svelte:head>
  <title>Pet Ranching</title>
</svelte:head>
<h1>01 April 2020 | Pet Ranching Skill</h1>
<img
  src="https://cdn.runescape.com/assets/img/external/oldschool/2020/newsposts/2020-04-01/RanchingSkillcape.png"
  alt="Ranching Skillcape"
  class="skillcape" />

<h3>
  <i>
    Pet Ranching is the act of collecting, training, and battling your pets. No
    longer will pets be mere cosmetic achievements!
  </i>
  -
  <a
    href="https://secure.runescape.com/m=news/dev-blog-pet-ranching?oldschool=1"
    target="_blank">
    OSRS Team
  </a>
</h3>

<h2>
  <strong>National DECKS</strong>
</h2>

<br />
{#if route === 'menu'}
  <div class="dex">

    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Heron'), (entry = links.heron))}>
      Heron
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/b/b4/Heron_pet.png/280px-Heron_pet.png?1a8a8"
        alt="heron" />
    </a>

    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Phoenix'), (entry = links.phoenix))}>
      Phoenix
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/0/0e/Phoenix_pet.png/250px-Phoenix_pet.png?f6800"
        alt="phoenix" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Tangleroot'), (entry = links.tangleroot))}>
      Tangleroot
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/2/2e/Tangleroot_pet.png/230px-Tangleroot_pet.png?6bb98"
        alt="tangleroot" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Baby Mole'), (entry = links.babymole))}>
      Baby Mole
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/c/c7/Baby_mole_pet.png/270px-Baby_mole_pet.png?ced53"
        alt="baby mole" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Hellpuppy'), (entry = links.hellpuppy))}>
      Hellpuppy
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/0/04/Hellpuppy_pet.png/280px-Hellpuppy_pet.png?b9d9d"
        alt="hellpuppy" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Kreearra Jr'), (entry = links.kreearajr))}>
      Kree'arra Jr
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/4/4d/Kree%27arra_Jr..png/270px-Kree%27arra_Jr..png?ce6c4"
        alt="kree'arra jr" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Bloodhound'), (entry = links.bloodhound))}>
      Bloodhound
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/e/e3/Bloodhound_pet.png/280px-Bloodhound_pet.png?1f705"
        alt="Bloodhound" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Kraken'), (entry = links.kraken))}>
      Kraken
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/9/93/Kraken_pet.png/290px-Kraken_pet.png?a4955"
        alt="Kraken" />
    </a>
    <a
      href="/"
      class="card"
      on:click|preventDefault={() => ((route = 'Abyssal Orphan'), (entry = links.abyssalorphan))}>
      Abyssal Orphan
      <br />
      <img
        src="https://oldschool.runescape.wiki/images/thumb/0/00/Scion.png/250px-Scion.png?2dd37"
        alt="abyssal orphan" />
    </a>
  </div>
{:else}
  <h2>
    {route}
    <img src={entry[0]} alt="icon" class="bounce" />
  </h2>
  <p>{entry[4]}</p>

  <p>
    <img src={entry[1]} alt="head" />
    {entry[3]}
  </p>
  <img src={entry[2]} alt="full image" style="float:right;" />
  <a href="/" class="card" on:click|preventDefault={() => (route = 'menu')}>
    Back to DECKS
  </a>
  <br />
{/if}

<br />
