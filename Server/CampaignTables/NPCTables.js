// NPC TABLES (DMG ch 4, 9; Basic-Rules)
const npcStart = require('./NPCs/npcStart');

// Villain Scheme
const villainScheme = require('./NPCs/Villain/villainScheme');
const villainSchemeImmortality = require('./NPCs/Villain/villainSchemeImmortality');
const villainSchemeInfluence = require('./NPCs/Villain/villainSchemeInfluence');
const villainSchemeMagic = require('./NPCs/Villain/villainSchemeMagic');
const villainSchemeMayhem = require('./NPCs/Villain/villainSchemeMayhem');
const villainSchemePassion = require('./NPCs/Villain/villainSchemePassion');
const villainSchemePower = require('./NPCs/Villain/villainSchemePower');
const villainSchemeRevenge = require('./NPCs/Villain/villainSchemeRevenge');
const villainSchemeWealth = require('./NPCs/Villain/villainSchemeWealth');

// Villain Method
const villainMethod = require('./NPCs/Villain/villainMethod');
const villainMethodAgriculture = require('./NPCs/Villain/villainMethodAgriculture');
const villainMethodCoercion = require('./NPCs/Villain/villainMethodCoercion');
const villainMethodScam = require('./NPCs/Villain/villainMethodScam');
const villainMethodDefamation = require('./NPCs/Villain/villainMethodDefamation');
const villainMethodMagic = require('./NPCs/Villain/villainMethodMagic');
const villainMethodMurder = require('./NPCs/Villain/villainMethodMurder');
const villainMethodPolitics = require('./NPCs/Villain/villainMethodPolitics');
const villainMethodReligion = require('./NPCs/Villain/villainMethodReligion');
const villainMethodTheft = require('./NPCs/Villain/villainMethodTheft');
const villainMethodTorture = require('./NPCs/Villain/villainMethodTorture');
const villainMethodVice = require('./NPCs/Villain/villainMethodVice');
const villainMethodWarfare = require('./NPCs/Villain/villainMethodWarfare');

// Villain Details
const villainWeakness = require('./NPCs/Villain/villainWeakness');
const villainType = require('./NPCs/Villain/villainType');

// Monster Type
const monsterType = require('./NPCs/Monsters/monsterType');
const monsterAberration = require('./NPCs/Monsters/monsterAberration');
const monsterCelestial = require('./NPCs/Monsters/monsterCelestial');
const monsterConstruct = require('./NPCs/Monsters/monsterConstruct');
const monsterDragon = require('./NPCs/Monsters/monsterDragon');
const monsterElemental = require('./NPCs/Monsters/monsterElemental');
const monsterFey = require('./NPCs/Monsters/monsterFey');
const monsterFiend = require('./NPCs/Monsters/monsterFiend');
const monsterGiant = require('./NPCs/Monsters/monsterGiant');
const monsterHumanoid = require('./NPCs/Monsters/monsterHumanoid');
const monsterMonstrosity = require('./NPCs/Monsters/monsterMonstrosity');
const monsterPlant = require('./NPCs/Monsters/monsterPlant');
const monsterUndead = require('./NPCs/Monsters/monsterUndead');

// NPC Type
const npcStatBlock = require('./NPCs/npcStatBlock');
const npcClass = require('./NPCs/npcClass');
const npcStatRace = require('./NPCs/npcStatRace');
const npcClassRace = require('./NPCs/npcClassRace');

// Subclasses
const subclassArtificer = require('./NPCs/Subclasses/subclassArtificer');
const subclassBarbarian = require('./NPCs/Subclasses/subclassBarbarian');
const subclassBard = require('./NPCs/Subclasses/subclassBard');
const subclassBloodHunter = require('./NPCs/Subclasses/subclassBloodHunter');
const subclassCleric = require('./NPCs/Subclasses/subclassCleric');
const subclassDruid = require('./NPCs/Subclasses/subclassDruid');
const druidLand = require('./NPCs/Subclasses/druidLand');
const subclassFighter = require('./NPCs/Subclasses/subclassFighter');
const battlemasterArchetype = require('./NPCs/Subclasses/battlemasterArchetype');
const subclassMonk = require('./NPCs/Subclasses/subclassMonk');
const subclassPaladin = require('./NPCs/Subclasses/subclassPaladin');
const subclassRanger = require('./NPCs/Subclasses/subclassRanger');
const subclassRogue = require('./NPCs/Subclasses/subclassRogue');
const subclassSorcerer = require('./NPCs/Subclasses/subclassSorcerer');
const subclassWarlock = require('./NPCs/Subclasses/subclassWarlock');
const subclassWizard = require('./NPCs/Subclasses/subclassWizard');

