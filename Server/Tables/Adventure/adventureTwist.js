const adventureTwist = {
  title: 'What twist will complicate the adventure?',
  description: 'A twist can complicate a story and make it harder for the characters to complete their goals.',
  step: 'adventureTwist',
  previous: 'adventureMoralQuandary',
  highRange: 10,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 1,
      name: 'The adventurers are racing against other creatures with the same or opposite goal',
      details: '',
      suggestedAdd: ' Complicating matters, the adventurers are racing against other creatures with the same or opposite goal. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 2,
      highRange: 2,
      name: 'The adventurers become responsible for the safety of a noncombatant NPC',
      details: '',
      suggestedAdd: ' Complicating matters, the adventurers become responsible for the safety of a noncombatant NPC. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 3,
      highRange: 3,
      name: 'The adventurers are prohibited from killing the villain, but the villain has no compunctions about killing them',
      details: '',
      suggestedAdd: ' Making matters more complicated, the adventurers are prohibited from killing the villain, but the villain has no compunctions about killing them. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 4,
      highRange: 4,
      name: 'The adventurers have a time limit',
      details: '',
      suggestedAdd: ' Making matters more difficult, the adventurers have a time limit. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 5,
      highRange: 5,
      name: 'The adventurers have received false or extraneous information',
      details: '',
      suggestedAdd: ' Making matters more difficult, the adventurers have received false or extraneous information. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 6,
      highRange: 6,
      name: 'Completing an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy',
      details: '',
      suggestedAdd: ' Making matters more complicated, completing an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 7,
      highRange: 7,
      name: 'The adventurers have two different goals, but they can complete only one',
      details: '',
      suggestedAdd: ' To make matters more difficult, the adventurers have two different goals but can only complete one. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 8,
      highRange: 8,
      name: 'Completing the goal secretly helps the villain',
      details: '',
      suggestedAdd: ' Further complicating matters, accomplishing the heroes\' goal secretly helps the villain. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 9,
      highRange: 9,
      name: 'The adventurers must cooperate with a known enemy to achieve the goal',
      details: '',
      suggestedAdd: ' Making matters more complicated, the adventurers must cooperate with a known enemy to achieve the goal. ',
      next: 'adventureSideQuest',
    },
    {
      lowRange: 10,
      highRange: 10,
      name: 'The adventurers are under magical compulsion (such as a geas spell) to complete their goal',
      details: '',
      suggestedAdd: ' Complicating matters, the adventurers are under magical compulsion (such as a geas spell) to complete their goal(s). ',
      next: 'adventureSideQuest',
    },
  ],
};

module.exports = adventureTwist;
