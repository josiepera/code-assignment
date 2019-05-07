# Process of Building
- I created the CSS file in the containers folder in order to make it easier to traverse when importing the file.  
- When it comes to the fonts, I used google fonts and chose the fonts closest to the sketch
- I created it mobile first because now websites are mostly used on mobile and it is a lot easier to start mobile then move into the desktop version
- Each product box is adaptable in order to adjust to the desktop view and tablet view, the mobile view is responsive
- I styled the buttons from Sketch but found it easier to use images from the net until I can import and resize images from Sketch
- I named the divs with classnames so it would be easier to select in the css file
- The cart modal started out as CSS and HTML but quickly realized that this method changed the state of the cart so I changed both the App and Cart components into class components in order to use conditional rendering
- I was able to build the modal by using conditional rendering to the CartContainer then passing props to the CartContainer then passing to Cart component. Within the cart, the user clicks on the "x" to change the state back to false thus closing the modal.
- The modal definitly took the longest but I was able to figure out that the best mthod for this is through conditional rendering and changing to the closed state by passing to the grandchild component.
- Below is the code snippet of how the "Add to Cart" button changes when the product is sold out
- If the product inventory is greater than 0, then the opacity of the button is .5
```
style={product.inventory > 0 ? {opacity:'1'} : {opacity:'.5'}}
```


# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Setup

Please create a new, public Github repository where your assessment can be reviewed. We recommend the following steps:

- Create a repository on your personal Github. Make sure the `Initialize this repository with a README` box is unchecked.
- Visit your new repository. Copy the `…or push an existing repository from the command line` code provided and run it in your terminal in the same directory as this README file. It will look something like this:

```
git remote add origin git@github.com:my-username/my-assessment.git
git push -u origin master
```

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your git history.

## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

You're welcome (but not required) to add any libraries you think would be helpful.

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.
