const adventureType = {
  title: 'What is the Context for Your Adventure?',
  description: 'Adventures set in crumbling dungeons and remote wilderness locations are the cornerstone of countless campaigns.\n\nIn an event-based adventure, the focus is on what the characters and villains do and what happens as a result.\n\nA mystery is a form of event-based adventure that usually focuses on the adventurers\' efforts to solve a crime, usually a robbery or murder.\n\nIntrigue adventures are event-based adventures that revolve around power struggles.',
  step: 'adventure-type',
  previous: 'none',
  rows: [
    {
      lowRange: 0,
      highRange: 20,
      name: 'The Wilderness',
      details: '',
      suggestedAdd: 'This adventure focuses on the wilderness.',
      next: 'adventureWildernessGoals',
    },
    {
      lowRange: 21,
      highRange: 40,
      name: 'The Dungeon',
      details: '',
      suggestedAdd: 'This adventure focuses on a dungeon.',
      next: 'adventureDungeonGoals',
    },
    {
      lowRange: 41,
      highRange: 50,
      name: 'Other Location',
      details: '',
      suggestedAdd: 'This adventure focuses on a location other than the wilds or a dungeon.',
      next: 'adventureOtherGoals',
    },
    {
      lowRange: 51,
      highRange: 70,
      name: 'Event-Based',
      details: '',
      suggestedAdd: 'This adventure centers around a central event.',
      next: 'adventureVillainActions',
    },
    {
      lowRange: 71,
      highRange: 85,
      name: 'Mystery',
      details: '',
      suggestedAdd: 'This adventure centers around the adventurers\' attempts to solve a crime or uncover hidden information.',
      next: 'adventureVillainActions',
    },
    {
      lowRange: 86,
      highRange: 100,
      name: 'Intrigue',
      details: '',
      suggestedAdd: 'This adventure focuses on the adventurers\' attempts to navigate social power-struggles.',
      next: 'adventureFramingEvent',
    },
  ],
};

module.exports = adventureType;
