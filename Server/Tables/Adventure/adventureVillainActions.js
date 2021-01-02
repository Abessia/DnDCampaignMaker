const adventureVillainActions = {
  title: 'How are the villain\'s actions likely to unfold during the adventure?',
  description: 'Event-based adventures depend entirely on the actions of the villain and the heroes. Use this table to help determine what steps the villain would take to achieve their goal assuming no interference from the adventurers.',
  step: 'adventureVillainActions',
  previous: 'adventureType',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'Big Event',
      details: '',
      suggestedAdd: ' The villain’s plans come to fruition during a festival, an astrological event, a holy (or unholy) rite, a royal wedding, the birth of a child, or some similar fixed time. The villain’s activities up to that point are geared toward preparation for this event. ',
      next: 'adventureEventGoals',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'Crime Spree',
      details: '',
      suggestedAdd: ' The villain commits acts that become bolder and more heinous over time. A killer might start out by targeting the destitute in the city slums before moving up to a massacre in the marketplace, increasing the horror and the body count each time. ',
      next: 'adventureEventGoals',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'Growing Corruption',
      details: '',
      suggestedAdd: ' As time passes, the villain’s power and influence grow, affecting more victims across a larger area. This might take the form of armies conquering new territory, an evil cult recruiting new members, or a spreading plague. A pretender to the throne might attempt to secure the support of the kingdom’s nobility in the days or weeks leading up to a coup, or a guild leader could corrupt the members of a town council or bribe officers of the watch. ',
      next: 'adventureEventGoals',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'One and Done',
      details: '',
      suggestedAdd: ' The villain commits a single crime and then tries to avoid the consequences. Instead of an ongoing plan to commit more crimes, the villain’s goal is to lie low or flee the scene. ',
      next: 'adventureEventGoals',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'Serial Crimes',
      details: '',
      suggestedAdd: ' The villain commits crimes one after the other, but these acts are repetitive in nature, rather than escalating to greater heights of depravity. The trick to catching such a villain lies in determining the pattern underlying the crimes. Though serial killers are a common example of this type of villain, your villain could be a serial arsonist favoring a certain type of building, a magical sickness that affects spellcasters who cast a specific spell, a thief that targets a certain kind of merchant, or a doppelganger kidnapping and impersonating one noble after another. ',
      next: 'adventureEventGoals',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'Step by Step',
      details: '',
      suggestedAdd: ' In pursuit of its goal, the villain carries out a specific set of actions in a particular sequence. A wizard might steal the items needed to create a phylactery and become a lich, or a cultist might kidnap the priests of seven good-aligned gods as a sacrifice. Alternatively, the villain could be following a trail to find the object of its revenge, killing one victim after another while moving ever closer to the real target. ',
      next: 'adventureEventGoals',
    },
  ],
};

module.exports = adventureVillainActions;
