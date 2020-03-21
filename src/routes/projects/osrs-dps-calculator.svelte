<script>
  // BLOCK 1
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

  let attackPotSelected = 0;
  let strengthPotSelected = 0;
  let defencePotSelected = 0;
  let magicPotSelected = 0;
  let rangedPotSelected = 0;

  let attackPrayer = 1;
  let strengthPrayer = 1;
  let defencePrayer = 1;
  let magicPrayer = 1;
  let rangedPrayer = 1;

  //calculate final invisible levels

  $: modAttack = Math.floor((attackPotSelected + attackNum) * attackPrayer);
  $: modStrength = Math.floor(
    (strengthPotSelected + strengthNum) * strengthPrayer
  );
  $: modDefence = Math.floor((defencePotSelected + defenceNum) * defencePrayer);
  $: modMagic = Math.floor((magicPotSelected + magicNum) * magicPrayer);
  $: modRanged = Math.floor((rangedPotSelected + rangedNum) * rangedPrayer);

  //combat
  $: combatLevel =
    (Math.max(attackNum + strengthNum, magicNum * 1.5, rangedNum * 1.5) * 1.3 +
      defenceNum +
      Number(hitpoints) +
      Math.floor(Number(prayer) * 0.5)) *
    0.25;
  //END BLOCK 1
  //block2

  //initialize variables for melee max hit calculation
  let strengthBonus = 0;
  let combatStyle = 0;

  let attackBonus = 0;
  let otherBonus = 1;

  let attackStyle = 0;

  $: attackStyleStrength = attackStyle === 0 ? 3 : attackStyle === 1 ? 1 : 0;
  $: attackStyleAttack = attackStyle === 2 ? 3 : attackStyle === 1 ? 1 : 0;
  $: attackStyleDefence = attackStyle === 3 ? 3 : attackStyle === 1 ? 1 : 0;
  //melee
  $: effectiveStrength =
    Math.floor(modStrength * otherBonus) + attackStyleStrength;
  $: baseDamage =
    1.3 +
    effectiveStrength / 10 +
    strengthBonus / 80 +
    (effectiveStrength * strengthBonus) / 640;

  //atk

  $: effectiveAttack = modAttack + attackStyleAttack + 8;
  $: maxAttackRoll =
    Math.floor(effectiveAttack * (attackBonus + 64)) * otherBonus;
  //ranged
  let rangedStrength = 0;
  let rangedStyleBonus = 0;
  let rangedOtherBonus = 1;
  let rangedAttackBonus = 0;

  $: rangedEffectiveStrength =
    Math.floor(modRanged * rangedOtherBonus) + rangedStyleBonus;
  $: rangedBaseDamage =
    1.3 +
    rangedEffectiveStrength / 10 +
    rangedStrength / 80 +
    (rangedEffectiveStrength * rangedStrength) / 640;

  //enemy defence
  let enemyDefence = 1;
  let enemyMagic = 1;
  let enemyTypeResistance = 0;

  $: enemyEffectiveDefence = enemyDefence + 9;
  $: maxDefenceRoll = Math.floor(
    enemyEffectiveDefence * (enemyTypeResistance + 64)
  );

  //accuracy calc

  $: accuracyMelee =
    maxAttackRoll > maxDefenceRoll
      ? 1 - (maxDefenceRoll + 2) / (2 * (maxAttackRoll + 1))
      : maxAttackRoll / (2 * maxDefenceRoll + 1);

  //dps calc
  let attackSpeed = 2.4;
  $: dpsMelee = (accuracyMelee * (Math.floor(baseDamage) / 2)) / attackSpeed;
</script>

<style>
  .section {
    display: grid;
    grid-template-columns: repeat(4, 1fr) auto;
  }

  input,
  strong {
    text-align: center;
  }
</style>

<svelte:head>
  <title>OSRS DPS Calculator</title>
</svelte:head>

