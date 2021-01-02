const adventureDungeonGoals = {
  title: 'What are the heroes\' goals in the dungeon?',
  description: 'The following table provides common goals that drive or lure adventurers into dungeons',
  step: 'adventureDungeonGoals',
  previous: 'adventureType',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Stop the dungeon\'s monstrous inhabitants from raiding the surface world',
      details: '',
      suggestedAdd: ' The heroes need to stop the dungeon\'s monstrous inhabitants from raiding the surface world. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Foil a villain\'s evil scheme',
      details: '',
      suggestedAdd: ' The heroes must enter the dungeon to foil a villain\'s evil scheme. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Destroy a magical threat inside the dungeon',
      details: '',
      suggestedAdd: ' The heroes must destroy a magical threat inside the dungeon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Acquire treasure',
      details: '',
      suggestedAdd: ' The heroes are entering the dungeon to acquire treasure. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'Find a particular item for a specific purpose',
      details: '',
      suggestedAdd: ' The heroes are entering the dungeon to find a particular item for a specific purpose. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'Retrieve a stolen item hidden in the dungeon',
      details: '',
      suggestedAdd: ' The heroes are entering the dungeon to retrieve a stolen item hidden in the dungeon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 7,
      highRange: 7,
      name: 'Find information needed for a special purpose',
      details: '',
      suggestedAdd: ' The heroes are entering the dungeon to find information needed for a special purpose. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'Rescue a captive',
      details: '',
      suggestedAdd: ' The heroes are entering the dungeon to rescue a captive. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 9,
      highRange: 9,
      name: 'Discover the fate of a previous adventuring party',
      details: '',
      suggestedAdd: 'The heroes are entering the dungeon to discover the fate of a previous adventuring party.',
      next: 'adventureVillain',
    },
    {
      lowRange: 10,
      highRange: 10,
      name: 'Find an NPC who disappeared in the area',
      details: '',
      suggestedAdd: ' The heroes are entering the dungeon to find an NPC who disappeared in the area. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 11,
      highRange: 11,
      name: 'Slay a dragon or some other challenging monster',
      details: '',
      suggestedAdd: ' The heroes must enter the dungeon to slay a dragon or some other challenging monster. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 12,
      highRange: 12,
      name: 'Discover the nature and origin of a strange location or phenomenon',
      details: '',
      suggestedAdd: ' The heroes enter the dungeon seeking to discover the nature and origin of a strange location or phenomenon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 13,
      highRange: 13,
      name: 'Pursue fleeing foes taking refuge in the dungeon',
      details: '',
      suggestedAdd: ' The heroes are in pursuit of fleeing foes taking refuge in the dungeon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 14,
      highRange: 14,
      name: 'Escape from captivity in the dungeon',
      details: '',
      suggestedAdd: ' The heroes must escape from captivity in the dungeon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 15,
      highRange: 15,
      name: 'Clear a ruin so it can be rebuilt and reoccupied',
      details: '',
      suggestedAdd: ' The heroes must clear a ruin so it can be rebuilt and reoccupied. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 16,
      highRange: 16,
      name: 'Discover why a villain is interested in the dungeon',
      details: '',
      suggestedAdd: ' The heroes must discover why a villain is interested in the dungeon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 17,
      highRange: 17,
      name: 'Win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time',
      details: '',
      suggestedAdd: ' The heroes seek to win a bet or complete a rite of passage by surviving in the dungeon for a certain amount of time. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 18,
      highRange: 18,
      name: 'Parley with a villain in the dungeon',
      details: '',
      suggestedAdd: 'The heroes seek to parley with a villain in the dungeon',
      next: 'adventureVillain',
    },
    {
      lowRange: 19,
      highRange: 19,
      name: 'Hide from a threat outside the dungeon',
      details: '',
      suggestedAdd: ' The heroes must hide from a threat outside the dungeon. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 20,
      highRange: 20,
      name: 'Roll twice, ignoring results of 20',
      details: '',
      suggestedAdd: '',
      next: 'adventureVillain',
    },
  ],
};

module.exports = adventureDungeonGoals;
