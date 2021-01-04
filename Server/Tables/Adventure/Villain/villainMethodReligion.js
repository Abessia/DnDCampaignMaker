const villainMethodReligion = {
  title: 'How does the villain make use of religion?',
  description: '',
  step: 'villainMethodReligion',
  previous: 'villainMethod',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Curses',
      details: '',
      suggestedAdd: ' The villain uses religious curses in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Desecration',
      details: '',
      suggestedAdd: ' The villain desecrates religious places in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'False Gods',
      details: '',
      suggestedAdd: ' While pursuing their goals, the villain either promotes false deities or hatefully accuses others of false worship. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Heresy or Cults',
      details: '',
      suggestedAdd: ' The villain either accuses people of heresy or makes use of heretical and cultic sects in pursuit of their goals. ',
      next: 'villainWeakness',
    },
  ],
};

module.exports = villainMethodReligion;
