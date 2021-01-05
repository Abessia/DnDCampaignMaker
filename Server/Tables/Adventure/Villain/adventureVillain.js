const adventureVillain = {
  title: 'Who is the main antagonist of this adventure?',
  description: 'By their actions, villains provide job security for heroes.  Putting care into creating your villain will pay off later, since the villain plays such a pivotal role in advancing the story.',
  step: 'adventureVillain',
  previous: [
    'adventureWildernessGoals',
    'adventureDungeonGoals',
    'adventureFramingEvent',
    'adventureEventGoals',
  ],
  highRange: 20,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Beast or monstrosity with no particular agenda',
      details: '',
      suggestedAdd: ' The villain is a beast or monstrosity with no particular agenda. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Aberration bent on corruption or domination',
      details: '',
      suggestedAdd: ' The villain is an aberration bent on corruption or domination. ',
      next: 'villainScheme',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Fiend bent on corruption or destruction',
      details: '',
      suggestedAdd: ' The villain is a fiend bent on corruption or destruction. ',
      next: 'villainScheme',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Dragon bent on domination and plunder',
      details: '',
      suggestedAdd: ' The villain is a dragon bent on domination and plunder. ',
      next: 'villainScheme',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'Giant bent on plunder',
      details: '',
      suggestedAdd: ' The villain is a giant bent on plunder. ',
      next: 'villainScheme',
    },
    {
      lowRange: 6,
      highRange: 7,
      name: 'Undead with any agenda',
      details: '',
      suggestedAdd: ' The villain is an undead with any agenda. ',
      next: 'villainScheme',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'Fey with a mysterious goal',
      details: '',
      suggestedAdd: ' The villain is a fey with a mysterious goal. ',
      next: 'villainScheme',
    },
    {
      lowRange: 9,
      highRange: 10,
      name: 'Humanoid cultist',
      details: '',
      suggestedAdd: ' The villain is a humanoid cultist. ',
      next: 'villainScheme',
    },
    {
      lowRange: 11,
      highRange: 12,
      name: 'Humanoid conqueror',
      details: '',
      suggestedAdd: ' The villain is a humanoid conqueror. ',
      next: 'villainScheme',
    },
    {
      lowRange: 13,
      highRange: 13,
      name: 'Humanoid seeking revenge',
      details: '',
      suggestedAdd: ' The villain is a humanoid seeking revenge. ',
      next: 'villainSchemeRevenge',
    },
    {
      lowRange: 14,
      highRange: 15,
      name: 'Humanoid schemer seeking to rule',
      details: '',
      suggestedAdd: ' The villain is a humanoid schemer seeking to rule. ',
      next: 'villainScheme',
    },
    {
      lowRange: 16,
      highRange: 16,
      name: 'Humanoid criminal mastermind',
      details: '',
      suggestedAdd: ' The villain is a humanoid criminal mastermind. ',
      next: 'villainScheme',
    },
    {
      lowRange: 17,
      highRange: 18,
      name: 'Humanoid raider or ravager',
      details: '',
      suggestedAdd: ' The villain is a humanoid raider or ravager. ',
      next: 'villainScheme',
    },
    {
      lowRange: 19,
      highRange: 19,
      name: 'Humanoid under a curse',
      details: '',
      suggestedAdd: ' The villain is a humanoid under a curse. ',
      next: 'villainScheme',
    },
    {
      lowRange: 20,
      highRange: 20,
      name: 'Misguided humanoid zealot',
      details: '',
      suggestedAdd: ' The villain is a misguided humanoid zealot. ',
      next: 'villainScheme',
    },
  ],
};

module.exports = adventureVillain;