const villainMethodExecution = {
  title: 'What means of execution does the villain use?',
  description: '',
  step: 'villainMethodExecution',
  previous: 'villainMethod',
  highRange: 8,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Beheading',
      details: '',
      suggestedAdd: ' The villain is seeking to behead people in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Burning at the Stake',
      details: '',
      suggestedAdd: ' The villain is seeking to burn people at the stake in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Burying Alive',
      details: '',
      suggestedAdd: ' The villain is seeking to bury people alive in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Crucifixion',
      details: '',
      suggestedAdd: ' The villain is seeking to crucify people in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'Drawing and Quartering',
      details: '',
      suggestedAdd: ' The villain is seeking to draw and quarter people in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'Hanging',
      details: '',
      suggestedAdd: ' The villain is seeking to hang people in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 7,
      highRange: 7,
      name: 'Impalement',
      details: '',
      suggestedAdd: ' The villain is seeking to impale people in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'Shackling',
      details: '',
      suggestedAdd: ' The villain is seeking to sacrifice living people in pursuit of their goals. ',
      next: 'villainWeakness',
    },
  ],
};

module.exports = villainMethodExecution;