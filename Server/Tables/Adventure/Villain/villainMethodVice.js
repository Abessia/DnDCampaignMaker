const villainMethodVice = {
  title: 'What is the villain\'s vice of preference when pursuing their goals?',
  description: '',
  step: 'villainMethodVice',
  previous: 'villainMethod',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Adultery',
      details: '',
      suggestedAdd: ' The villain weilds adultery (or the accusation of adultery) like a weapon in pursuit of their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Drugs or Alcohol',
      details: '',
      suggestedAdd: ' The villain sells, gets people addicted to, or aggressively arrests people associated with drugs or alcohol. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Gambling',
      details: '',
      suggestedAdd: ' The villain draws people into bad bets or gamples while pursuing their goals. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Seduction',
      details: '',
      suggestedAdd: ' The villain seduces others, or aggressively persecutes those they see as "sexually licenscious," while in pursuit of their goals. ',
      next: 'villainWeakness',
    },
  ],
};

module.exports = villainMethodVice;
