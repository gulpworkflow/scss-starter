# scss-starter
nice and neat sass starter for any project! Inspired by https://github.com/dropbox/scooter and Bootstrap v4 grid
# structure
- **00 Variables** – _These are settings stored for later use.  While they are typically scss variables, they can include other settings that generate no visible CSS, such as keyframes._  

- **01 Tools** – _These are mostly mixins & functions.  A good rule of thumb is that nothing in the 'tools' folder should compile into actual CSS. Instead, 'tools' should be included/extended/etc throughout your project to make your CSS more consistent and easier to maintain._  

- **02 Base** – _These are universal, generic, and element styles.  They should *not* introduce new objects/concepts (such as a grid). Examples include * {}, resets, and typography.  If the selector you're writing styles for uses a class and not an element, 95% of the time you're in the wrong place!_  

- **03 Objects** – _Objects are repeatable pattern-based layout abstractions. A 'layout abstraction' is a distinct thing which is introduced via classes that does not exist natively in HTML5 but commonly has meaning.  Objects should not include any cosmetics. Examples include grids, wrappers, media, flags, icon fonts, and ui lists._  

- **04 Components** – _Components are isolated, designed pieces of UI.  They can extend objects, or can introduce new concepts.  An easy way to think about it is that removing the 'Componenets' should turn the project into a gray box wireframe without any detailed style. They key difference with an 'object' is that a 'componenet' exists to create a designed piece of an interface, while an 'object' gives life to a structural thing. For example, a 'UI list' object turns a bulleted text list into block of consistent content by removing indents/bullets and converted to a block with a little padding. You might create a 'FeatureList' component to create a specifically designed UI peice such as a list of a product's features.  Componenets must use the [SUIT component naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)._  

- **05 Helpers** – _Helpers are like little trump cards that let you set parameters or states in your markup.  For example, a class to hide an object for a mobile device or a class to remove all margins are 'helpers'.  Helpers will save you time and file bloat by being extremely flexible and reusable. Color overrides, forced floats, etc...this is the one place where !important is acceptable_  
