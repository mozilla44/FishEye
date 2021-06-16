_Base_: contained within this file are all your resets, variables, mixins, and any utility classes.

_Layout_: contains all the CSS that handles the layout, such as the container and any grid systems.

_Components_: anything reusable such as buttons, navbars, cards etc.

_Main_: it should ONLY contain the imports for the above files.
If  any file grows too cluttered or disorganized, it’s time to expand our  structure. 
Consider adding a folder for your components for example, and  breaking it up into individual files such 
as _button.scss & _carousel.scss