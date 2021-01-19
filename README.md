# DnDCampaignMaker
Welcome to the DnD Campaign Maker.

This is not yet deployed while I continue to implement authentication.  Here's a screenshot to whet your appetite in the meantime!

![Screenshot](https://github.com/Abessia/DnDCampaignMaker/blob/master/.screenshots/DnDCampaignBuilder_Jan_9_2021.png)

## Table Format
To prevent sharing copyrighted materials over github, all table data is gitignored and will eventually be migrated to the database itself.  If you wish to add or input your own tables, you can do so with the following steps:
1. Decide which category your table(s) belong(s) to (Campaign, Hero, Adventure, NPC, Location, Encounter, Reward) and navigate to or create the corresponding (Category)Tables.js file (e.g. AdventureTables.js).  These files collect all the tables of a category for easy inclusion in the main server.js file.
2. Add the name of your table to the Menu List of that Tables.js file.  E.g. in AdventureTables.js, there is an adventureMenu array; to add a table, you'd add an object to that array, put the file name without extension as a string value for the 'table' key of that object, and then a descriptive title as a string value for the 'name' value of that object.
3. If you do not have the tables I've input (or if you're implementing this as pure homebrew), delete the file references and menu objects for all tables you wish to exclude or do not have access to.
4. As with a normal file in Node.js, require and export the file you intend to put your table data in.
5. Make a file at the location you specified in your require statement in the (Category)Tables.js file.
6. Input your table data in the new file.

The file for a table should consist of a single object with the following elements:
```
{
  title: STRING (a question, prompt, or header for the table),
  description: STRING (a longer, descriptive flavor text),
  step: STRING (matches the name of the object and the module.exports of the file),
  previous: STRING (optional field naming the preceding table),
  highRange: NUM (determines the value shown on the Roll button; sets the range of results)
  source: STRING (used to control access to tables based on authentication)
  rows: [ ] (an array of table rows)
}
```

Each table row must be provided as an object nested within the rows array.  A given table row needs the following format:
```
{
  lowRange: NUM (the lowest number which, if rolled, will trigger this option),
  highRange: NUM (the highest number which, if rolled, will trigger this option),
  name: STRING (the short phrase indicating the meaning of this result)
  details: STRING (optional value not yet implemented; populates a tooltip text pop-up),
  suggestedAdd: STRING (appears in the editor when this result triggers; if empty, triggers a sub-table),
  next: STRING (the file name, without extensions or path, of the next temple),
}
```
