const villainSchemeWealth = {
  title: 'What is the villain\'s scheme for gaining wealth?',
  description: '',
  step: 'villainSchemeWealth',
  previous: 'villainScheme',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Control natural resources or trade',
      details: '',
      suggestedAdd: ' The villain is seeking to gain wealth by controling natural resources or trade. ',
      next: 'villainMethod',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Marry into wealth',
      details: '',
      suggestedAdd: ' The villain is seeking to gain wealth by marrying into wealth. ',
      next: 'villainMethod',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Plunder ancient ruins',
      details: '',
      suggestedAdd: ' The villain is seeking to gain wealth by plundering ancient ruins. ',
      next: 'villainMethod',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Steal land, goods, or money',
      details: '',
      suggestedAdd: ' The villain is seeking to gain wealth by stealing land, goods, or money. ',
      next: 'villainMethod',
    },
  ],
};

module.exports = villainSchemeWealth;
