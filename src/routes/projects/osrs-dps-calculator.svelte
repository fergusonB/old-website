<script>
  //variable initialization
  let attack = "99";
  let strength = "99";
  let defence = "99";
  let magic = "99";
  let ranged = "99";
  let hitpoints = "99";
  let prayer = "99";

  $: attackNum = Number(attack);
  $: strengthNum = Number(strength);
  $: defenceNum = Number(defence);
  $: magicNum = Number(magic);
  $: rangedNum = Number(ranged);

  $: attstr = attackNum + strengthNum;

  let attackPotSelected = 0;
  let strengthPotSelected = 0;
  let defencePotSelected = 0;
  let magicPotSelected = 0;
  let rangedPotSelected = 0;

  let attackPrayer = 0;
  let strengthPrayer = 0;
  let defencePrayer = 0;
  let magicPrayer = 0;
  let rangedPrayer = 0;

  $: modAttack = attackPotSelected + attackNum;
  $: modStrength = strengthPotSelected + strengthNum;
  $: modDefence = defencePotSelected + defenceNum;
  $: modMagic = magicPotSelected + magicNum;
  $: modRanged = rangedPotSelected + rangedNum;

  //

  //combat
  $: combatLevel =
    (Math.max(attstr, magicNum * 1.5, rangedNum * 1.5) * 1.3 +
      defenceNum +
      Number(hitpoints) +
      Math.floor(Number(prayer) * 0.5)) *
    0.25;
  //
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr) auto;
  }

  input {
    text-align: center;
  }
</style>

<h1>OSRS DPS Calculator</h1>
<div class="content">

  <p>
    <strong>Combat: {combatLevel.toFixed(1)}</strong>
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/attack.png"
      alt="attack icon"
      height="21px" />
    <input bind:value={attack} type="text" maxlength="2" size="2" />
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/strength.png"
      alt="strength icon"
      height="21px" />
    <input bind:value={strength} type="text" maxlength="2" size="2" />
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/defence.png"
      alt="defence icon"
      height="21px" />
    <input bind:value={defence} type="text" maxlength="2" size="2" />
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/magic.png"
      alt="magic icon"
      height="21px" />
    <input bind:value={magic} type="text" maxlength="2" size="2" />
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/ranged.png"
      alt="ranged icon"
      height="21px" />
    <input bind:value={ranged} type="text" maxlength="2" size="2" />
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/hitpoints.png"
      alt="hitpoints icon"
      height="21px" />
    <input bind:value={hitpoints} type="text" maxlength="2" size="2" />
    <br />
    <img
      src="assets/projects/osrs-dps-calculator/prayer.png"
      alt="prayer icon"
      height="21px" />
    <input bind:value={prayer} type="text" maxlength="2" size="2" />
  </p>

  <p>
    <strong>Potions</strong>
    <br />
    <select bind:value={attackPotSelected}>
      <option value={0}>None</option>
      <option value={3 + Math.floor(0.1 * attackNum)}>Attack</option>
      <option value={5 + Math.floor(0.15 * attackNum)}>S. Atk</option>
      <option value={6 + Math.floor(0.16 * attackNum)}>Ovl+</option>
      <option value={2 + Math.floor(0.2 * attackNum)}>ZamBrew</option>
    </select>

    <br />
    <select bind:value={strengthPotSelected}>
      <option value={0}>None</option>
      <option value={3 + Math.floor(0.1 * strengthNum)}>Strength</option>
      <option value={5 + Math.floor(0.15 * strengthNum)}>S. Str</option>
      <option value={6 + Math.floor(0.16 * strengthNum)}>Ovl+</option>
    </select>
    <br />
    <select bind:value={defencePotSelected}>
      <option value={0}>None</option>
      <option value={3 + Math.floor(0.1 * defenceNum)}>Defence</option>
      <option value={5 + Math.floor(0.15 * defenceNum)}>S. Def</option>
      <option value={6 + Math.floor(0.16 * defenceNum)}>Ovl+</option>
      <option value={2 + Math.floor(0.2 * defenceNum)}>SaraBrew</option>
    </select>
    /*/
    <br />
    <select bind:value={magicPotSelected}>
      <option value={0}>None</option>
      <option value={4}>Magic</option>
      <option value={0.1}>Imbued H</option>
      <option value={0.15}>S. Magic</option>
      <option value={0.16}>Overload</option>
    </select>

    <br />
    <select bind:value={rangedPotSelected}>
      <option value={0}>None</option>
      <option value={0.1}>Ranging</option>
      <option value={0.15}>S.Range</option>
      <option value={0.16}>Overload</option>
    </select>
  </p>
  <p>

    <strong>Prayers</strong>
    <br />
    <select bind:value={attackPrayer}>
      <option value={0}>None</option>
      <option value={0.05}>5%</option>
      <option value={0.1}>10%</option>
      <option value={0.15}>15%/Chiv</option>
      <option value={0.2}>20%/Piety</option>

    </select>

    <br />
    <select bind:value={strengthPrayer}>
      <option value={0}>None</option>
      <option value={0.05}>5%</option>
      <option value={0.1}>10%</option>
      <option value={0.15}>15%</option>
      <option value={0.18}>18%/Chiv</option>
      <option value={0.23}>23%/Piety</option>
    </select>
    <br />
    <select bind:value={defencePrayer}>
      <option value={0}>None</option>
      <option value={0.05}>5%</option>
      <option value={0.1}>10%</option>
      <option value={0.15}>15%</option>
      <option value={0.2}>20%/Chiv</option>
      <option value={0.25}>25%/P/R/A</option>
    </select>
    <br />
    <select bind:value={magicPrayer}>
      <option value={0}>None</option>
      <option value={0.05}>5%</option>
      <option value={0.1}>10%</option>
      <option value={0.15}>15%</option>
      <option value={0.25}>25%/Aug</option>
    </select>

    <br />
    <select bind:value={rangedPrayer}>
      <option value={0}>None</option>
      <option value={0.05}>5%</option>
      <option value={0.1}>10%</option>
      <option value={0.15}>15%</option>
      <option value={0.2}>20%/23%s/A</option>
    </select>

  </p>

  <p style="text-align:center;">
    <strong>Invisible Level</strong>
    <br />
    {modAttack}
    <br />
    {modStrength}
    <br />
    {modDefence}
    <br />
    {modMagic}
    <br />
    {modRanged}
  </p>

</div>
