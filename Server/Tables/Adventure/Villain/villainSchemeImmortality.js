const villainSchemeImmortality = {
  title: 'What is the villain\'s scheme for gaining immortality?',
  description: '',
  step: 'villainSchemeImmortality',
  previous: 'villainScheme',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Acquire a legendary item to prolong life',
      details: '',
      suggestedAdd: ' The villain is seeking to gain immortality by acquiring a legendary item to prolong their life. ',
      next: 'villainMethod',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Ascend to godhood',
      details: '',
      suggestedAdd: ' The villain is seeking to gain immortality by ascending to godhood. ',
      next: 'villainMethod',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Become undead or obtain a younger body',
      details: '',
      suggestedAdd: ' The villain is seeking to gain immortality by becoming undead or obtaining a younger body. ',
      next: 'villainMethod',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Steal a planar creature\'s essence',
      details: '',
      suggestedAdd: ' The villain is seeking to gain immortality by stealing a planar creature\'s essence. ',
      next: 'villainMethod',
    },
  ],
};

module.exports = villainSchemeImmortality;
