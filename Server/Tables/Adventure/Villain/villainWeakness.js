const villainWeakness = {
  title: 'What is the villain\'s secret weakness?',
  description: 'Finding and exploting a villain\'s weakness can be very gratifying for players, although a smart villain tries to conceal its weakness.',
  step: 'villainWeakness',
  previous: 'villainMethod',
  highRange: 8,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'A hidden object holds the villain\'s soul',
      details: '',
      suggestedAdd: ' A hidden object holds the villain\'s soul. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'The villain’s power is broken if the death of its true love is avenged',
      details: '',
      suggestedAdd: ' The villain’s power is broken if the death of its true love is avenged. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'The villain is weakened in the presence of a particular artifact',
      details: '',
      suggestedAdd: ' The villain is weakened in the presence of a particular artifact. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'A special weapon deals extra damage when used against the villain',
      details: '',
      suggestedAdd: ' A special weapon deals extra damage when used against the villain. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'The villain is destroyed if it speaks its true name',
      details: '',
      suggestedAdd: ' The villain is destroyed if it speaks its true name. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'An ancient prophecy or riddle reveals how the villain can be overthrown',
      details: '',
      suggestedAdd: ' An ancient prophecy or riddle reveals how the villain can be overthrown. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 7,
      highRange: 7,
      name: 'The villain falls when an ancient enemy forgives its past actions',
      details: '',
      suggestedAdd: ' The villain falls when an ancient enemy forgives its past actions. ',
      next: 'adventureAlly',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'The villain loses its power if a mystic bargain it struck long ago is completed',
      details: '',
      suggestedAdd: ' The villain loses its power if a mystic bargain it struck long ago is completed. ',
      next: 'adventureAlly',
    },
  ],
};

module.exports = villainWeakness;
