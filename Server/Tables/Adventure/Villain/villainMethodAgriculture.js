const villainMethodAgriculture = {
  title: 'What agricultural devastation does the villain hope to achieve?',
  description: '',
  step: 'villainMethodAgriculture',
  previous: 'villainMethod',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Blight',
      details: '',
      suggestedAdd: ' The villain is pursuing their goal by causing a devastating blight on the local agriculture. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Crop Failure',
      details: '',
      suggestedAdd: ' The villain is pursuing their goal by bringing a devastating crop failure on the local agriculture. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Drought',
      details: '',
      suggestedAdd: ' The villain is pursuing their goal by causing a devastating drought on the local agriculture. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Famine',
      details: '',
      suggestedAdd: ' The villain is pursuing their goal by causing a devastating famine. ',
      next: 'villainWeakness',
    },
  ],
};

module.exports = villainMethodAgriculture;
