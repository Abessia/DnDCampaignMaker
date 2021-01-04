const adventureMoralQuandary = {
  title: 'What moral quandary will confront the heroes in this adventure?',
  description: 'If you want to give the characters a crisis that no amount of spellcasting or swordplay can resolve, add a moral quandary to the adventure. A moral quandary is a problem of conscience for which the adventurers must make a single choice — but never a simple one.',
  step: 'adventureMoralQuandary',
  previous: 'adventureIntroduction',
  highRange: 20,
  source: 'DMG',
  rows: [
    {
      lowRange: 1,
      highRange: 3,
      name: 'Ally Quandary',
      details: '',
      suggestedAdd: ' At some point in the adventure, the characters face the following quandary: The adventurers have a better chance of achieving their goal with the help of two individuals whose expertise is all but essential. However, these two NPCs hate each other and refuse to work together even if the fate of the world hangs in the balance. The adventurers must choose the NPC that is most likely to help them accomplish their goal. ',
      next: 'adventureTwist',
    },
    {
      lowRange: 4,
      highRange: 6,
      name: 'Friend Quandary',
      details: '',
      suggestedAdd: ' At some point in the adventure, the characters face the following quandary: An NPC that one or more of the characters cares about makes an impossible demand on the characters. A love interest might demand that a character turn away from a dangerous quest. A dear friend might plead with the characters to spare the villain’s life, to prove that they are better than the villain. A weak NPC might beg for a chance to win favor from the characters by undertaking a dangerous but essential mission. ',
      next: 'adventureTwist',
    },
    {
      lowRange: 7,
      highRange: 12,
      name: 'Honor Quandary',
      details: '',
      suggestedAdd: ' At some point in the adventure, the characters face the following quandary: A character is forced to choose between victory and a personal oath or code of honor. A paladin who has sworn an oath of virtue might realize that the clearest path to success lies in deceit and subterfuge. A loyal cleric might be tempted to disobey the orders of his or her faith. If you present this quandary, be sure to provide an opportunity for a character to atone for violating his or her oath. ',
      next: 'adventureTwist',
    },
    {
      lowRange: 13,
      highRange: 16,
      name: 'Rescue Quandary',
      details: '',
      suggestedAdd: ' At some point in the adventure, the characters face the following quandary: The adventurers must choose between catching or hurting the villain and saving innocent lives. For example, the adventurers might learn that the villain is camped nearby, but they also learn that another part of the villain’s forces is about to march into a village and burn it to the ground. The characters must choose between taking out the villain or protecting innocent villagers, some of whom might be friends or family members. ',
      next: 'adventureTwist',
    },
    {
      lowRange: 17,
      highRange: 20,
      name: 'Respect Quandary',
      details: '',
      suggestedAdd: ' At some point in the adventure, the characters face the following quandary: Two important allies give conflicting directions or advice to the adventurers. Perhaps the high priest counsels the characters to negotiate peace with militaristic elves in the nearby forest, while a veteran warrior urges them to prove their strength with a decisive first strike. The adventurers can’t follow both courses, and whichever ally they choose, the other loses respect for them and might no longer aid them. ',
      next: 'adventureTwist',
    },
  ],
};

module.exports = adventureMoralQuandary;