<h1>OSRS DPS Calculator</h1>
<div class="section">

  <p>
    <strong>{combatLevel.toFixed(1)}</strong>
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

    <br />
    <select bind:value={magicPotSelected}>
      <option value={0}>None</option>
      <option value={4}>Magic</option>
      <option value={1 + Math.floor(0.1 * magicNum)}>Imbued H</option>
      <option value={5 + Math.floor(0.15 * magicNum)}>S. Magic</option>
      <option value={6 + Math.floor(0.16 * magicNum)}>Ovl+</option>
    </select>

    <br />
    <select bind:value={rangedPotSelected}>
      <option value={0}>None</option>
      <option value={4 + Math.floor(0.1 * rangedNum)}>Ranging</option>
      <option value={5 + Math.floor(0.15 * rangedNum)}>S.Range</option>
      <option value={6 + Math.floor(0.16 * rangedNum)}>Ovl+</option>
    </select>
  </p>
  <p>

    <strong>Prayers</strong>
    <br />
    <select bind:value={attackPrayer}>
      <option value={1}>None</option>
      <option value={1.05}>5%</option>
      <option value={1.1}>10%</option>
      <option value={1.15}>15%/Chiv</option>
      <option value={1.2}>20%/Piety</option>

    </select>

    <br />
    <select bind:value={strengthPrayer}>
      <option value={1}>None</option>
      <option value={1.05}>5%</option>
      <option value={1.1}>10%</option>
      <option value={1.15}>15%</option>
      <option value={1.18}>18%/Chiv</option>
      <option value={1.23}>23%/Piety</option>
    </select>
    <br />
    <select bind:value={defencePrayer}>
      <option value={1}>None</option>
      <option value={1.05}>5%</option>
      <option value={1.1}>10%</option>
      <option value={1.15}>15%</option>
      <option value={1.2}>20%/Chiv</option>
      <option value={1.25}>25%/P/R/A</option>
    </select>
    <br />
    <select bind:value={magicPrayer}>
      <option value={1}>None</option>
      <option value={1.05}>5%</option>
      <option value={1.1}>10%</option>
      <option value={1.15}>15%</option>
      <option value={1.25}>25%/Rig</option>
    </select>

    <br />
    <select bind:value={rangedPrayer}>
      <option value={1}>None</option>
      <option value={1.05}>5%</option>
      <option value={1.1}>10%</option>
      <option value={1.15}>15%</option>
      <option value={1.2}>20%/23%s/A</option>
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
<div class="section">
  <p>
    <strong>Combat Style</strong>
    <br />
    <select bind:value={combatStyle}>
      <option value={0}>Melee</option>
      <option value={1}>Magic</option>
      <option value={2}>Ranged</option>
    </select>
    <br />
    <br />
    {#if combatStyle === 0}
      <select bind:value={attackStyle}>
        <option value={0}>Aggr</option>
        <option value={1}>Cont</option>
        <option value={2}>Acc</option>
        <option value={3}>Def</option>
      </select>
      <br />
      Attack Speed:
      <label>
        <input
          type="number"
          bind:value={attackSpeed}
          min="1.8"
          max="5.4"
          step="0.6" />
        <input
          type="range"
          bind:value={attackSpeed}
          min="1.8"
          max="5.4"
          step="0.6" />
      </label>
      {Math.floor(attackSpeed / 0.6)} Ticks
    {:else if combatStyle === 1}
      magic options future
    {:else}
      <select bind:value={rangedStyleBonus}>
        <option value={0}>Rapid</option>
        <option value={3}>Accurate</option>
        <option value={0}>LongRange</option>
      </select>
    {/if}

  </p>
  <p>
    {#if combatStyle === 0}
      <strong>Attack Bonus</strong>
      <br />
      <input type="number" bind:value={attackBonus} />
      <br />
      Attack Roll: {maxAttackRoll}
    {:else if combatStyle === 1}
      <strong>Magic Attack</strong>
      <br />
      Enemy Magic Level:
      <input type="number" bind:value={enemyMagic} />
      <br />
    {:else}
      <strong>Ranged Attack</strong>
      <br />
      <input type="number" bind:value={rangedAttackBonus} />
    {/if}
    <br />
    Enemy Defence Level:
    <input type="number" bind:value={enemyDefence} />
    <br />
    Enemy Armor vs Attack Style
    <input type="number" bind:value={enemyTypeResistance} />
    Defense Roll: {maxDefenceRoll}
    <br />
    Accuracy: {(accuracyMelee * 100).toFixed(2)}%
  </p>
  <p>

    {#if combatStyle === 0}
      <strong>Strength Bonus</strong>
      <br />
      <input type="number" bind:value={strengthBonus} />
      <br />

      <select bind:value={otherBonus}>
        <option value={1}>Other Boosts</option>
        <option value={1.1}>Void Melee</option>
        <option value={7 / 6}>Slayer Helm</option>
        <option value={1.15}>Salve</option>
        <option value={1.2}>Salve e</option>
      </select>
      <br />
      Max Hit: {Math.floor(baseDamage)}
    {:else if combatStyle === 1}
      <strong>Magic Str</strong>
      <br />
    {:else}
      <strong>Range Str</strong>
      <br />
      <input type="number" bind:value={rangedStrength} />

      <br />
      <select bind:value={rangedOtherBonus}>
        <option value={1}>Other Boosts</option>
        <option value={1.1}>Void</option>
        <option value={1.125}>Elite Void</option>
        <option value={1.2}>Salve e</option>
      </select>
      <br />
      Ranged Max Hit: {Math.floor(rangedBaseDamage)}
    {/if}

  </p>
  <p>
    <strong>DPS</strong>
    <br />
    {#if combatStyle === 0}{dpsMelee.toFixed(4)}{/if}

  </p>
</div>
