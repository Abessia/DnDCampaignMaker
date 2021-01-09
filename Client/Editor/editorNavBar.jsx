/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-else-return */
import React from 'react';
import Button from '../Components/button.jsx';

function EditorNav(props) {
  if (props.selectedTab === 'campaign') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" id="editor-nav__selected" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  } else if (props.selectedTab === 'hero') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" id="editor-nav__selected" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  } else if (props.selectedTab === 'adventure') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" id="editor-nav__selected" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  } else if (props.selectedTab === 'npc') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" id="editor-nav__selected" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  } else if (props.selectedTab === 'location') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" id="editor-nav__selected" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  } else if (props.selectedTab === 'encounter') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" id="editor-nav__selected" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  } else if (props.selectedTab === 'rewards') {
    return (
      <div id="editor-nav">
        <Button className="editor-nav__item" text="Campaign" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Hero" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Adventure" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="NPC" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Location" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" text="Encounter" clickHandler={props.changeTab} />
        <Button className="editor-nav__item" id="editor-nav__selected" text="Rewards" clickHandler={props.changeTab} />
      </div>
    );
  }
}

export default EditorNav;
