<script>
  //variable initialization
  let attack = "99";
  let strength = "99";
  let defence = "99";
  let magic = "99";
  let ranged = "99";
  let hitpoints = "99";
  let prayer = "99";

  $: attstr = Number(attack) + Number(strength);

  let attackPotSelected;
  let strengthPotSelected;
  let defencePotSelected;
  let magicPotSelected;
  let rangedPotSelected;

  let attackPrayer;
  let strengthPrayer;
  let defencePrayer;
  let magicPrayer;
  let rangedPrayer;

  $: modAttack = attackPotSelected
    ? Number(attack) * attackPotSelected + Number(attack)
    : Number(attack);
  $: modStrength = strengthPotSelected
    ? Number(strength) * strengthPotSelected + Number(strength)
    : Number(strength);
  $: modDefence = defencePotSelected
    ? Number(defence) * defencePotSelected + Number(defence)
    : Number(defence);
  $: modMagic = magicPotSelected
    ? Number(magic) * magicPotSelected + Number(magic)
    : Number(magic);
  $: modRanged = rangedPotSelected
    ? Number(ranged) * rangedPotSelected + Number(ranged)
    : Number(ranged);

  //

  //combat
  $: combatLevel =
    (Math.max(attstr, Number(magic) * 1.5, Number(ranged) * 1.5) * 1.3 +
      Number(defence) +
      Number(hitpoints) +
      Math.floor(Number(prayer) * 0.5)) *
    0.25;
  //
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
  }

  input {
    text-align: center;
    float: left;
  }
</style>

<h1>OSRS DPS Calculator</h1>
<div class="content">

  <p>
    <strong>Combat: {combatLevel.toFixed(1)}</strong>
    <br />
    Attack
    <input bind:value={attack} type="text" maxlength="2" size="2" />
    <br />
    Strength
    <input bind:value={strength} type="text" maxlength="2" size="2" />
    <br />
    Defence
    <input bind:value={defence} type="text" maxlength="2" size="2" />
    <br />
    Magic
    <input bind:value={magic} type="text" maxlength="2" size="2" />
    <br />
    Ranged
    <input bind:value={ranged} type="text" maxlength="2" size="2" />
    <br />
    Hitpoints
    <input bind:value={hitpoints} type="text" maxlength="2" size="2" />
    <br />
    Prayer
    <input bind:value={prayer} type="text" maxlength="2" size="2" />
  </p>

  <p>
    <strong>Potions</strong>
    <br />
    <select bind:value={attackPotSelected}>
      <option>None</option>
      <option value={0.1}>Attack</option>
      <option value={0.15}>S. Atk</option>
      <option value={0.16}>Ovl/Zam</option>
    </select>

    <br />
    <select bind:value={strengthPotSelected}>
      <option>None</option>
      <option value={0.1}>Strength</option>
      <option value={0.15}>S. Str</option>
      <option value={0.16}>Overload</option>
    </select>
    <br />
    <select bind:value={defencePotSelected}>
      <option>None</option>
      <option value={0.1}>Defence</option>
      <option value={0.15}>S. Def</option>
      <option value={0.16}>Overload</option>
      <option value={0.2}>SaraBrew</option>
    </select>
    <br />
    <select bind:value={magicPotSelected}>
      <option>None</option>
      <option value={4}>Magic</option>
      <option value={0.1}>Imbued H</option>
      <option value={0.15}>S. Magic</option>
      <option value={0.16}>Overload</option>
    </select>

    <br />
    <select bind:value={rangedPotSelected}>
      <option>None</option>
      <option value={0.1}>Ranging</option>
      <option value={0.15}>S.Range</option>
      <option value={0.16}>Overload</option>
    </select>
  </p>
  <p>

    <strong>Prayers</strong>
    <br />
    <select bind:value={attackPotSelected}>
      <option>None</option>
      <option value={0.1}>Attack</option>
      <option value={0.15}>Super Attack</option>
      <option value={0.16}>Overload / Zamorak</option>
    </select>

    <br />
    <select bind:value={strengthPotSelected}>
      <option>None</option>
      <option value={0.1}>Strength</option>
      <option value={0.15}>Super Strength</option>
      <option value={0.16}>Overload</option>
    </select>
    <br />
    <select bind:value={defencePotSelected}>
      <option>None</option>
      <option value={0.1}>Defence</option>
      <option value={0.15}>Super Defence</option>
      <option value={0.16}>Overload</option>
      <option value={0.2}>Saradomin Brew</option>
    </select>
    <br />
    <select bind:value={magicPotSelected}>
      <option>None</option>
      <option value={4}>Magic</option>
      <option value={0.1}>Imbued Heart</option>
      <option value={0.15}>Super Magic</option>
      <option value={0.16}>Overload</option>
    </select>

    <br />
    <select bind:value={rangedPotSelected}>
      <option>None</option>
      <option value={0.1}>Ranging</option>
      <option value={0.15}>Super Ranging</option>
      <option value={0.16}>Overload</option>
    </select>

  </p>

  <p>
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
