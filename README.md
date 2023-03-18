# Cafe: By The Greens

The following code is the source code for a restaurant situated in India.

It consists of 2 webpages.

The first page consists of a HEADER tag, FOOTER tag, Audio tag, Video tag, anchor tags , buttons along with basic html tags. 
The landing page of the site id homepage.html and its whole styling is done in homepage.css file.

The header has the logo of the restaurant and the navigation panel for navigating through the whole site.
Navigation panel consists 4 sections Home, Menu, Contact Us, and reviews section. It also consists of a button names Book. 
This button routes the homepage to the second webpage.

Home page consists of a footer element which gives information about address of the restaurant, social media sites and newsletter subsription option.

The second page is for reserving a table in the resaurant.
We can enter number of guests, meal type, phone number of primary guest and messsage the guest want to give to the restaurant.

On clicking the logo of the restaurant on either of the pages, we can hear the theme music of the cafe.

All the assets used in building the website are collated in an Asset folder. 


The code uses CSS Grid layout/Flexbox and SASS/SCSS Features.

The first page of the project implements all the below SASS Features
Variables, Custom Properties, Nesting, Interpolation, Placeholder Selectors, Mixins, Functions. 

sass/
├── variables.scss
├── custom-properties.scss
├── nesting.scss
├── interpolation.scss
├── placeholder.scss
├── mixins.scss
├── functions.scss
└── style.scss

Variables (variables.scss)
SASS allows us to define variables which can be used throughout our stylesheets. In variables.scss, we can define our color, font, or other values that will be reused in our stylesheets:


Custom Properties (custom-properties.scss)
CSS custom properties allow us to define variables in CSS that can be used throughout our stylesheets. In custom-properties.scss, we can define our custom properties:


Nesting (nesting.scss)
SASS allows us to nest selectors which can make our stylesheets more organized and easier to read. In nesting.scss, we can use nesting to apply styles to child elements:


Interpolation (interpolation.scss)
SASS allows us to use interpolation to dynamically generate selectors or values. In interpolation.scss, we can use interpolation to generate class names or values:


Placeholder Selectors (placeholder.scss)
SASS allows us to define placeholder selectors which can be extended by other selectors. In placeholder.scss, we can define a placeholder selector:


Mixins (mixins.scss)
SASS allows us to define mixins which can be reused throughout our stylesheets. In mixins.scss, we can define a mixin:


Functions (functions.scss)
SASS allows us to define functions which can be used to calculate values. In functions.scss, we can define a function:


Main Stylesheet (style.scss)
Finally, in our style.scss file, we can import all of the other SASS files and use their defined variables, mixins, and functions:

Implemented CSS Grid and flexbox in my second webpage.


To organize my SASS/SCSS files, I can create separate files for different UI features, common elements, or themes. For example, you could have a file called _buttons.scss for button styles, a file called _grid.scss for grid layout styles, and a file called _theme.scss for overall theme styles. Then, you can import these files into your main SASS/SCSS file using @import.