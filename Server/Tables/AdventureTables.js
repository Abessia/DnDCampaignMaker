// ADVENTURE TABLES (DMG Chapter 3 supplemented with some of Chapter 4)
const adventureType = require('./Adventure/adventureType');

// Character and Villain Goals
const adventureDungeonGoals = require('./Adventure/adventureDungeonGoals');
const adventureWildernessGoals = require('./Adventure/adventureWildernessGoals');
const adventureOtherGoals = require('./Adventure/adventureOtherGoals');
const adventureFramingEvents = require('./Adventure/adventureFramingEvents');
const adventureVillainActions = require('./Adventure/Villain/adventureVillainActions');
const adventureEventGoals = require('./Adventure/adventureEventGoals');

// Key NPCs
const adventureVillain = require('./Adventure/Villain/adventureVillain');
const adventureAlly = require('./Adventure/adventureAlly');
const adventurePatron = require('./Adventure/adventurePatron');

// Adventure's Sequence
const adventureIntroduction = require('./Adventure/adventureIntroduction');
const adventureMoralQuandary = require('./Adventure/adventureMoralQuandary');
const adventureTwist = require('./Adventure/adventureTwist');
const adventureSideQuest = require('./Adventure/adventureSideQuest');
const adventureClimax = require('./Adventure/adventureClimax');

// Villain's Scheme
const villainScheme = require('./Adventure/Villain/villainScheme');
const villainSchemeImmortality = require('./Adventure/Villain/villainSchemeImmortality');
const villainSchemeInfluence = require('./Adventure/Villain/villainSchemeInfluence');
const villainSchemeMagic = require('./Adventure/Villain/villainSchemeMagic');
const villainSchemeMayhem = require('./Adventure/Villain/villainSchemeMayhem');
const villainSchemePassion = require('./Adventure/Villain/villainSchemePassion');
const villainSchemePower = require('./Adventure/Villain/villainSchemePower');
const villainSchemeRevenge = require('./Adventure/Villain/villainSchemeRevenge');
const villainSchemeWealth = require('./Adventure/Villain/villainSchemeWealth');

// Villain's Method
const villainMethod = require('./Adventure/Villain/villainMethod');
const villainMethodAgriculture = require('./Adventure/Villain/villainMethodAgriculture');
const villainMethodCoercion = require('./Adventure/Villain/villainMethodCoercion');
const villainMethodScam = require('./Adventure/Villain/villainMethodScam');
const villainMethodDefamation = require('./Adventure/Villain/villainMethodDefamation');
const villainMethodMagic = require('./Adventure/Villain/villainMethodMagic');
const villainMethodMurder = require('./Adventure/Villain/villainMethodMurder');
const villainMethodPolitics = require('./Adventure/Villain/villainMethodPolitics');
const villainMethodReligion = require('./Adventure/Villain/villainMethodReligion');
const villainMethodTheft = require('./Adventure/Villain/villainMethodTheft');
const villainMethodTorture = require('./Adventure/Villain/villainMethodTorture');
const villainMethodVice = require('./Adventure/Villain/villainMethodVice');
const villainMethodWarfare = require('./Adventure/Villain/villainMethodWarfare');

// Villain's Weakness
const villainWeakness = require('./Adventure/Villain/villainWeakness');

module.exports = {
  adventureType,
  adventureDungeonGoals,
  adventureWildernessGoals,
  adventureOtherGoals,
  adventureFramingEvents,
  adventureVillainActions,
  adventureEventGoals,
  adventureVillain,
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
  villainMethodScam,
  villainMethodDefamation,
  villainMethodMagic,
  villainMethodMurder,
  villainMethodPolitics,
  villainMethodReligion,
  villainMethodTheft,
  villainMethodTorture,
  villainMethodVice,
  villainMethodWarfare,
  villainWeakness,
  adventureAlly,
  adventurePatron,
  adventureIntroduction,
  adventureMoralQuandary,
  adventureTwist,
  adventureSideQuest,
  adventureClimax,
};
