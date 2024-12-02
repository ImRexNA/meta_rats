document.addEventListener('DOMContentLoaded', () => {
    const classOptions = document.querySelectorAll('.classContainer');
    const classTableBody = document.querySelector('#classTable tbody');
    const portraitImage = document.querySelector('.overlay-image.portrait');
    const perkMenu = document.createElement('div');
    const skillMenu = document.createElement('div'); // Create skill menu
    perkMenu.classList.add('perk-menu', 'hidden');
    skillMenu.classList.add('skill-menu', 'hidden'); // Add class for skill menu
    document.body.appendChild(perkMenu);
    document.body.appendChild(skillMenu); // Append skill menu to body
    const perkSlots = document.querySelectorAll('.overlay-image[data-perk-slot]');
    const skillSlots = document.querySelectorAll('.overlay-image[data-skill-slot]'); // Skill slots
    let activePerkSlot = null;
    let activeSkillSlot = null; // For active skill slot
    let selectedClass = 'barbarian'; // Default selected class

    // Set to store selected perks and skills
    const selectedPerks = new Set();
    const selectedSkills = new Set(); // Track selected skills

    // Class data for stats and portraits
    const classData = {
        barbarian: {
            stats: [
                { stat: 'Strength', value: '20' },
                { stat: 'Vigor', value: '25' },
                { stat: 'Agility', value: '13' },
                { stat: 'Dexterity', value: '12' },
                { stat: 'Will', value: '18' },
                { stat: 'Knowledge', value: '5' },
                { stat: 'Resourcefulness', value: '12' },
                { stat: 'Health', value: '133' }
            ],
            portrait: 'img/portrait/barbarianPortrait.png'
        },
        bard: {
            stats: [
                { stat: 'Strength', value: '13' },
                { stat: 'Vigor', value: '13' },
                { stat: 'Agility', value: '13' },
                { stat: 'Dexterity', value: '20' },
                { stat: 'Will', value: '11' },
                { stat: 'Knowledge', value: '20' },
                { stat: 'Resourcefulness', value: '15' },
                { stat: 'Health', value: '111' }
            ],
            portrait: 'img/portrait/bardPortrait.png'
        },
        cleric: {
            stats: [
                { stat: 'Strength', value: '11' },
                { stat: 'Vigor', value: '13' },
                { stat: 'Agility', value: '12' },
                { stat: 'Dexterity', value: '14' },
                { stat: 'Will', value: '23' },
                { stat: 'Knowledge', value: '20' },
                { stat: 'Resourcefulness', value: '12' },
                { stat: 'Health', value: '110' },
                { stat: 'Memory', value: '14' }
            ],
            portrait: 'img/portrait/clericPortrait.png'
        },
        druid: {
            stats: [
                { stat: 'Strength', value: '12' },
                { stat: 'Vigor', value: '13' },
                { stat: 'Agility', value: '12' },
                { stat: 'Dexterity', value: '12' },
                { stat: 'Will', value: '18' },
                { stat: 'Knowledge', value: '20' },
                { stat: 'Resourcefulness', value: '18' },
                { stat: 'Health', value: '111' },
                { stat: 'Memory', value: '14' }
            ],
            portrait: 'img/portrait/druidPortrait.png'
        },
        fighter: {
            stats: [
                { stat: 'Strength', value: '15' },
                { stat: 'Vigor', value: '15' },
                { stat: 'Agility', value: '15' },
                { stat: 'Dexterity', value: '15' },
                { stat: 'Will', value: '15' },
                { stat: 'Knowledge', value: '15' },
                { stat: 'Resourcefulness', value: '15' },
                { stat: 'Health', value: '115' }
            ],
            portrait: 'img/portrait/fighterPortrait.png'
        },
        ranger: {
            stats: [
                { stat: 'Strength', value: '10' },
                { stat: 'Vigor', value: '10' },
                { stat: 'Agility', value: '20' },
                { stat: 'Dexterity', value: '18' },
                { stat: 'Will', value: '10' },
                { stat: 'Knowledge', value: '12' },
                { stat: 'Resourcefulness', value: '25' },
                { stat: 'Health', value: '105' }
            ],
            portrait: 'img/portrait/rangerPortrait.png'
        },
        rogue: {
            stats: [
                { stat: 'Strength', value: '9' },
                { stat: 'Vigor', value: '10' },
                { stat: 'Agility', value: '21' },
                { stat: 'Dexterity', value: '25' },
                { stat: 'Will', value: '10' },
                { stat: 'Knowledge', value: '10' },
                { stat: 'Resourcefulness', value: '20' },
                { stat: 'Health', value: '105' }
            ],
            portrait: 'img/portrait/roguePortrait.png'
        },
        warlock: {
            stats: [
                { stat: 'Strength', value: '11' },
                { stat: 'Vigor', value: '14' },
                { stat: 'Agility', value: '14' },
                { stat: 'Dexterity', value: '15' },
                { stat: 'Will', value: '22' },
                { stat: 'Knowledge', value: '15' },
                { stat: 'Resourcefulness', value: '14' },
                { stat: 'Health', value: '112' },
                { stat: 'Memory', value: '9' }
            ],
            portrait: 'img/portrait/warlockPortrait.png'
        },
        wizard: {
            stats: [
                { stat: 'Strength', value: '6' },
                { stat: 'Vigor', value: '7' },
                { stat: 'Agility', value: '15' },
                { stat: 'Dexterity', value: '17' },
                { stat: 'Will', value: '20' },
                { stat: 'Knowledge', value: '25' },
                { stat: 'Resourcefulness', value: '15' },
                { stat: 'Health', value: '96' },
                { stat: 'Memory', value: '19' }
            ],
            portrait: 'img/portrait/wizardPortrait.png'
        }
        // ... (other classes remain unchanged)
    };

    // Perk data structure
    const perksData = [
        {
            perk: 'none',
            imgSrc: 'img/inventory/perkSlot.webp',
            alt: 'No Perk',
            class: 'all'
        },
        //Barbarian
        {
            perk: 'Perk_AxeSpecialization',
            imgSrc: 'img/perks/barbarian/Perk_AxeSpecialization.png',
            alt: 'Perk Axe Specialization',
            class: 'barbarian',
            name: 'Axe Specialization',
            description: 'While using axes, gain 3 Physical Buff Weapon Damage.'
        },
        {
            perk: 'Perk_Berserker',
            imgSrc: 'img/perks/barbarian/Perk_Berserker.png', 
            alt: 'Perk Berserker',
            class: 'barbarian', 
            name: 'Berserker',
            description: 'Gain 0 to 33.3% Physical Power Bonus when missing 0% to 100% of your max health.'
        },
        {
            perk: 'Perk_Carnage',
            imgSrc: 'img/perks/barbarian/Perk_Carnage.png', 
            alt: 'Perk Carnage',
            class: 'barbarian', 
            name: 'Carnage',
            description: 'When a target is killed, gain 75 Armor Rating for 7s.'
        },
        {
            perk: 'Perk_Executioner',
            imgSrc: 'img/perks/barbarian/Perk_Executioner.png', 
            alt: 'Perk Executioner',
            class: 'barbarian', 
            name: 'Executioner',
            description: 'While using axes, gain 10% Physical Headshot Hit Location Bonus.'
        },
        {
            perk: 'Perk_IronWill',
            imgSrc: 'img/perks/barbarian/Perk_IronWill.png', 
            alt: 'Perk IronWill',
            class: 'barbarian', 
            name: 'Iron Will',
            description: 'Gain 60 Magical Resistance and immunity to knockback effects.'
        },
        {
            perk: 'Perk_MoraleBoost',
            imgSrc: 'img/perks/barbarian/Perk_MoraleBoost.png', 
            alt: 'Perk Morale Boost',
            class: 'barbarian', 
            name: 'Morale Boost',
            description: 'Receive 12% Percent Max Health Healing after killing a player.'
        },
        {
            perk: 'Perk_PotionChugger',
            imgSrc: 'img/perks/barbarian/Perk_PotionChugger.png', 
            alt: 'Perk Potion Chugger',
            class: 'barbarian', 
            name: 'Potion Chugger',
            description: 'Gain 1.2x healing and 1.2x shielding potency from all drinks, while reducing the duration to 0.5x the base amount. Does not affect Luck Potions.'
        },
        {
            perk: 'Perk_Savage',
            imgSrc: 'img/perks/barbarian/Perk_Savage.png', 
            alt: 'Perk Savage',
            class: 'barbarian', 
            name: 'Savage',
            description: 'While not wearing any chest armor, gain 10% Physical Power Bonus.'
        },
        {
            perk: 'Perk_Crush',
            imgSrc: 'img/perks/barbarian/Perk_Crush.png', 
            alt: 'Perk Crush',
            class: 'barbarian', 
            name: 'Crush',
            description: 'Gain the ability to destroy unreinforced doors and containers. Also gain 1 Impact Power on your attacks with two-handed weapons to defeat blocks and parries better.'
        },
        {
            perk: 'Perk_Robust',
            imgSrc: 'img/perks/barbarian/Perk_Robust.png', 
            alt: 'Perk Robust',
            class: 'barbarian', 
            name: 'Robust',
            description: 'Gain 15% Max Health Bonus.'
        },
        {
            perk: 'Perk_TreacherousLungs',
            imgSrc: 'img/perks/barbarian/Perk_TreacherousLungs.png', 
            alt: 'Perk Treacherous Lungs',
            class: 'barbarian', 
            name: 'Treacherous Lungs',
            description: 'Increases the duration of all shouting abilities (War Cry, Rage, Savage Roar) to 1.3x of the base amount.'
        },
        {
            perk: 'Perk_Two-Hander',
            imgSrc: 'img/perks/barbarian/Perk_Two-Hander.png', 
            alt: 'Perk Two-Hander',
            class: 'barbarian', 
            name: 'Two-Hander',
            description: 'When attacking with a two-handed weapon, gain 5% Physical Power Bonus.'
        },
        //Bard
        {
            perk: 'Perk_CharismaticPerformance',
            imgSrc: 'img/perks/bard/Perk_CharismaticPerformance.png', 
            alt: 'Perk Charismatic Performance',
            class: 'bard', 
            name: 'Charismatic Performance',
            description: "Upgrades a 'good' performance into a 'perfect' performance."
        },
        {
            perk: 'Perk_DancingFeet',
            imgSrc: 'img/perks/bard/Perk_DancingFeet.png', 
            alt: 'Perk Dancing Feet',
            class: 'bard', 
            name: 'Dancing Feet',
            description: 'Gain 10 Move Speed Add when holding an instrument.'
        },
        {
            perk: 'Perk_Fermata',
            imgSrc: 'img/perks/bard/Perk_Fermata.png', 
            alt: 'Perk Fermata',
            class: 'bard', 
            name: 'Fermata',
            description: 'Gain 5 Resourcefulness.'
        },
        {
            perk: 'Perk_JollyTime',
            imgSrc: 'img/perks/bard/Perk_JollyTime.png', 
            alt: 'Perk Jolly Time',
            class: 'bard', 
            name: 'Jolly Time',
            description: 'Drinking Ale recovers 5 Physical Base Healing (100% Scaling) and grants 10 Move Speed Add when drunk.'
        },
        {
            perk: 'Perk_LoreMastery',
            imgSrc: 'img/perks/bard/Perk_LoreMastery.png', 
            alt: 'Perk Lore Mastery',
            class: 'bard', 
            name: 'Lore Mastery',
            description: 'A high level of understanding of objects grants you 25% Regular Interaction Speed.'
        },
        {
            perk: 'Perk_MelodicProtection',
            imgSrc: 'img/perks/bard/Perk_MelodicProtection.png', 
            alt: 'Perk Melodic Protection',
            class: 'bard', 
            name: 'Melodic Protection',
            description: 'While playing songs, gain 30% Physical Damage Reduction.'
        },
        {
            perk: 'Perk_RapierMastery',
            imgSrc: 'img/perks/bard/Perk_RapierMastery.png', 
            alt: 'Perk Rapier Mastery',
            class: 'bard', 
            name: 'Rapier Mastery',
            description: 'When a rapier is equipped, gain 2 Physical Buff Weapon Damage and 5% Action Speed. Unlike many other Mastery perks, these bonuses also apply to any off-hand weapon you may have equipped.'
        },
        {
            perk: 'Perk_ReinforcedInstruments',
            imgSrc: 'img/perks/bard/Perk_ReinforcedInstruments.png', 
            alt: 'Perk Reinforced Instruments',
            class: 'bard', 
            name: 'Reinforced Instruments',
            description: 'Gain 50% Physical Power Bonus when attacking with a musical instrument as a weapon. (This does not apply to Songs.)'
        },
        {
            perk: 'Perk_StoryTeller',
            imgSrc: 'img/perks/bard/Perk_StoryTeller.png', 
            alt: 'Perk Story Teller',
            class: 'bard', 
            name: 'Story Teller',
            description: 'Give all party members within 6m 3 Will and 3 Knowledge.'
        },
        {
            perk: 'Perk_SuperiorDexterity',
            imgSrc: 'img/perks/bard/Perk_SuperiorDexterity.png', 
            alt: 'Perk Superior Dexterity',
            class: 'bard', 
            name: 'Superior Dexterity',
            description: 'Gain 50% Item Equip Speed Bonus when switching between weapons/utility items.'
        },
        {
            perk: 'Perk_WanderersLuck',
            imgSrc: 'img/perks/bard/Perk_WanderersLuck.png', 
            alt: "Perk Wanderer's Luck",
            class: 'bard', 
            name: "Wanderer's Luck",
            description: 'Increases the chances of finding high-quality items when opening treasure chests by gaining 50 Luck.'
        },
        {
            perk: 'Perk_WarSong',
            imgSrc: 'img/perks/bard/Perk_WarSong.png', 
            alt: 'Perk War Song',
            class: 'bard', 
            name: 'War Song',
            description: 'Successfully performed songs grant 3 Physical Buff Weapon Damage to yourself and allies within 6m for 6s.'
        },
        //Cleric
        {
            perk: 'Perk_AdvancedHealer',
            imgSrc: 'img/perks/cleric/Perk_AdvancedHealer.png', 
            alt: 'Perk Advanced Healer',
            class: 'cleric', 
            name: 'Advanced Healer',
            description: 'Gain 5 Outgoing Magical Healing Add.'
        },
        {
            perk: 'Perk_BluntWeaponMastery',
            imgSrc: 'img/perks/cleric/Perk_BluntWeaponMastery.png', 
            alt: 'Perk Blunt Weapon Mastery',
            class: 'cleric', 
            name: 'Blunt Weapon Mastery',
            description: 'While using a Mace, gain 10% Physical Power Bonus. Despite the in-game description, this does not apply to the Magic Staff or Ceremonial Staff.'
        },
        {
            perk: 'Perk_Brewmaster',
            imgSrc: 'img/perks/cleric/Perk_Brewmaster.png', 
            alt: 'Perk Brewmaster',
            class: 'cleric', 
            name: 'Brewmaster',
            description: 'When you drink alcohol, you no longer exhibit the detrimental drunk effects and gain 10 Strength.'
        },
        {
            perk: 'Perk_Faithfulness',
            imgSrc: 'img/perks/cleric/Perk_Faithfulness.png', 
            alt: 'Perk Faithfulness',
            class: 'cleric', 
            name: 'Faithfulness',
            description: 'Gain 15% Divine Divine Power Bonus. When a Divine attack is successful, cause the target to suffer -15% Move Speed Bonus for 1.5s. 3s cooldown.'
        },
        {
            perk: 'Perk_HolyAura',
            imgSrc: 'img/perks/cleric/Perk_HolyAura.png', 
            alt: 'Perk Holy Aura',
            class: 'cleric', 
            name: 'Holy Aura',
            description: 'Gain 15 Armor Rating and 15 Magical Resistance. This effects both yourself and allies within 6m.'
        },
        {
            perk: 'Perk_HolyWater',
            imgSrc: 'img/perks/cleric/Perk_HolyWater.png', 
            alt: 'Perk Holy Water',
            class: 'cleric', 
            name: 'Holy Water',
            description: 'Drinking any of the drinks will eliminate all removable curse effects.'
        },
        {
            perk: 'Perk_Kindness',
            imgSrc: 'img/perks/cleric/Perk_Kindness.png', 
            alt: 'Perk Kindness',
            class: 'cleric', 
            name: 'Kindness',
            description: 'Heal yourself for 15% of the spell total heal amount when healing another character.'
        },
        {
            perk: 'Perk_OverHealing',
            imgSrc: 'img/perks/cleric/Perk_OverHealing.png', 
            alt: 'Perk Over Healing',
            class: 'cleric', 
            name: 'Over Healing',
            description: 'If the target would be healed for more than their missing health, the extra magical healing will be received as bonus health up to 20% of the target\'s maximum health. This bonus health decays at -1% Percent Max Health Healing per second.'
        },
        {
            perk: 'Perk_Perseverance',
            imgSrc: 'img/perks/cleric/Perk_Perseverance.png', 
            alt: 'Perk Perseverance',
            class: 'cleric', 
            name: 'Perseverance',
            description: 'Reduces all incoming damage by 2 Physical Absolute Reduction/2 Magical Absolute Reduction. Cannot reduce below 1.'
        },
        {
            perk: 'Perk_ProtectionFromEvil',
            imgSrc: 'img/perks/cleric/Perk_ProtectionFromEvil.png', 
            alt: 'Perk Protection from Evil',
            class: 'cleric', 
            name: 'Protection from Evil',
            description: 'Gain -30% Debuff Duration Bonus.'
        },
        {
            perk: 'Perk_Requiem',
            imgSrc: 'img/perks/cleric/Perk_Requiem.png', 
            alt: 'Perk Requiem',
            class: 'cleric', 
            name: 'Requiem',
            description: 'Resurrecting an ally revives them with -50% HP lost. When reviving an ally at an Altar of Sacrifice, you do not sacrifice any of your own health.'
        },
        {
            perk: 'Perk_UndeadSlaying',
            imgSrc: 'img/perks/cleric/Perk_UndeadSlaying.png', 
            alt: 'Perk Undead Slaying',
            class: 'cleric', 
            name: 'Undead Slaying',
            description: 'Gain 20% Undead Race Damage Bonus.'
        },
        //Druid
        {
            perk: 'Perk_Dreamwalk',
            imgSrc: 'img/perks/druid/Perk_Dreamwalk.png', 
            alt: 'Perk Dreamwalk',
            class: 'druid', 
            name: 'Dreamwalk',
            description: 'When you take damage while in human form, gain 5 Magical Power for 3s and become spiritual, phasing through targets and becoming invulnerable, but being unable to attack and use skills while still able to cast spells. 18s Cooldown in the form of a Debuff.'
        },
        {
            perk: 'Perk_EnhancedWildness',
            imgSrc: 'img/perks/druid/Perk_EnhancedWildness.png', 
            alt: 'Perk Enhanced Wildness',
            class: 'druid', 
            name: 'Enhanced Wildness',
            description: 'While in animal form, gain 5 Move Speed Add and 10 Armor Rating.'
        },
        {
            perk: 'Perk_ForceOfNature',
            imgSrc: 'img/perks/druid/Perk_ForceOfNature.png', 
            alt: 'Perk Force of Nature',
            class: 'druid', 
            name: 'Force of Nature',
            description: 'When Druid heals anyone (including self) and they are not at maximum health, they gain 3 Physical Power for 3s on each tick of received healing.'
        },
        {
            perk: 'Perk_HerbalSensing',
            imgSrc: 'img/perks/druid/Perk_HerbalSensing.png', 
            alt: 'Perk Herbal Sensing',
            class: 'druid', 
            name: 'Herbal Sensing',
            description: 'Detect nearby herbs. 6m radius.'
        },
        {
            perk: 'Perk_NaturalHealing',
            imgSrc: 'img/perks/druid/Perk_NaturalHealing.png', 
            alt: 'Perk Natural Healing',
            class: 'druid', 
            name: 'Natural Healing',
            description: 'Heal yourself and nearby allies 1 Magical Base Healing (10% Scaling) every 3s. 6m radius.'
        },
        {
            perk: 'Perk_ShapeshiftMastery',
            imgSrc: 'img/perks/druid/Perk_ShapeshiftMastery.png', 
            alt: 'Perk Shapeshift Mastery',
            class: 'druid', 
            name: 'Shapeshift Mastery',
            description: 'Allows you to change Shapeshift form instantly, bypassing cast time entirely.'
        },
        {
            perk: 'Perk_SpiritBond',
            imgSrc: 'img/perks/druid/Perk_SpiritBond.png', 
            alt: 'Perk Spirit Bond',
            class: 'druid', 
            name: 'Spirit Bond',
            description: 'You transfer 15% of Damage received by a party member within 6m to yourself, up to 20 damage per instance. 1s Cooldown in the form of a Debuff.'
        },
        {
            perk: 'Perk_SpiritMagicMastery',
            imgSrc: 'img/perks/druid/Perk_SpiritMagicMastery.png', 
            alt: 'Perk Spirit Magic Mastery',
            class: 'druid', 
            name: 'Spirit Magic Mastery',
            description: 'When you cast Spirit Spirit magic, gain 10 Magical Power.'
        },
        {
            perk: 'Perk_SunAndMoon',
            imgSrc: 'img/perks/druid/Perk_SunAndMoon.png', 
            alt: 'Perk Sun and Moon',
            class: 'druid', 
            name: 'Sun and Moon',
            description: 'Nearby allies and self gain 3 Vigor and 5 Magical Power. 6m radius.'
        },
        {
            perk: 'Perk_ThornCoat',
            imgSrc: 'img/perks/druid/Perk_ThornCoat.png', 
            alt: 'Perk Thorn Coat',
            class: 'druid', 
            name: 'Thorn Coat',
            description: 'When melee attacked, return 5 True Physical Base Damage to the attacker.'
        },
        //Fighter
        {
            perk: 'Perk_AdrenalineSpike',
            imgSrc: 'img/perks/fighter/Perk_AdrenalineSpike.png', 
            alt: 'Perk Adrenaline Spike',
            class: 'fighter', 
            name: 'Adrenaline Spike',
            description: 'When your health goes below 40%, gain 15% Action Speed for 12s. 60s cooldown.'
        },
        {
            perk: 'Perk_Barricade',
            imgSrc: 'img/perks/fighter/Perk_Barricade.png', 
            alt: 'Perk Barricade',
            class: 'fighter', 
            name: 'Barricade',
            description: 'While in defensive stance, gain 50 Armor Rating and 50 Magical Resistance.'
        },
        {
            perk: 'Perk_ComboAttack',
            imgSrc: 'img/perks/fighter/Perk_ComboAttack.png', 
            alt: 'Perk Combo Attack',
            class: 'fighter', 
            name: 'Combo Attack',
            description: 'When you successfully melee attack consecutively within 2s, gain 10% Physical Power Bonus for 2s. (Needs 2 hits to initially proc and applies on the 3rd hit and beyond.)'
        },
        {
            perk: 'Perk_Counterattack',
            imgSrc: 'img/perks/fighter/Perk_Counterattack.png', 
            alt: 'Perk Counterattack',
            class: 'fighter', 
            name: 'Counterattack',
            description: 'When you successfully block an attack, gain 10% Move Speed Bonus and 10% Action Speed for 3s.'
        },
        {
            perk: 'Perk_DefenseMastery',
            imgSrc: 'img/perks/fighter/Perk_DefenseMastery.png', 
            alt: 'Perk Defense Mastery',
            class: 'fighter', 
            name: 'Defense Mastery',
            description: 'Gain an additional 10% Item Armor Rating Bonus from equipped armor.'
        },
        {
            perk: 'Perk_DualWield',
            imgSrc: 'img/perks/fighter/Perk_DualWield.png', 
            alt: 'Perk Dual Wield',
            class: 'fighter', 
            name: 'Dual Wield',
            description: 'While you have weapons equipped in both hands, gain 10% Action Speed. (Works with all secondary weapons, excluding lanterns and shields.)'
        },
        {
            perk: 'Perk_ProjectileResistance',
            imgSrc: 'img/perks/fighter/Perk_ProjectileResistance.png', 
            alt: 'Perk Projectile Resistance',
            class: 'fighter', 
            name: 'Projectile Resistance',
            description: 'Gain 10% Projectile Damage Reduction.'
        },
        {
            perk: 'Perk_ShieldExpert',
            imgSrc: 'img/perks/fighter/Perk_ShieldExpert.png', 
            alt: 'Perk Shield Mastery',
            class: 'fighter', 
            name: 'Shield Mastery',
            description: 'While in defensive stance, gain 10% Move Speed Bonus. When you successfully block an attack, gain 50% Action Speed towards your next block or attack. Despite the name, this perk applies to any weapon with a defensive stance, including the Longsword and Flute.'
        },
        {
            perk: 'Perk_Slayer',
            imgSrc: 'img/perks/fighter/Perk_Slayer.png', 
            alt: 'Perk Slayer',
            class: 'fighter', 
            name: 'Slayer',
            description: 'While holding a weapon in each hand, gain 5 Physical Buff Weapon Damage and lose the ability to equip plate armor. (Works with all secondary weapons, excluding lanterns and shields.)'
        },
        {
            perk: 'Perk_Swift',
            imgSrc: 'img/perks/fighter/Perk_Swift.png', 
            alt: 'Perk Swift',
            class: 'fighter', 
            name: 'Swift',
            description: 'Gain -30% Armor Speed Penalty Bonus. Not applicable to additional speed modifiers.'
        },
        {
            perk: 'Perk_SwordMastery',
            imgSrc: 'img/perks/fighter/Perk_SwordMastery.png', 
            alt: 'Perk Sword Mastery',
            class: 'fighter', 
            name: 'Sword Mastery',
            description: 'When using a Sword-type weapon, gain 2 Physical Buff Weapon Damage and 5% Action Speed. Also gain 10 Move Speed Add when taking a defensive stance with your sword.'
        },
        {
            perk: 'Perk_WeaponMastery',
            imgSrc: 'img/perks/fighter/Perk_WeaponMastery.png', 
            alt: 'Perk Weapon Mastery',
            class: 'fighter', 
            name: 'Weapon Mastery',
            description: 'Gain the ability to use any weapon. While using a non-native weapon to your class, lose -10% Physical Power Bonus on the weapon.'
        },
        //Ranger
        {
            perk: 'Perk_CampingMastery',
            imgSrc: 'img/perks/ranger/Perk_CampingMastery.png', 
            alt: 'Perk Camping Mastery',
            class: 'ranger', 
            name: 'Camping Mastery',
            description: 'Gain 50% Regular Interaction Speed while setting up Campfires and increases the duration to 1.3x.'
        },
        {
            perk: 'Perk_Chase',
            imgSrc: 'img/perks/ranger/Perk_Chase.png', 
            alt: 'Perk Chase',
            class: 'ranger', 
            name: 'Chase',
            description: 'Detect recent enemy footsteps within 5.5m and can hear enemy footstep sounds from farther away.'
        },
        {
            perk: 'Perk_CripplingShot',
            imgSrc: 'img/perks/ranger/Perk_CripplingShot.png', 
            alt: 'Perk Crippling Shot',
            class: 'ranger', 
            name: 'Crippling Shot',
            description: 'Hitting the target\'s leg with a projectile inflicts -40% Move Speed Bonus for 1s.'
        },
        {
            perk: 'Perk_CrossbowMastery',
            imgSrc: 'img/perks/ranger/Perk_CrossbowMastery.png', 
            alt: 'Perk Crossbow Mastery',
            class: 'ranger', 
            name: 'Crossbow Mastery',
            description: 'While using a crossbow, gain 5% Physical Power Bonus and an additional 50% Action Speed while reloading.'
        },
        {
            perk: 'Perk_Kinesthesia',
            imgSrc: 'img/perks/ranger/Perk_Kinesthesia.png', 
            alt: 'Perk Kinesthesia',
            class: 'ranger', 
            name: 'Kinesthesia',
            description: 'When moving with the bowstring drawn, receive a movement multiplier of 110%.'
        },
        {
            perk: 'Perk_NimbleHands',
            imgSrc: 'img/perks/ranger/Perk_NimbleHands.png', 
            alt: 'Perk Nimble Hands',
            class: 'ranger', 
            name: 'Nimble Hands',
            description: 'When using a bow, increases the animation\'s base draw speed by 15%.'
        },
        {
            perk: 'Perk_QuickReload',
            imgSrc: 'img/perks/ranger/Perk_QuickReload.png', 
            alt: 'Perk Quick Reload',
            class: 'ranger', 
            name: 'Quick Reload',
            description: 'When reloading a bow-type weapon, gain 50% Action Speed.'
        },
        {
            perk: 'Perk_RangedWeaponsMastery',
            imgSrc: 'img/perks/ranger/Perk_RangedWeaponsMastery.png', 
            alt: 'Perk Ranged Weapons Mastery',
            class: 'ranger', 
            name: 'Ranged Weapons Mastery',
            description: 'When attacking with a ranged (bow/crossbow) weapon, gain 5% Physical Power Bonus.'
        },
        {
            perk: 'Perk_Sharpshooter',
            imgSrc: 'img/perks/ranger/Perk_Sharpshooter.png', 
            alt: 'Perk Sharpshooter',
            class: 'ranger', 
            name: 'Sharpshooter',
            description: 'When attacking with a ranged (bow/crossbow) weapon, gain 15% Physical Headshot Hit Location Bonus.'
        },
        {
            perk: 'Perk_SpearProficiency',
            imgSrc: 'img/perks/ranger/Perk_SpearProficiency.png', 
            alt: 'Perk Spear Proficiency',
            class: 'ranger', 
            name: 'Spear Proficiency',
            description: 'Gain the ability to equip spears. While using a spear, gain 7 Physical Power.'
        },
        {
            perk: 'Perk_TrapMastery',
            imgSrc: 'img/perks/ranger/Perk_TrapMastery.png', 
            alt: 'Perk Trap Mastery',
            class: 'ranger', 
            name: 'Trap Mastery',
            description: 'When installing traps, gain 100% Regular Interaction Speed.'
        },
        // Rogue
        {
            perk: 'Perk_Ambush',
            imgSrc: 'img/perks/rogue/Perk_Ambush.png', 
            alt: 'Perk Ambush',
            class: 'rogue', 
            name: 'Ambush',
            description: 'When coming out of hide, you gain 10% Move Speed Bonus and 25% Physical Power Bonus for 3s. If the melee attack is successful, the effect disappears.'
        },
        {
            perk: 'Perk_BackAttack',
            imgSrc: 'img/perks/rogue/Perk_BackAttack.png', 
            alt: 'Perk Back Attack',
            class: 'rogue', 
            name: 'Back Attack',
            description: 'When attacking a target from behind (roughly 120-135 degrees) gain 30% Physical Power Bonus.'
        },
        {
            perk: 'Perk_Creep',
            imgSrc: 'img/perks/rogue/Perk_Creep.png', 
            alt: 'Perk Creep',
            class: 'rogue', 
            name: 'Creep',
            description: 'While crouching for at least 0.5s, reduce the volume of footsteps significantly.'
        },
        {
            perk: 'Perk_DaggerMastery',
            imgSrc: 'img/perks/rogue/Perk_DaggerMastery.png', 
            alt: 'Perk Dagger Mastery',
            class: 'rogue', 
            name: 'Dagger Mastery',
            description: 'When swinging a dagger, gain 15% Physical Power Bonus.'
        },
        {
            perk: 'Perk_DoubleJump',
            imgSrc: 'img/perks/rogue/Perk_DoubleJump.png', 
            alt: 'Perk Double Jump',
            class: 'rogue', 
            name: 'Double Jump',
            description: 'You gain the ability to jump an additional time in the air, but lose -10 Move Speed Add. After double jumping, receive a 75% Movement Multiplier until landing.'
        },
        {
            perk: 'Perk_HideMastery',
            imgSrc: 'img/perks/rogue/Perk_HideMastery.png', 
            alt: 'Perk Hide Mastery',
            class: 'rogue', 
            name: 'Hide Mastery',
            description: 'Increases the Hide skill duration to 2.5x and multiplies the cooldown by 0.7x.'
        },
        {
            perk: 'Perk_Jokester',
            imgSrc: 'img/perks/rogue/Perk_Jokester.png', 
            alt: 'Perk Jokester',
            class: 'rogue', 
            name: 'Jokester',
            description: 'Grant self and all party members 2 All Attributes within 6m.'
        },
        {
            perk: 'Perk_Pickpocket',
            imgSrc: 'img/perks/rogue/Perk_Pickpocket.png', 
            alt: 'Perk Pickpocket',
            class: 'rogue', 
            name: 'Pickpocket',
            description: 'Steal items from a chosen nearby enemy by using the "interact" key. Stolen item is chosen randomly from enemies inventory. Items currently equipped by enemies cannot be stolen. Additionally, your hide will not be revealed when you are bumped into. Items worn in utility slots do not appear on the waist.'
        },
        {
            perk: 'Perk_PoisonedWeapon',
            imgSrc: 'img/perks/rogue/Perk_PoisonedWeapon.png', 
            alt: 'Perk Poisoned Weapon',
            class: 'rogue', 
            name: 'Poisoned Weapon',
            description: 'A successful attack applies poison that deals 4 Neutral Magical Base Damage over 4s. The poison can stack up to 5 times at once and all stacks refresh when adding more stacks. 50% Scaling.'
        },
        {
            perk: 'Perk_Stealth',
            imgSrc: 'img/perks/rogue/Perk_Stealth.png', 
            alt: 'Perk Stealth',
            class: 'rogue', 
            name: 'Stealth',
            description: 'While hiding, gain the ability to move 10 steps while crouching or slow walking. Also gain 3 Move Speed Add per remaining step.'
        },
        {
            perk: 'Perk_Thrust',
            imgSrc: 'img/perks/rogue/Perk_Thrust.png', 
            alt: 'Perk Thrust',
            class: 'rogue', 
            name: 'Thrust',
            description: 'When swinging a dagger, gain an additional 20% Armor Penetration.'
        },
        {
            perk: 'Perk_TrapsAndLocks',
            imgSrc: 'img/perks/rogue/Perk_TrapsAndLocks.png', 
            alt: 'Perk Traps and Locks',
            class: 'rogue', 
            name: 'Traps and Locks',
            description: 'You can unlock locked locks without a lockpick and detect traps within 4.5m to disarm them.'
        },
        // Warlock
        {
            perk: 'Perk_Antimagic',
            imgSrc: 'img/perks/warlock/Perk_Antimagic.png', 
            alt: 'Perk Antimagic',
            class: 'warlock', 
            name: 'Antimagic',
            description: 'Gain 25% Damage Reduction against all Magical Elements except Divine, Curse, and Neutral.'
        },
        {
            perk: 'Perk_CurseMastery',
            imgSrc: 'img/perks/warlock/Perk_CurseMastery.png', 
            alt: 'Perk Curse Mastery',
            class: 'warlock', 
            name: 'Curse Mastery',
            description: 'Gain additional base duration towards all curses you cast.'
        },
        {
            perk: 'Perk_DarkEnhancement',
            imgSrc: 'img/perks/warlock/Perk_DarkEnhancement.png', 
            alt: 'Perk Dark Enhancement',
            class: 'warlock', 
            name: 'Dark Enhancement',
            description: 'Gain 10% Dark Power Bonus towards dark magic spells.'
        },
        {
            perk: 'Perk_DarkReflection',
            imgSrc: 'img/perks/warlock/Perk_DarkReflection.png', 
            alt: 'Perk Dark Reflection',
            class: 'warlock', 
            name: 'Dark Reflection',
            description: 'While active, reflect 10 Dark Magical Base Damage (75% Scaling) to the melee attacker. Does not reflect while on cooldown. This perk does consume Darkness Shards, but does not generate Darkness Shards with Soul Collector.'
        },
        {
            perk: 'Perk_DemonArmor',
            imgSrc: 'img/perks/warlock/Perk_DemonArmor.png', 
            alt: 'Perk Demon Armor',
            class: 'warlock', 
            name: 'Demon Armor',
            description: 'Gain the ability to equip plate armor. Suffer -10% Spell Casting Speed.'
        },
        {
            perk: 'Perk_ImmortalLament',
            imgSrc: 'img/perks/warlock/Perk_ImmortalLament.png', 
            alt: 'Perk Immortal Lament',
            class: 'warlock', 
            name: 'Immortal Lament',
            description: 'Casting spells will no longer take you below 1 health.'
        },
        {
            perk: 'Perk_InfernalPledge',
            imgSrc: 'img/perks/warlock/Perk_InfernalPledge.png', 
            alt: 'Perk Infernal Pledge',
            class: 'warlock', 
            name: 'Infernal Pledge',
            description: 'Gain 25% Undead Race Damage Reduction and 25% Demon Race Damage Reduction.'
        },
        {
            perk: 'Perk_Malice',
            imgSrc: 'img/perks/warlock/Perk_Malice.png', 
            alt: 'Perk Malice',
            class: 'warlock', 
            name: 'Malice',
            description: 'Gain 10% Will Bonus.'
        },
        {
            perk: 'Perk_ShadowTouch',
            imgSrc: 'img/perks/warlock/Perk_ShadowTouch.png', 
            alt: 'Perk Shadow Touch',
            class: 'warlock', 
            name: 'Shadow Touch',
            description: 'Dealing physical damage to an enemy with a melee weapon deals 2 Dark True Magical Base Damage and heals you for 2 Magical Base Healing (0% Scaling).'
        },
        {
            perk: 'Perk_SoulCollector',
            imgSrc: 'img/perks/warlock/Perk_SoulCollector.png', 
            alt: 'Perk Soul Collector',
            class: 'warlock', 
            name: 'Soul Collector',
            description: 'When you deal the final blow to an enemy, one darkness shard is collected. Gain 20% Dark Power Bonus for each shard collected, up to a maximum of 5 shards. When a dark magic spell is cast, consume all collected shards. The spell that consumes the shards receives the bonus.'
        },
        {
            perk: 'Perk_TortureMastery',
            imgSrc: 'img/perks/warlock/Perk_TortureMastery.png', 
            alt: 'Perk Torture Mastery',
            class: 'warlock', 
            name: 'Torture Mastery',
            description: 'All curses inflicted upon enemies restores 2 Magical Base Healing (10% Scaling) to the caster with each instance of damage dealt. All spells cost 2x. Does not heal you for cursing a corpse.'
        },
        {
            perk: 'Perk_Vampirism',
            imgSrc: 'img/perks/warlock/Perk_Vampirism.png', 
            alt: 'Perk Vampirism',
            class: 'warlock', 
            name: 'Vampirism',
            description: 'Gain 20% Outgoing Magical Healing Mod.'
        },
        // Wizard
        {
            perk: 'Perk_ArcaneFeedback',
            imgSrc: 'img/perks/wizard/Perk_ArcaneFeedback.png', 
            alt: 'Perk Arcane Feedback',
            class: 'wizard', 
            name: 'Arcane Feedback',
            description: 'When you deal damage with an Arcane spell, gain a stacking bonus granting 2% Spell Casting Speed and 2% Arcane Power Bonus per stack for 7s. This skill can stack up to 5 times and the duration resets with each successful stack.'
        },
        {
            perk: 'Perk_ArcaneMastery',
            imgSrc: 'img/perks/wizard/Perk_ArcaneMastery.png', 
            alt: 'Perk Arcane Mastery',
            class: 'wizard', 
            name: 'Arcane Mastery',
            description: 'Gain 5% Arcane Power Bonus and reduces the cast time of Arcane spells by 0.5s.'
        },
        {
            perk: 'Perk_FireMastery',
            imgSrc: 'img/perks/wizard/Perk_FireMastery.png', 
            alt: 'Perk Fire Mastery',
            class: 'wizard', 
            name: 'Fire Mastery',
            description: 'Gain 5% Fire Power Bonus. The duration of applied burns is increased by 2 seconds and deals 2 more base damage. Burned targets suffer -50% Incoming Physical and Magical Healing for 5s. Fire Mastery only applies to burns by the caster.'
        },
        {
            perk: 'Perk_IceMastery',
            imgSrc: 'img/perks/wizard/Perk_IceMastery.png', 
            alt: 'Perk Ice Mastery',
            class: 'wizard', 
            name: 'Ice Mastery',
            description: 'Dealing damage with Ice freezes the target’s feet and prevents them from moving for 0.5s.'
        },
        {
            perk: 'Perk_IceShield',
            imgSrc: 'img/perks/wizard/Perk_IceShield.png', 
            alt: 'Perk Ice Shield',
            class: 'wizard', 
            name: 'Ice Shield',
            description: 'Gain 20 Armor Rating while not on cooldown. Inflict frostbite on melee attackers, reducing their Move Speed and Action Speed by 20% for 0.5s. 5s cooldown.'
        },
        {
            perk: 'Perk_ManaSurge',
            imgSrc: 'img/perks/wizard/Perk_ManaSurge.png', 
            alt: 'Perk Mana Surge',
            class: 'wizard', 
            name: 'Mana Surge',
            description: 'Gain 10% Magical Power Bonus.'
        },
        {
            perk: 'Perk_Melt',
            imgSrc: 'img/perks/wizard/Perk_Melt.png', 
            alt: 'Perk Melt',
            class: 'wizard', 
            name: 'Melt',
            description: 'When you deal magical Fire Damage to a target, they suffer -10% Physical Damage Reduction for 5s.'
        },
        {
            perk: 'Perk_QuickChant',
            imgSrc: 'img/perks/wizard/Perk_QuickChant.png', 
            alt: 'Perk Quick Chant',
            class: 'wizard', 
            name: 'Quick Chant',
            description: 'Gain 15% Spell Casting Speed.'
        },
        {
            perk: 'Perk_ReactiveShield',
            imgSrc: 'img/perks/wizard/Perk_ReactiveShield.png', 
            alt: 'Perk Reactive Shield',
            class: 'wizard', 
            name: 'Reactive Shield',
            description: 'When you take damage, gain a 15 Base Shield for 3s. The shield reactivates after 12s.'
        },
        {
            perk: 'Perk_Sage',
            imgSrc: 'img/perks/wizard/Perk_Sage.png', 
            alt: 'Perk Sage',
            class: 'wizard', 
            name: 'Sage',
            description: 'Gain 10% Knowledge Bonus.'
        },
        {
            perk: 'Perk_SpellOverload',
            imgSrc: 'img/perks/wizard/Perk_SpellOverload.png', 
            alt: 'Perk Spell Overload',
            class: 'wizard', 
            name: 'Spell Overload',
            description: 'Suffer -20% Knowledge Bonus but gain 60% Max Spell Count Bonus, rounded down.'
        },
        {
            perk: 'Perk_StaffMastery',
            imgSrc: 'img/perks/wizard/Perk_StaffMastery.png', 
            alt: 'Perk Staff Mastery',
            class: 'wizard', 
            name: 'Staff Mastery',
            description: 'When using a staff-type weapon, gain 2 Buff Magical Damage as Base damage.'
        },
        // More perks...
    ];

    

    // Function to clear selected perks and skills
    function clearSelected() {
        selectedPerks.clear(); // Clear the set of selected perks
        selectedSkills.clear(); // Clear the set of selected skills
        perkSlots.forEach(slot => {
            slot.src = 'img/inventory/blank.png'; // Reset each perk slot to default
        });
        skillSlots.forEach(slot => {
            slot.src = 'img/inventory/blank.png'; // Reset each skill slot to default
        });
        selectedItems.clear();
        itemSlots.forEach(slot => {
            slot.src = 'img/inventory/blank.png';
        });
    }

    // Function to update the table and portrait when a class is selected
    function updateTableAndPortrait(selectedClass) {
        classTableBody.innerHTML = '';
        const data = classData[selectedClass] || { stats: [], portrait: '' };

        data.stats.forEach(row => {
            const tr = document.createElement('tr');
            const tdStat = document.createElement('td');
            const tdValue = document.createElement('td');

            tdStat.textContent = row.stat;
            tdValue.textContent = row.value;

            tr.appendChild(tdStat);
            tr.appendChild(tdValue);
            classTableBody.appendChild(tr);

            const img = document.createElement('img');
            img.src = 'img/Inventory_Stat_DLine.webp';
            img.alt = 'Separator';
            img.style.width = '100%';
            classTableBody.appendChild(img);
        });

        portraitImage.src = data.portrait;
    }

    // Function to update the visibility of perk options
    function updatePerkOptions() {
        const perkOptions = document.querySelectorAll('.perk-option');
        perkOptions.forEach(option => {
            const perkClass = option.getAttribute('data-class');
            if (selectedPerks.has(option.getAttribute('data-perk')) && option.getAttribute('data-perk') !== 'none') {
                option.style.display = 'none'; // Hide if already selected
            } else if (perkClass === selectedClass || perkClass === 'all') {
                option.style.display = ''; // Show valid perks
            } else {
                option.style.display = 'none'; // Hide invalid perks
            }
        });
    }
    
    // Function to update the visibility of skill options
    function updateSkillOptions() {
        const skillOptions = document.querySelectorAll('.skill-option');
        skillOptions.forEach(option => {
            const skillClass = option.getAttribute('data-class');
            if (selectedSkills.has(option.getAttribute('data-skill')) && option.getAttribute('data-skill') !== 'none') {
                option.style.display = 'none'; // Hide if already selected
            } else if (skillClass === selectedClass || skillClass === 'all') {
                option.style.display = ''; // Show valid skills
            } else {
                option.style.display = 'none'; // Hide invalid skills
            }
        });
    }
    
    // Function to generate perk options dynamically
    function generatePerkOptions() {
        perkMenu.innerHTML = ''; // Clear existing options
        perksData.forEach(perk => {
            const perkOption = document.createElement('div');
            perkOption.classList.add('perk-option');
            perkOption.setAttribute('data-perk', perk.perk);
            perkOption.setAttribute('data-class', perk.class);

            const img = document.createElement('img');
            img.src = perk.imgSrc;
            img.alt = perk.alt;

            perkOption.appendChild(img);

            if (perk.name && perk.description) {
                const perkName = document.createElement('div');
                perkName.classList.add('perkName');
                perkName.textContent = perk.name;

                const perkDescription = document.createElement('div');
                perkDescription.classList.add('perkDescription');
                perkDescription.textContent = perk.description;

                perkOption.appendChild(perkName);
                perkOption.appendChild(perkDescription);
            }

            perkMenu.appendChild(perkOption);
        });
    }

    // Function to generate skill options dynamically
    function generateSkillOptions() {
        skillMenu.innerHTML = ''; // Clear existing options
        skillsData.forEach(skill => {
            const skillOption = document.createElement('div');
            skillOption.classList.add('skill-option');
            skillOption.setAttribute('data-skill', skill.skill);
            skillOption.setAttribute('data-class', skill.class);

            const img = document.createElement('img');
            img.src = skill.imgSrc;
            img.alt = skill.alt;

            skillOption.appendChild(img);

            if (skill.name && skill.description) {
                const skillName = document.createElement('div');
                skillName.classList.add('skillName');
                skillName.textContent = skill.name;

                const skillDescription = document.createElement('div');
                skillDescription.classList.add('skillDescription');
                skillDescription.textContent = skill.description;

                skillOption.appendChild(skillName);
                skillOption.appendChild(skillDescription);
            }

            skillMenu.appendChild(skillOption);
        });
    }

    // Initialize with default class
    document.querySelector('.classContainer[data-class="barbarian"]').click();

    // Generate perks and skills dynamically
    generatePerkOptions();
    generateSkillOptions();

    // Event listeners for perk slots
    perkSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activePerkSlot = slot; // Save clicked perk slot
            perkMenu.classList.remove('hidden'); // Show perk menu
            updatePerkOptions(); // Update options visibility
        });
    });

    // Event listeners for skill slots
    skillSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activeSkillSlot = slot; // Save clicked skill slot
            skillMenu.classList.remove('hidden'); // Show skill menu
            updateSkillOptions(); // Update options visibility
        });
    });

