const villainSchemePower = {
  title: 'What is the villain\'s scheme for gaining power?',
  description: '',
  step: 'villainSchemePower',
  previous: 'villainScheme',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Conquer a region or incite a rebellion',
      details: '',
      suggestedAdd: ' The villain is seeking to gain power by conquering a region or inciting a rebellion. ',
      next: 'villainMethod',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Seize control of an army',
      details: '',
      suggestedAdd: ' The villain is seeking to gain power by seizing control of an army. ',
      next: 'villainMethod',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Become the power behind the throne',
      details: '',
      suggestedAdd: ' The villain is seeking to gain power by becoming the power behind the throne. ',
      next: 'villainMethod',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Gain the favor of a ruler',
      details: '',
      suggestedAdd: ' The villain is seeking to gain power by gaining the favor of a ruler. ',
      next: 'villainMethod',
    },
  ],
};

module.exports = villainSchemePower;
