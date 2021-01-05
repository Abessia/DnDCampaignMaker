const villainMethodPolitics = {
  title: 'What form of political action does the villain use?',
  description: '',
  step: 'villainMethodPolitics',
  previous: 'villainMethod',
  highRange: 6,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Betrayal or Treason',
      details: '',
      suggestedAdd: ' The villain pursues their goals via political betrayal or treason. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Conspiracy',
      details: '',
      suggestedAdd: ' The villain pursues their goals by means of political conspiracies. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Espionage or Spying',
      details: '',
      suggestedAdd: ' The villain pursues their goals through political espionage and spying. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Genocide',
      details: '',
      suggestedAdd: ' The villain pursues their goals by means of genocide. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'Oppression',
      details: '',
      suggestedAdd: ' The villain pursues their goals via political oppression. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'Raising Taxes',
      details: '',
      suggestedAdd: ' The villain pursues their goals by means of heavy taxation. ',
      next: 'villainWeakness',
    },
  ],
};

module.exports = villainMethodPolitics;