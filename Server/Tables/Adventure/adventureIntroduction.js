const adventureIntroduction = {
  title: 'How does this adventure begin?',
  description: 'An adventure can begin with a social interaction encounter in which the adventurers find out what they must do and why. It can start with a surprise attack, or with the adventurers coming across information by accident. The best introductions arise naturally from the goals and setting of the adventure. References to the "adventure location" below can be changed to reflect non-location-based adventures.',
  step: 'adventureIntroduction',
  previous: 'adventurePatron',
  highRange: 12,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'While traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when, while traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'While traveling in the wilderness, the characters notice the entrance to the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when, while traveling in the wilderness, the characters notice the entrance to an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'While traveling on a road, the characters are attacked by monsters that flee into the nearby adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when, while traveling on a road, the characters are attacked by monsters that flee into a nearby adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'The adventurers find a map on a dead body. In addition to the map setting up the adventure, the adventure’s villain wants the map',
      details: '',
      suggestedAdd: ' The adventure begins when the adventurers find a map on a dead body. In addition to the map setting up the adventure, the adventure’s villain wants the map. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'A mysterious magic item or a cruel villain teleports the characters to the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when a mysterious magic item or a cruel villain teleports the characters to an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'A stranger approaches the characters in a tavern and urges them toward the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when a stranger approaches the characters in a tavern and urges them towards an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 7,
      highRange: 7,
      name: 'A town or village needs volunteers to go to the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when a town or village needs volunteers to go to an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'An NPC the characters care about needs them to go to the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when an NPC the characters care about needs them to go to an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 9,
      highRange: 9,
      name: 'An NPC the characters must obey orders them to go to the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when An NPC the characters must obey orders them to go to an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 10,
      highRange: 10,
      name: 'An NPC the characters respect asks them to go to the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when an NPC the characters respect asks them to go to an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 11,
      highRange: 11,
      name: 'One night, the characters all dream about entering the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when, one night, the characters all dream about entering an adventure location. ',
      next: 'adventureMoralQuandary',
    },
    {
      lowRange: 12,
      highRange: 12,
      name: 'A ghost appears and terrorizes a village. Research reveals that it can be put to rest only by entering the adventure location',
      details: '',
      suggestedAdd: ' The adventure begins when a ghost appears and terrorizes a village. Research reveals that it can be put to rest only by entering the adventure location. ',
      next: 'adventureMoralQuandary',
    },
  ],
};

module.exports = adventureIntroduction;
