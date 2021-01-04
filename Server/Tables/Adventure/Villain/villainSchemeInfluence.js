const villainSchemeInfluence = {
  title: 'What is the villain\'s scheme for gaining influence?',
  description: '',
  step: 'villainSchemeInfluence',
  previous: 'villainScheme',
  highRange: 4,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Seize a position of power or title',
      details: '',
      suggestedAdd: ' The villain is seeking to gain influence by seizing a position of power or a title. ',
      next: 'villainMethod',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Win a contest or tournament',
      details: '',
      suggestedAdd: ' The villain is seeking to gain influence by winning a contest or a tournament. ',
      next: 'villainMethod',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Win favor with a powerful individual',
      details: '',
      suggestedAdd: ' The villain is seeking to gain influence by winning favor with a powerful individual. ',
      next: 'villainMethod',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'Place a pawn in a position of power',
      details: '',
      suggestedAdd: ' The villain is seeking to gain influence by placing a pawn in a position of power. ',
      next: 'villainMethod',
    },
  ],
};

module.exports = villainSchemeInfluence;