// ===============>>>>>>>>>>>>


    const itemMenu = document.createElement('div');
    itemMenu.classList.add('item-menu', 'hidden');
    document.body.appendChild(itemMenu);
    const itemSlots = document.querySelectorAll('.overlay-image[data-item-slot]');
    let activeItemSlot = null;

    const selectedItems = new Set();

    

    function updateItemOptions() {
        const itemOptions = document.querySelectorAll('.item-option');
        const activeSlotId = activeItemSlot.getAttribute('data-item-slot');
    
        itemOptions.forEach(option => {
            const itemSlotCompatibility = option.getAttribute('data-slots').split(',');
    
            if (
                selectedItems.has(option.getAttribute('data-item')) &&
                option.getAttribute('data-item') !== 'none'
            ) {
                option.style.display = 'none';
            } else if (
                (option.getAttribute('data-class') === selectedClass || option.getAttribute('data-class') === 'all') &&
                (itemSlotCompatibility.includes(activeSlotId) || itemSlotCompatibility.includes('all'))
            ) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
        });
    }

    function generateItemOptions() {
        itemMenu.innerHTML = '';
        itemsData.forEach(item => {
            const itemOption = document.createElement('div');
            itemOption.classList.add('item-option');
            itemOption.setAttribute('data-item', item.item);
            itemOption.setAttribute('data-class', item.class);
            itemOption.setAttribute('data-slots', item.slots.join(',')); // Store compatible slots
    
            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.alt;
    
            itemOption.appendChild(img);
    
            if (item.name && item.description) {
                const itemName = document.createElement('div');
                itemName.classList.add('itemName');
                itemName.textContent = item.name;
    
                const itemDescription = document.createElement('div');
                itemDescription.classList.add('itemDescription');
                itemDescription.textContent = item.description;
    
                itemOption.appendChild(itemName);
                itemOption.appendChild(itemDescription);
            }
    
            itemMenu.appendChild(itemOption);
        });
    }

    generateItemOptions();

    itemSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activeItemSlot = slot;
            itemMenu.classList.remove('hidden');
            updateItemOptions(); // Update options based on active slot
        });
    });











