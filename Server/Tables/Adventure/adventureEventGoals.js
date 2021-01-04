const adventureEventGoals = {
  title: 'What are the heroes\' goals during the adventure\'s events?',
  description: 'Use the following table to set the party\'s goal.  A goal can also suggest ways in which the adventurers become caught up in the villain\'s plans, and what they must do to foil those plans.',
  step: 'adventureEventGoals',
  previous: 'adventureVillainActions',
  highRange: 20,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Bring the villain to justice',
      details: '',
      suggestedAdd: ' In contrast, the heroes are trying to bring the villain to justice. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Clear the name of an innocent NPC',
      details: '',
      suggestedAdd: ' The heroes get involved in order to clear the name of an innocent NPC. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Protect or hide an NPC',
      details: '',
      suggestedAdd: ' The heroes, in contrast, are trying to protect or hide an NPC. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Protect an object',
      details: '',
      suggestedAdd: ' In contrast, the heroes are seeking to protect an object. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'Discover the nature and origin of a strange phenomenon that might be the villain’s doing',
      details: '',
      suggestedAdd: ' The heroes get involved when they start trying to discover the nature and origin of a strange phenomenon that might be the villain\'s doing. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'Find a wanted fugitive',
      details: '',
      suggestedAdd: ' The heroes become involved when trying to find a wanted fugitive. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 7,
      highRange: 7,
      name: 'Overthrow a tyrant',
      details: '',
      suggestedAdd: ' The heroes get involved while trying to overthrow a tyrant. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'Uncover a conspiracy to overthrow a ruler',
      details: '',
      suggestedAdd: ' In contrast, the heroes are trying to uncover a conspiracy to overthrow a ruler. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 9,
      highRange: 9,
      name: 'Negotiate peace between enemy nations or feuding families',
      details: '',
      suggestedAdd: ' The heroes become involved while trying to negotiate peace between enemy nations or feuding families. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 10,
      highRange: 10,
      name: 'Secure aid from a ruler or council',
      details: '',
      suggestedAdd: ' The heroes get involved when trying to secure aid from a ruler or council. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 11,
      highRange: 11,
      name: 'Help a villain find redemption',
      details: '',
      suggestedAdd: ' In contrast, the heroes want to help a villain find redemption. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 12,
      highRange: 12,
      name: 'Parley with a villain',
      details: '',
      suggestedAdd: ' The heroes, in contrast, are seeking to parley with a villain. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 13,
      highRange: 13,
      name: 'Smuggle weapons to rebel forces',
      details: '',
      suggestedAdd: ' The heroes get involved while trying to smuggle weapons to rebel forces. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 14,
      highRange: 14,
      name: 'Stop a band of smugglers',
      details: '',
      suggestedAdd: ' The heroes get involved while trying to stop a band of smugglers. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 15,
      highRange: 15,
      name: 'Gather intelligence on an enemy force',
      details: '',
      suggestedAdd: ' The heroes get involved while trying to gather intelligence on an enemy force. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 16,
      highRange: 16,
      name: 'Win a tournament',
      details: '',
      suggestedAdd: ' The heroes get involved while seeking to win a tournament. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 17,
      highRange: 17,
      name: 'Determine the villain’s identity',
      details: '',
      suggestedAdd: ' The heroes, in contrast, are trying to determine the villain\'s identity. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 18,
      highRange: 18,
      name: 'Locate a stolen item',
      details: '',
      suggestedAdd: ' The heroes get involved while trying to locate a stolen item. ',
      next: 'adventureVillain',
    },
    {
      lowRange: 19,
      highRange: 19,
      name: 'Make sure a wedding goes off without a hitch',
      details: '',
      suggestedAdd: ' The heroes get involved when trying to make sure a wedding goes off without a hitch. ',
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

module.exports = adventureEventGoals;
