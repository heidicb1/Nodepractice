// express web server
//importing the package that was installed in node modules then you can use it
const express = require('express');
//to create an app that has all the functionality of the express package
const app = express();

// If I hit the home page of my app then i'll sned hello
// The following is called an anonymous function
// (req, res) => {
//    res.send("Hello");
// });
app.get('/', (req, res) => {
  res.send("Hello");
});

const port = 3000;

// We will be listening on port 3000 
// process.env.PORT says if there is an enviornment varible called PORT then we'll use that and not port 3000.
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

// Run the above code in terminal npm start then open web browser type in localhost:3000 and the page should display Hello
// If I chnage the hello and hit refresh the hello should change to the new text 
// because I added the npm install nodemon --save-dev and updated the package json to "start": "nodemon server.js"