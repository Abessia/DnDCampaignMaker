const villainSchemePassion = {
  title: 'To what goal or end does the villain\'s passion drive them?',
  description: '',
  step: 'villainSchemePassion',
  previous: 'villainScheme',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Prolong the life of a loved one',
      details: '',
      suggestedAdd: ' The villain\'s actions are driven by their desire to prolong the life of a loved one. ',
      next: 'villainMethod',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Prove worthy of another person\'s love',
      details: '',
      suggestedAdd: ' The villain\'s actions are drive by their desire to prove themselves worthy of another person\'s love. ',
      next: 'villainMethod',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Raise or restore a dead loved one',
      details: '',
      suggestedAdd: ' The villain\'s passion drives them to attempt to raise or restore a dead loved one. ',
      next: 'villainMethod',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Destroy rivals for another person\'s affection',
      details: '',
      suggestedAdd: ' The villain\'s passion drives them to destroy rivals for another person\'s affection. ',
      next: 'villainMethod',
    },
  ],
};

module.exports = villainSchemePassion;