// ===============>>>>>>>>>>>>


    // Event listeners for perk options
    document.addEventListener('click', (event) => {
        if (event.target.closest('.perk-option')) {
            const option = event.target.closest('.perk-option');
            const selectedPerk = option.getAttribute('data-perk');

            if (activePerkSlot) {
                if (selectedPerk === 'none') {
                    selectedPerks.delete(activePerkSlot.src.split('/').pop().split('.png')[0]); // Remove old perk
                    activePerkSlot.src = `img/inventory/blank.png`; // Reset slot
                } else if (!selectedPerks.has(selectedPerk)) {
                    selectedPerks.delete(activePerkSlot.src.split('/').pop().split('.png')[0]); // Remove old perk
                    selectedPerks.add(selectedPerk);
                    activePerkSlot.src = option.querySelector('img').src; // Set new perk
                }
                updatePerkOptions(); // Update perk options
            }

            perkMenu.classList.add('hidden'); // Hide perk menu
        }

        // Event listeners for skill options
        if (event.target.closest('.skill-option')) {
            const option = event.target.closest('.skill-option');
            const selectedSkill = option.getAttribute('data-skill');

            if (activeSkillSlot) {
                const currentSkill = activeSkillSlot.getAttribute('data-skill'); // Get the current skill in the slot

                // Remove the current skill from the selected set (if any)
                if (currentSkill && currentSkill !== 'none') {
                    selectedSkills.delete(currentSkill);
                }

                if (selectedSkill === 'none') {
                    activeSkillSlot.src = `img/inventory/blank.png`; // Reset to default slot image
                    activeSkillSlot.setAttribute('data-skill', 'none'); // Reset the slot's data-skill attribute
                } else if (!selectedSkills.has(selectedSkill)) {
                    selectedSkills.add(selectedSkill); // Add new skill to the selected set
                    activeSkillSlot.src = option.querySelector('img').src; // Set the new skill image in the slot
                    activeSkillSlot.setAttribute('data-skill', selectedSkill); // Store the selected skill in the slot
                }

                updateSkillOptions(); // Update skill options visibility
            }

            skillMenu.classList.add('hidden'); // Hide the skill menu
        }

        if (event.target.closest('.item-option')) {
            const option = event.target.closest('.item-option');
            const selectedItem = option.getAttribute('data-item');
        
            if (activeItemSlot) {
                if (selectedItem === 'none') {
                    selectedItems.delete(activeItemSlot.src.split('/').pop().split('.png')[0]);
                    activeItemSlot.src = `img/inventory/blank.png`;
                } else if (!selectedItems.has(selectedItem)) {
                    selectedItems.delete(activeItemSlot.src.split('/').pop().split('.png')[0]);
                    selectedItems.add(selectedItem);
                    activeItemSlot.src = option.querySelector('img').src;
                }
                updateItemOptions();
            }
        
            itemMenu.classList.add('hidden');
        }

        // Hide menus if clicked outside
        if (!event.target.closest('.perk-menu') && !event.target.closest('.overlay-image[data-perk-slot]')) {
            perkMenu.classList.add('hidden');
        }
        if (!event.target.closest('.skill-menu') && !event.target.closest('.overlay-image[data-skill-slot]')) {
            skillMenu.classList.add('hidden');
        }
        if (!event.target.closest('.item-menu') && !event.target.closest('.overlay-image[data-item-slot]')) {
            itemMenu.classList.add('hidden');
        }
    });

    // Event listeners for class selection
    classOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedClass = option.getAttribute('data-class');
            clearSelected(); // Clear previous selections
            updateTableAndPortrait(selectedClass); // Update table and portrait
            updateSkillOptions(); // Update skills
            updatePerkOptions(); // Update perks
            updateItemOptions();
        });
    });

    



























    
      
});
