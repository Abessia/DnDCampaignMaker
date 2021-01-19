// CAMPAIGN TABLES (DMG Chapter 1 supplemented with some of Chapter 2)
const campaignStart = require('./Campaign/campaignStart');
const campaignFlavor = require('./Campaign/campaignFlavor');
const campaignPantheon = require('./Campaign/campaignPantheon');
const campaignMultiverse = require('./Campaign/campaignMultiverse');
const multiverseOther = require('./Campaign/multiverseOther');
const campaignTier = require('./Campaign/campaignTier');
const campaignSettlement = require('./Campaign/campaignSettlement');
const campaignSettlementRuler = require('./Campaign/campaignSettlementRuler');

// Campaign Event
const campaignEvent = require('./Campaign/campaignEvent');
const eventLeader = require('./Campaign/CampaignEvent/eventLeader');
const eventDisaster = require('./Campaign/CampaignEvent/eventDisaster');
const eventInvasion = require('./Campaign/CampaignEvent/eventInvasion');
const eventDepletion = require('./Campaign/CampaignEvent/eventDepletion');
const eventOrganization = require('./Campaign/CampaignEvent/eventOrganization');
const eventDiscovery = require('./Campaign/CampaignEvent/eventDiscovery');

// MenuList
const campaignMenu = [
  { table: 'campaignStart', name: '1.1 Campaign Type' },
  { table: 'campaignFlavor', name: '1.2 Flavor of Fantasy' },
  { table: 'campaignPantheon', name: '1.3 The Pantheon' },
  { table: 'campaignMultiverse', name: '1.4 The Multiverse' },
  { table: 'campaignTier', name: '1.5 Tiers of Play' },
  { table: 'campaignSettlement', name: '1.6 Starting Settlement' },
  { table: 'campaignSettlementRuler', name: '1.7 Government' },
  { table: 'campaignEvent', name: '1.8 Campaign Event' },
];

module.exports = {
  campaignMenu,
  campaignStart,
  campaignFlavor,
  campaignPantheon,
  campaignMultiverse,
  multiverseOther,
  campaignTier,
  campaignSettlement,
  campaignSettlementRuler,
  campaignEvent,
  eventLeader,
  eventDisaster,
  eventInvasion,
  eventDepletion,
  eventOrganization,
  eventDiscovery,
};
