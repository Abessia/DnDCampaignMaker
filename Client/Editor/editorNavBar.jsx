/* eslint-disable no-else-return */
import React from 'react';

function EditorNav(props) {
  if (props.selectedTab === 'campaign') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item" id="editor-nav__selected">Campaign</span>
        <span className="editor-nav__item">Heroes</span>
        <span className="editor-nav__item">Adventures</span>
        <span className="editor-nav__item">NPCs</span>
        <span className="editor-nav__item">Locations</span>
        <span className="editor-nav__item">Encounters</span>
        <span className="editor-nav__item">Rewards</span>
      </div>
    );
  } else if (props.selectedTab === 'hero') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item">Campaign</span>
        <span className="editor-nav__item" id="editor-nav__selected">Heroes</span>
        <span className="editor-nav__item">Adventures</span>
        <span className="editor-nav__item">NPCs</span>
        <span className="editor-nav__item">Locations</span>
        <span className="editor-nav__item">Encounters</span>
        <span className="editor-nav__item">Rewards</span>
      </div>
    );
  } else if (props.selectedTab === 'adventure') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item">Campaign</span>
        <span className="editor-nav__item">Heroes</span>
        <span className="editor-nav__item" id="editor-nav__selected">Adventures</span>
        <span className="editor-nav__item">NPCs</span>
        <span className="editor-nav__item">Locations</span>
        <span className="editor-nav__item">Encounters</span>
        <span className="editor-nav__item">Rewards</span>
      </div>
    );
  } else if (props.selectedTab === 'npc') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item">Campaign</span>
        <span className="editor-nav__item">Heroes</span>
        <span className="editor-nav__item">Adventures</span>
        <span className="editor-nav__item" id="editor-nav__selected">NPCs</span>
        <span className="editor-nav__item">Locations</span>
        <span className="editor-nav__item">Encounters</span>
        <span className="editor-nav__item">Rewards</span>
      </div>
    );
  } else if (props.selectedTab === 'location') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item">Campaign</span>
        <span className="editor-nav__item">Heroes</span>
        <span className="editor-nav__item">Adventures</span>
        <span className="editor-nav__item">NPCs</span>
        <span className="editor-nav__item" id="editor-nav__selected">Locations</span>
        <span className="editor-nav__item">Encounters</span>
        <span className="editor-nav__item">Rewards</span>
      </div>
    );
  } else if (props.selectedTab === 'encounter') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item">Campaign</span>
        <span className="editor-nav__item">Heroes</span>
        <span className="editor-nav__item">Adventures</span>
        <span className="editor-nav__item">NPCs</span>
        <span className="editor-nav__item">Locations</span>
        <span className="editor-nav__item" id="editor-nav__selected">Encounters</span>
        <span className="editor-nav__item">Rewards</span>
      </div>
    );
  } else if (props.selectedTab === 'rewards') {
    return (
      <div id="editor-nav">
        <span className="editor-nav__item">Campaign</span>
        <span className="editor-nav__item">Heroes</span>
        <span className="editor-nav__item">Adventures</span>
        <span className="editor-nav__item">NPCs</span>
        <span className="editor-nav__item">Locations</span>
        <span className="editor-nav__item">Encounters</span>
        <span className="editor-nav__item" id="editor-nav__selected">Rewards</span>
      </div>
    );
  }
}

export default EditorNav;
