
## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used for checking the primitive data type being passed into a component via props, as well as the structure of that data. It's important to check the data being passed in to ensure the application can be run and maintained at scale without bugs and errors by a team of developers.

- [ ] Describe a life-cycle event in React?

// Answer

The React lifecycle is:

- Initialize data
- Mount data (done when taking in data from API initially and mounting it to state via CDM)
- Update data whenever the state changes via an internal or external interaction. This is done by using setState withing CDU
- Kill off a component once it is no longer used to update data, to ensure the best performance and no bugs

- [ ] Explain the details of a Higher Order Component?

// Answer

- A higher order component is a function/object that takes another function/object. We have been using them primarily so far for styling and authentication. They basically render a certain UI and state based on other input.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

//Answer

You can write vanilla CSS like a normal person, you can use Sass (or another preprocessor) which is built into React like a genius, or you can use Styled Components like a crazed developer who hasn't seen daylight in days and lives off hotpockets and kool-aid.

Vanilla CSS is just that, a well understood and highly trodden path to add stylings. Preprocessors add some nice functionality like nesting and variables and can add some power to styling. Styled Components are excellent at repelling members of the opposite sex and keeping a developers social calendar clear.

...they also have some use in keeping a completely component based structure to a React application and using props to pass in dynamic styling types, but that's kind of secondary.
