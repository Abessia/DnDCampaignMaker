const adventurePatron = {
  title: 'Who sent the heroes on this adventure or sponsors and supports their progress?',
  description: 'While not required, many adventures include patrons -- figures who interface between the heroes and the local political powers, or who help fund the heroes, or who simply tip the heroes off and send them on their quest.',
  step: 'adventurePatron',
  previous: 'adventureAlly',
  highRange: 20,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 2,
      name: 'Retired Adventurer',
      details: '',
      suggestedAdd: ' A retired adventurer advises the heroes in their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 3,
      highRange: 4,
      name: 'Local Ruler',
      details: '',
      suggestedAdd: ' A local ruler sponsors and oversees the heroes\' progress. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 5,
      highRange: 6,
      name: 'Military Officer',
      details: '',
      suggestedAdd: ' A military officer works to help the heroes in their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 7,
      highRange: 8,
      name: 'Temple Official',
      details: '',
      suggestedAdd: ' A temple official advises the heroes in their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 9,
      highRange: 10,
      name: 'Sage',
      details: '',
      suggestedAdd: ' A sage advises the heroes in their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 11,
      highRange: 12,
      name: 'Respected Elder',
      details: '',
      suggestedAdd: ' A respected elder advises and advocates for the heroes. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 13,
      highRange: 13,
      name: 'Deity or Celestial',
      details: '',
      suggestedAdd: ' A deity or celestial ordains and blesses the heroes to complete their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 14,
      highRange: 14,
      name: 'Mysterious Fey',
      details: '',
      suggestedAdd: ' A mysterious fey cryptically advises the heroes, providing them with a spark of glamour or luck in their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 15,
      highRange: 15,
      name: 'Old Friend',
      details: '',
      suggestedAdd: ' An old friend asks the heroes for their help, or supports them in their adventure. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 16,
      highRange: 16,
      name: 'Former Teacher',
      details: '',
      suggestedAdd: ' A former teacher advises the heroes in their adventure, or sends them on their quest (as a favor or as one final lesson). ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 17,
      highRange: 17,
      name: 'Parent or Other Family Member',
      details: '',
      suggestedAdd: ' A parent or family member supports the heroes in their adventures, or comes to them in desperation asking for their help. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 18,
      highRange: 18,
      name: 'Desperate Commoner',
      details: '',
      suggestedAdd: ' A desperate commoner begs the heroes for help, sending them on their quest. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 19,
      highRange: 19,
      name: 'Embattled Merchant',
      details: '',
      suggestedAdd: ' An embattled merchant finances the heroes in their adventure in exchange for their assistance. ',
      next: 'adventureIntroduction',
    },
    {
      lowRange: 20,
      highRange: 20,
      name: 'Villain Posing as a Patron',
      details: '',
      suggestedAdd: ' The villain or one of their close allies appears to sponsor or support the heroes, while secretely undermining their progress. ',
      next: 'adventureIntroduction',
    },
  ],
};

module.exports = adventurePatron;