// Subraces
const humanRaces = require('./NPCs/Subraces/humanRaces');
const commonRaces = require('./NPCs/Subraces/commonRaces');
const subraceDwarf = require('./NPCs/Subraces/subraceDwarf');
const subraceElf = require('./NPCs/Subraces/subraceElf');
const subraceHalfling = require('./NPCs/Subraces/subraceHalfling');
const subraceHalfElf = require('./NPCs/Subraces/subraceHalfElf');
const uncommonRaces = require('./NPCs/Subraces/uncommonRaces');
const subraceDragonborn = require('./NPCs/Subraces/subraceDragonborn');
const subraceGnome = require('./NPCs/Subraces/subraceGnome');
const monstrousRaces = require('./NPCs/Subraces/monstrousRaces');
const subraceShifter = require('./NPCs/Subraces/subraceShifter');
const planarRaces = require('./NPCs/Subraces/planarRaces');
const subraceGenasi = require('./NPCs/Subraces/subraceGenasi');
const subraceTiefling = require('./NPCs/Subraces/subraceTiefling');
const subraceAasimar = require('./NPCs/Subraces/subraceAasimar');
const subraceGith = require('./NPCs/Subraces/subraceGith');

// NPC Details
const npcAppearance = require('./NPCs/npcAppearance');
const npcHighAbility = require('./NPCs/npcHighAbility');
const npcLowAbility = require('./NPCs/npcLowAbility');
const npcTalent = require('./NPCs/npcTalent');
const npcMannerism = require('./NPCs/npcMannerism');
const npcInteraction = require('./NPCs/npcInteraction');
const npcAlignment = require('./NPCs/npcAlignment');
const npcGoodIdeal = require('./NPCs/npcGoodIdeal');
const npcEvilIdeal = require('./NPCs/npcEvilIdeal');
const npcLawfulIdeal = require('./NPCs/npcLawfulIdeal');
const npcChaoticIdeal = require('./NPCs/npcChaoticIdeal');
const npcNeutralIdeal = require('./NPCs/npcNeutralIdeal');
const npcBond = require('./NPCs/npcBond');
const npcFlaw = require('./NPCs/npcFlaw');

// MenuList
const npcMenu = [
  { table: 'npcStart', name: '4.1 NPC Type' },
  { table: 'villainMethod', name: '4.2 Villain Method' },
  { table: 'villainScheme', name: '4.3 Villain Scheme' },
  { table: 'villainWeakness', name: '4.4 Villain Weakness' },
  { table: 'monsterType', name: '4.5 Monstrous NPC' },
  { table: 'npcStatBlock', name: '4.6a NPC with StatBlock' },
  { table: 'npcClass', name: '4.6b NPC with Class Levels' },
  { table: 'npcStatRace', name: '4.7a NPC Race (StatBlock)' },
  { table: 'npcClassRace', name: '4.7b NPC Race (Class Levels)' },
  { table: 'npcAppearance', name: '4.8 Appearance' },
  { table: 'npcHighAbility', name: '4.9 High Ability' },
  { table: 'npcLowAbility', name: '4.10 Low Ability' },
  { table: 'npcTalent', name: '4.11 Talent' },
  { table: 'npcMannerism', name: '4.12 Mannerism' },
  { table: 'npcInteraction', name: '4.13 Interaction' },
  { talbe: 'npcAlignment', name: '4.14 Alignment and Ideal' },
  { table: 'npcBond', name: '4.15 Bond' },
  { table: 'npcFlaw', name: '4.16 Flaw / Secret' },
];

module.exports = {
  npcMenu,
  npcStart,
  villainScheme,
  villainSchemeImmortality,
  villainSchemeInfluence,
  villainSchemeMagic,
  villainSchemeMayhem,
  villainSchemePassion,
  villainSchemePower,
  villainSchemeRevenge,
  villainSchemeWealth,
  villainMethod,
  villainMethodAgriculture,
  villainMethodCoercion,
  villainMethodDefamation,
  villainMethodMagic,
  villainMethodMurder,
  villainMethodPolitics,
  villainMethodReligion,
  villainMethodScam,
  villainMethodTheft,
  villainMethodTorture,
  villainMethodVice,
  villainMethodWarfare,
  villainWeakness,
  villainType,
  monsterType,
  monsterAberration,
  monsterCelestial,
  monsterHumanoid,
  monsterConstruct,
  monsterDragon,
  monsterElemental,
  monsterFiend,
  monsterFey,
  monsterGiant,
  monsterMonstrosity,
  monsterPlant,
  monsterUndead,
  npcStatBlock,
  npcClass,
  subclassArtificer,
  subclassBarbarian,
  subclassBard,
  subclassBloodHunter,
  subclassCleric,
  subclassDruid,
  druidLand,
  subclassFighter,
  battlemasterArchetype,
  subclassMonk,
  subclassPaladin,
  subclassRanger,
  subclassRogue,
  subclassSorcerer,
  subclassWarlock,
  subclassWizard,
  npcStatRace,
  npcClassRace,
  humanRaces,
  commonRaces,
  uncommonRaces,
  monstrousRaces,
  planarRaces,
  subraceDwarf,
  subraceElf,
  subraceHalfling,
  subraceHalfElf,
  subraceDragonborn,
  subraceGnome,
  subraceShifter,
  subraceGenasi,
  subraceTiefling,
  subraceAasimar,
  subraceGith,
  npcAppearance,
  npcHighAbility,
  npcLowAbility,
  npcTalent,
  npcMannerism,
  npcInteraction,
  npcAlignment,
  npcGoodIdeal,
  npcEvilIdeal,
  npcNeutralIdeal,
  npcLawfulIdeal,
  npcChaoticIdeal,
  npcBond,
  npcFlaw,
};
