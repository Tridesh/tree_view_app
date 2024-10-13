


the idea of making this website basically with coditional statements with the parent_godown id and the item id
I personally made this tree view application in that basis 
Intially the godown names are filtered with parent_godown value "null".
Then later the sub godowns are the ones in the godowns json file left over so they are allocated below each of the godowns.

Later the items json is loaded and the parent_godown is matched the item.id and the matched names are displayed under each of the sub godown.
Every displaying method uses the map and filter function inorde to filter out and map each and every element.

One ineteresting function that is useState is used is the expanded and collapsed useStates.
expandedGodowns is basically an array of all the godowns id's being displayed there. It means that the particular godown has
expanded for the particular subgodown to be visible.

The expanded/collapsed state management allows for a clean and organized user interface, enabling users to navigate through 
complex hierarchical data without being overwhelmed by all the information presented at once.

I have used Routing for interfacing items page too so that at the end we can get a SPA i.e single page application. I have also
used Route component and essential libraries are installed.

The :itemId parameter basically allows us to create dynamic routes, enabling the application to display different content based 
on the ID passed in the URL. This is useful for applications that need to display detailed information for multiple items.
By using dynamic route parameters, you can create pages that change based on user interactions (like clicking on different items).
