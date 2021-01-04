const villainMethodDefamation = {
  title: 'How does the villain defame their target?',
  description: '',
  step: 'villainMethodDefamation',
  previous: 'villainMethod',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Framing',
      details: '',
      suggestedAdd: ' The villain pursues their goals by framing someone. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Gossiping or Slander',
      details: '',
      suggestedAdd: ' The villain pursues their goals by means of gossip and slander. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Humiliation',
      details: '',
      suggestedAdd: ' The villain pursues their goals by humiliating someone. ',
      next: 'villainWeakness',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Libel or Insults',
      details: '',
      suggestedAdd: ' The villain pursues their goals through libel or insults. ',
      next: 'villainWeakness',
    },
  ],
};

module.exports = villainMethodDefamation;
