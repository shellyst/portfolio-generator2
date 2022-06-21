const fs = require("fs");
const generatePage = require("./src/page-template");

// // .slice() returns a brand-new array based on process.argv starting at the third index and ending with final index.
// Array which holds the user command-line arguments.
// Want to extract those arguments and store them into distinct variables.
const profileDataArgs = process.argv.slice(2);

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// Assignment destructuring - assigns elements of an array to variable names in a single expression:
const [name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// Uses template literals to insert the variables inside the function block.
// Interpolate the variables with the ${syntax}.

// Will create an HTML file.
// First argument is file name that will be created/the output file.
// Second argument is the data that's being written: the HTML string template.
// Third argument is the callback function that will handle errors as well as the success message.
fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});
