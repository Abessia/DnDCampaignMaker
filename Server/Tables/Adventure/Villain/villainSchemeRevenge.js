const villainSchemeRevenge = {
  title: 'What does the villain want to accomplish with their revenge?',
  description: '',
  step: 'villainSchemeRevenge',
  previous: 'villainScheme',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Avenge a past humiliation or insult',
      details: '',
      suggestedAdd: ' The villain is seeking to avenge a past humiliation or insult. ',
      next: 'villainMethod',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Avenge a past imprisonment or injury',
      details: '',
      suggestedAdd: ' The villain is seeking to avenge a past imprisonment or injury. ',
      next: 'villainMethod',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Avenge the death of a loved one',
      details: '',
      suggestedAdd: ' The villain is seeking to avenge the death of a loved one. ',
      next: 'villainMethod',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Retrieve stolen property and punish the thief',
      details: '',
      suggestedAdd: ' The villain is seeking to retrieve stolen property and punish the thief. ',
      next: 'villainMethod',
    },
  ],
};

module.exports = villainSchemeRevenge;
