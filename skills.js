const skillsData = [
        {
            skill: 'none',
            imgSrc: 'img/inventory/skillSlot.webp',
            alt: 'No Skill',
            class: 'all'
        },
        //Barbarian
        {
            skill: 'AchillesStrike',
            imgSrc: 'img/skill/barbarian/Skill_AchillesStrike.png',
            alt: 'Skill Achilles Strike',
            class: 'barbarian',
            name: 'Achilles Strike',
            description: 'The next time you strike a target, inflict -30% Move Speed Bonus for 2.5s. While debuffed, each time the target moves they receive 1 Physical Base Damage.'
        },
        {
            skill: 'BloodExchange',
            imgSrc: 'img/skill/barbarian/Skill_BloodExchange.png',
            alt: 'Blood Exchange',
            class: 'barbarian',
            name: 'Blood Exchange',
            description: 'For 8s, receive 10% Percent Max Health Healing with each successful attack. In exchange, suffer -20% Max Health Bonus for the duration. Has 1 use. Can be Recharged at the rate of a Tier 5 Spell by sitting at a Campfire.'
        },
        {
            skill: 'Rage',
            imgSrc: 'img/skill/barbarian/Skill_Rage.png',
            alt: 'Skill Rage',
            class: 'barbarian',
            name: 'Rage',
            description: 'For 6s, gain 10 Strength, 10 Vigor, and 10% Move Speed Bonus, but suffer -10% Physical Damage Reduction.'
        },
        {
            skill: 'RecklessAttack	',
            imgSrc: 'img/skill/barbarian/Skill_RecklessAttack.png',
            alt: 'Skill Reckless Attack',
            class: 'barbarian',
            name: 'Reckless Attack',
            description: 'Gain 85% Armor Penetration on your next melee attack. While active, suffer -85 Armor Rating.'
        },
        {
            skill: 'SavageRoar',
            imgSrc: 'img/skill/barbarian/Skill_SavageRoar.png',
            alt: 'Skill Savage Roar',
            class: 'barbarian',
            name: 'Savage Roar',
            description: 'Frightens all enemies within a 7.5m radius, causing players to suffer -30% Physical Power Bonus for 6s and forcing monsters to flee for 3s.'
        },
        {
            skill: 'War Cry',
            imgSrc: 'img/skill/barbarian/Skill_WarCry.png',
            alt: 'Skill War Cry',
            class: 'barbarian',
            name: 'War Cry',
            description: 'You and allies within 7.5m gain 25% Max Health Bonus for 7s.'
        },
        {
            skill: 'WarSacrifice',
            imgSrc: 'img/skill/barbarian/Skill_WarSacrifice.png',
            alt: 'Skill War Sacrifice',
            class: 'barbarian',
            name: 'War Sacrifice',
            description: 'While active, gain 5 All Attributes for 8s. In exchange, suffer -10% Percent Max Health Healing over 8s.'
        },
        // Bard
        {
            skill: 'Dissonance',
            imgSrc: 'img/skill/bard/Skill_Dissonance.png',
            alt: 'Skill Dissonance',
            class: 'bard',
            name: 'Dissonance',
            description: 'Creates an unpleasant noise to block hostile targets within a 6m area from casting spells, Silencing them for 3s.'
        },
        {
            skill: 'Encore',
            imgSrc: 'img/skill/bard/Skill_Encore.png',
            alt: 'Skill Encore',
            class: 'bard',
            name: 'Encore',
            description: 'The next song is automatically played to the end without any input and is sure to succeed. Gain 100% Manual Dexterity on this song, though capped to 50%.'
        },
        {
            skill: 'PartyMaker',
            imgSrc: 'img/skill/bard/Skill_PartyMaker.png',
            alt: 'Skill Party Maker',
            class: 'bard',
            name: 'Party Maker',
            description: 'Remove drunk effect from self and all allies within 6m.'
        },
        {
            skill: 'MusicMemory',
            imgSrc: 'img/skill/bard/Skill_MusicMemory.png',
            alt: 'Skill Music Memory',
            class: 'bard',
            name: 'Music Memory',
            description: 'Can store up to 5 sheet music as space permits.'
        },
        {
            skill: 'MusicMemory2',
            imgSrc: 'img/skill/bard/Skill_MusicMemory.png',
            alt: 'Skill Music Memory 2',
            class: 'bard',
            name: 'Music Memory 2',
            description: 'Can store up to an additional 5 sheet music as space permits.'
        },
        // Cleric
        {
            skill: 'DivineProtection',
            imgSrc: 'img/skill/cleric/Skill_DivineProtection.png',
            alt: 'Skill Divine Protection',
            class: 'cleric',
            name: 'Divine Protection',
            description: 'Receive the blessing of the divine and gain 30% Physical Damage Reduction for 4s.'
        },
        {
            skill: 'HolyPurification',
            imgSrc: 'img/skill/cleric/Skill_HolyPurification.png',
            alt: 'Skill Holy Purification',
            class: 'cleric',
            name: 'Holy Purification',
            description: 'After casting for 1.5s, deal 100 Divine Magical Base Damage to all Undead Monsters within 7.5m.'
        },
        {
            skill: 'Judgement',
            imgSrc: 'img/skill/cleric/Skill_Judgement.png',
            alt: 'Skill Judgement',
            class: 'cleric',
            name: 'Judgement',
            description: 'After channeling for 0.75s, instantly deal 25 Divine Magical Base Damage to a target within 5m and cause them to suffer -30% Move Speed Bonus for 2s. This skill is targeted like a single-target channel spell with the following differences: (1) You can only start channeling when the crosshair targets an enemy within range. (2) Once channeling starts, the target does not need to be kept in view to complete the channel. (3) If the target goes out of range while channeling, the skill will fizzle and enter cooldown. (4) The skill will not enter cooldown until the channel is either completed or fizzled. If the channel is cancelled by moving or hitting the cancel key, the skill will not go on cooldown.'
        },
        {
            skill: 'Smite',
            imgSrc: 'img/skill/cleric/Skill_Smite.png',
            alt: 'Skill Smite',
            class: 'cleric',
            name: 'Smite',
            description: 'When activated, your melee physical attacks deal an additional instance of 10 Divine Magical Base Damage for 7s. This new instance never benefits from Hit Location Bonus.'
        },
        {
            skill: 'SpellMemory',
            imgSrc: 'img/skill/cleric/Skill_SpellMemory.png',
            alt: 'Skill Spell Memory',
            class: 'cleric',
            name: 'Spell Memory',
            description: 'Allows you to memorize spells to use in the dungeon.'
        },
        {
            skill: 'SpellMemory2',
            imgSrc: 'img/skill/cleric/Skill_SpellMemory.png',
            alt: 'Skill Spell Memory 2',
            class: 'cleric',
            name: 'Spell Memory 2',
            description: 'Allows you to memorize additional spells to use in the dungeon.'
        },
        // Druid
        {
            skill: 'ShapeshiftMemory',
            imgSrc: 'img/skill/druid/Skill_ShapeshiftMemory.png',
            alt: 'Skill Shapeshift Memory',
            class: 'druid',
            name: 'Shapeshift Memory',
            description: 'Transforms one of 5 creatures, cannot use tools in non-human state.'
        },
        {
            skill: 'ShapeshiftMemory2',
            imgSrc: 'img/skill/druid/Skill_ShapeshiftMemory.png',
            alt: 'Skill Shapeshift Memory 2',
            class: 'druid',
            name: 'Shapeshift Memory 2',
            description: 'Transforms into one of 5 additional creatures, cannot use tools in non-human state.'
        },
        {
            skill: 'SpellMemory',
            imgSrc: 'img/skill/druid/Skill_SpellMemory.png',
            alt: 'Skill Spell Memory',
            class: 'druid',
            name: 'Spell Memory',
            description: 'Allows you to memorize spells to use in the dungeon.'
        },
        // Fighter
        {
            skill: 'AdrenalineRush',
            imgSrc: 'img/skill/fighter/Skill_AdrenalineRush.png',
            alt: 'Skill Adrenaline Rush',
            class: 'fighter',
            name: 'Adrenaline Rush',
            description: 'Gain 15% Action Speed for 8s. After the duration ends, lose -8% Action Speed and -4% Move Speed Bonus for 2s.'
        },
        {
            skill: 'Breakthrough',
            imgSrc: 'img/skill/fighter/Skill_Breakthrough.png',
            alt: 'Skill Breakthrough',
            class: 'fighter',
            name: 'Breakthrough',
            description: 'Remove and become immune to Debuffs that slow move speed and become knockback immune for 10s.'
        },
        {
            skill: 'PerfectBlock',
            imgSrc: 'img/skill/fighter/Skill_PerfectBlock.png',
            alt: 'Skill Perfect Block',
            class: 'fighter',
            name: 'Perfect Block',
            description: 'Gain 5 Impact Resistance for 6s.'
        },
        {
            skill: 'SecondWind',
            imgSrc: 'img/skill/fighter/Skill_SecondWind.png',
            alt: 'Skill Second Wind',
            class: 'fighter',
            name: 'Second Wind',
            description: 'Recover 40% Percent Max Health Healing over 12s. Additionally, Second Wind removes the negative effects of the Adrenaline Rush. Has 1 use. Can be Recharged at the rate of a Tier 5 Skill.'
        },
        {
            skill: 'ShieldSlam',
            imgSrc: 'img/skill/fighter/Skill_ShieldSlam.png',
            alt: 'Skill Shield Slam',
            class: 'fighter',
            name: 'Shield Slam',
            description: 'When using a shield, perform a shield bash attack that actively blocks and deals 25 Physical Damage (100% Scaling) and decreases the victim\'s Move Speed Bonus by -20% for 2 seconds after knocking them backwards.'
        },
        {
            skill: 'Sprint',
            imgSrc: 'img/skill/fighter/Skill_Sprint.png',
            alt: 'Skill Sprint',
            class: 'fighter',
            name: 'Sprint',
            description: 'Gain 3 stacks of Momentum, granting 15 Move Speed Add per stack. Lose 1 stack every 2s.'
        },
        {
            skill: 'Taunt',
            imgSrc: 'img/skill/fighter/Skill_Taunt.png',
            alt: 'Skill Taunt',
            class: 'fighter',
            name: 'Taunt',
            description: 'Increases the aggro value to all monsters within a 7.5m area by 50%. Gain 10% Physical Damage Reduction and 10% Magical Damage Reduction for 8s.'
        },
        {
            skill: 'VictoryStrike',
            imgSrc: 'img/skill/fighter/Skill_VictoryStrike.png',
            alt: 'Skill Victory Strike',
            class: 'fighter',
            name: 'Victory Strike',
            description: 'Your next attack within 10s deals an additional 20% Physical Power Bonus. If the target dies from this attack, heal for 15% Percent Max Health Healing.'
        },
        // Ranger
        {
            skill: 'BackStep',
            imgSrc: 'img/skill/ranger/Skill_BackStep.png',
            alt: 'Skill Back Step',
            class: 'ranger',
            name: 'Back Step',
            description: 'Quickly retreats 4m in 0.2s. It can also be used in the air. 2 Charges.'
        },
        {
            skill: 'FieldRation',
            imgSrc: 'img/skill/ranger/Skill_FieldRation.png',
            alt: 'Skill Field Ration',
            class: 'ranger',
            name: 'Field Ration',
            description: 'Forage food and recover 25 Physical Base Healing. (3 uses, non replenishable).'
        },
        {
            skill: 'ForcefulShot',
            imgSrc: 'img/skill/ranger/Skill_ForcefulShot.png',
            alt: 'Skill Forceful Shot',
            class: 'ranger',
            name: 'Forceful Shot',
            description: 'When using a bow-type weapon, gain the ability to knock targets 2.5m back for 8s.'
        },
        {
            skill: 'Multishot',
            imgSrc: 'img/skill/ranger/Skill_Multishot.png',
            alt: 'Skill Multishot',
            class: 'ranger',
            name: 'Multishot',
            description: 'When using a bow-type weapon, fire 5 arrows at once in cone-shaped dispersion. All 5 arrows deal 100% damage.'
        },
        {
            skill: 'PenetratingShot',
            imgSrc: 'img/skill/ranger/Skill_PenetratingShot.png',
            alt: 'Skill Penetrating Shot',
            class: 'ranger',
            name: 'Penetrating Shot',
            description: 'Gain 50% Physical Headshot Penetration and 25% Armor Penetration for 8s. Limited to ranged (bow/crossbow) weapons.'
        },
        {
            skill: 'QuickFire',
            imgSrc: 'img/skill/ranger/Skill_QuickFire.png',
            alt: 'Skill Quick Fire',
            class: 'ranger',
            name: 'Quick Fire',
            description: 'Gain an additional 50% Action Speed for 8s while using bow-type weapons.'
        },
        {
            skill: 'Quickshot',
            imgSrc: 'img/skill/ranger/Skill_Quickshot.png',
            alt: 'Skill Quickshot',
            class: 'ranger',
            name: 'Quickshot',
            description: 'Fire arrows in a quick succession. Each bow-type will fire a different amount of arrows. (2 for Longbow, 3 for Recurve Bow, 4 for Survival Bow).'
        },
        {
            skill: 'TrueShot',
            imgSrc: 'img/skill/ranger/Skill_TrueShot.png',
            alt: 'Skill True Shot',
            class: 'ranger',
            name: 'True Shot',
            description: 'The next projectile within 8s is no longer affected by gravity and gains 8% Physical Power Bonus.'
        },
        // Rogue
        {
            skill: 'Caltrops',
            imgSrc: 'img/skill/rogue/Skill_Caltrops.png',
            alt: 'Skill Caltrops',
            class: 'rogue',
            name: 'Caltrops',
            description: 'Drops Caltrops at your feet that deal 10 Physical Base Damage and slows by -50% Move Speed Bonus to the next character that steps on them for 3s. Caltrop stays on the ground for 60s. (4 uses, non-replenishable).'
        },
        {
            skill: 'CutThroat',
            imgSrc: 'img/skill/rogue/Skill_CutThroat.png',
            alt: 'Skill Cut Throat',
            class: 'rogue',
            name: 'Cut Throat',
            description: 'When you successfully hit a target, silence them for 2s, disabling the target\'s skills/spells/performance abilities.'
        },
        {
            skill: 'Hide',
            imgSrc: 'img/skill/rogue/Skill_Hide.png',
            alt: 'Skill Hide',
            class: 'rogue',
            name: 'Hide',
            description: 'Become invisible for 8s. It is possible to change your equipment in this state. You are revealed when you attempt an action, such as moving, attacking, using a skill. Additionally, you will be revealed when you are bumped into.'
        },
        {
            skill: 'Rupture',
            imgSrc: 'img/skill/rogue/Skill_Rupture.png',
            alt: 'Skill Rupture',
            class: 'rogue',
            name: 'Rupture',
            description: 'The next successful attack causes the target to bleed for 20 Physical Base Damage over 5s. The Buff is consumed when an attack hits an object or target. Can be stacked up to 5 times if Ruptured multiple times.'
        },
        {
            skill: 'SmokePot',
            imgSrc: 'img/skill/rogue/Skill_SmokePot.png',
            alt: 'Skill Smoke Pot',
            class: 'rogue',
            name: 'Smoke Pot',
            description: 'A smoke pot is deployed creating a smoke screen. The smoke screen lasts 12s and covers a 6m area. While an enemy target is within the smoke screen it slows them by -10% Move Speed Bonus. (3 uses, non-replenishable.)'
        },
        {
            skill: 'Tumbling',
            imgSrc: 'img/skill/rogue/Skill_Tumbling.png',
            alt: 'Skill Tumbling',
            class: 'rogue',
            name: 'Tumbling',
            description: 'When used, backtumbles in the opposite direction the player is facing.'
        },
        {
            skill: 'WeakpointAttack',
            imgSrc: 'img/skill/rogue/Skill_WeakpointAttack.png',
            alt: 'Skill Weakpoint Attack',
            class: 'rogue',
            name: 'Weakpoint Attack',
            description: 'When you successfully hit a target, reduce their armor rating by -40% Item Armor Rating Bonus for 3s. Only when melee attacking.'
        },
        // Warlock
        {
            skill: 'BloodPact',
            imgSrc: 'img/skill/warlock/Skill_BloodPact.png',
            alt: 'Skill Blood Pact',
            class: 'warlock',
            name: 'Blood Pact',
            description: 'Assimilate the contracted demon after casting for 0.3s, and transform into a demon form (total transformation animation of about 3s). While in this form, gain an additional 50 Max Health Add, 30 Armor Rating, and 30 Magical Resistance. Your entire body is covered in Abyssal Flame, taking -2% Percent Max Health Healing damage per second and dealing 2 Fire Fire Magical Base Damage (25% Scaling) per second in 0.2s ticks to characters within 0.5m. You can move during the cast and transformation animations, but once started you can\'t use skills, spells, interact with objects, or cancel the transformation. Additionally, all Darkness Shards are consumed on cast completion, and you gain 1 All Attributes for each Darkness Shard consumed. When you become a demon, your skills change to demon-only skills: Unbind and Exploitation Strike.'
        },
        {
            skill: 'ExploitationStrike',
            imgSrc: 'img/skill/warlock/Skill_ExploitationStrike.png',
            alt: 'Skill Exploitation Strike',
            class: 'warlock',
            name: 'Exploitation Strike',
            description: 'Only available while Blood Pact is active, replacing the non-Blood Pact skill. Deal an additional 4 Evil Evil Magical Base Damage (100% Scaling) over 4s to all enemies you hit with a physical attack within 4s and heals the caster by 5% of the target\'s maximum health, up to 20 per hit. Buff is immediately removed when Unbind cast finishes.'
        },
        {
            skill: 'BlowOfCorruption',
            imgSrc: 'img/skill/warlock/Skill_BlowOfCorruption.png',
            alt: 'Skill Blow of Corruption',
            class: 'warlock',
            name: 'Blow of Corruption',
            description: 'Your next physical attack within 8s deals 12 Evil Evil Magical Base Damage (75% Scaling) to the target and causes them to suffer -80% Incoming Physical Healing Mod and -80% Incoming Magical Healing Mod for 12s. Hitting an obstacle or a shield with the blade (not the hilt) counts as the next attack and will waste the effect.'
        },
        {
            skill: 'DarkOffering',
            imgSrc: 'img/skill/warlock/Skill_DarkOffering.png',
            alt: 'Skill Dark Offering',
            class: 'warlock',
            name: 'Dark Offering',
            description: 'Channel your mind for up to 10s, sacrificing -10% Percent Max Health Healing per 1s to gain 5% Physical Power Bonus and 5% Magical Power Bonus per stack, up to 10 stacks. This bonus lasts for 15s. All stacks are refreshed upon gaining a new stack.'
        },
        {
            skill: 'Phantomize',
            imgSrc: 'img/skill/warlock/Skill_Phantomize.png',
            alt: 'Skill Phantomize',
            class: 'warlock',
            name: 'Phantomize',
            description: 'Phase through melee attacks and projectiles and become untargeteable for 6s. While active, gain 5% Move Speed Bonus and suffer -50% Magical Damage Reduction. During this period you can only move and do not collide with other players or monsters, but are still vulnerable to AoE damage. While active, you will still take damage from active spike traps, but you will not trigger inactive ones. If Phantomize ends while standing on an inactive trap, you will continue to not activate it until you step off it or something else activates it.'
        },
        {
            skill: 'SpellMemory',
            imgSrc: 'img/skill/warlock/Skill_SpellMemory.png',
            alt: 'Skill Spell Memory',
            class: 'warlock',
            name: 'Spell Memory',
            description: 'Gain the ability to memorize spells to use in the dungeon.'
        },
        {
            skill: 'SpellMemoryII',
            imgSrc: 'img/skill/warlock/Skill_SpellMemoryII.png',
            alt: 'Skill Spell Memory II',
            class: 'warlock',
            name: 'Spell Memory II',
            description: 'Gain the ability to memorize additional spells to use in the dungeon.'
        },
        // Wizard
        {
            skill: 'ArcaneShield',
            imgSrc: 'img/skill/wizard/Skill_ArcaneShield.png',
            alt: 'Skill Arcane Shield',
            class: 'wizard',
            name: 'Arcane Shield',
            description: 'Gain a 15 Base Shield (50% Scaling) for 12s. When the maximum amount is absorbed, the shield unleashes an Arcane Explosion, dealing 5 Arcane Arcane Magical Base Damage (100% Scaling) to enemy targets in a 2m radius around you.'
        },
        {
            skill: 'IntenseFocus',
            imgSrc: 'img/skill/wizard/Skill_IntenseFocus.png',
            alt: 'Skill Intense Focus',
            class: 'wizard',
            name: 'Intense Focus',
            description: 'Reduce the cast time of your next spell to 0.1s.'
        },
        {
            skill: 'Meditation',
            imgSrc: 'img/skill/wizard/Skill_Meditation.png',
            alt: 'Skill Meditation',
            class: 'wizard',
            name: 'Meditation',
            description: 'Enter a meditative state and recover spells at a rate of 34 spell cost per 0.75s over 24s. While meditating you are also Resting and can benefit from Campfires.'
        },
        {
            skill: 'SpellMemory',
            imgSrc: 'img/skill/wizard/Skill_SpellMemory.png',
            alt: 'Skill Spell Memory',
            class: 'wizard',
            name: 'Spell Memory',
            description: 'Gain the ability to memorize spells to use in the dungeon.'
        },
        {
            skill: 'SpellMemoryII',
            imgSrc: 'img/skill/wizard/Skill_SpellMemoryII.png',
            alt: 'Skill Spell Memory II',
            class: 'wizard',
            name: 'Spell Memory II',
            description: 'Gain the ability to memorize additional spells to use in the dungeon.'
        },


        // Add more skills as needed
    ];