import express, { query } from "express";
const app = express();

const trainees = [
  { name: "Maziar", region: "north-west" },
  { name: "Shimen", region: "north-west" },
  { name: "Zaw", region: "london" },
  { name: "Pakiza", region: "london" },
  { name: "Karam", region: "west-midland" },
];

app.get("/", (req, res) => {
  res.send("yah Node");
});

app.get("/node", (req, res) => {
  const testMessage = "hello node!";
  res.send(testMessage);
});

app.get("/codeYourFuture", (req, res) => {
  const toCyf = "THIS IS A FUN JOURNEY";
  res.send(toCyf);
});
app.get("/trainees", (req, res) => {
  res.send(trainees);
});

app.get("/search", (req, res) => {
  let searchQuery = req.query.search;
  res.send(`hello world ! you searched for ${searchQuery}`);
});

// app.get("/chocolate", (req, res) => {
//   let chocolateQuery = req.query.amount;
//   res.send(`hello world ! you searched for ${chocolateQuery}`);
// });

app.get("/chocolate", (req, res) => {
  let chocolateN = req.query.amount;
  res.send(`gimm ${chocolateN} chocolate!`);
});

// app.get("/json", (req, res) => {
//   let lat = req.query.lat;
//   let lng = req.query.lng;
//   const total = lat * lng;
//   res.send(`You searched for Lat: ${lat} and Lng: ${lng} and all is `);
//   res.send(`total of ${total}`);
// });

app.get("/json", (req, res) => {
  let lat = parseFloat(req.query.lat);
  let lng = parseFloat(req.query.lng);

  if (isNaN(lat) || isNaN(lng)) {
    res.status(400).send("Invalid lat or lng values");
    return;
  }
  const total = lat * lng;

  res.send(
    `You searched for Lat: ${lat} and Lng: ${lng}, and the total is ${total}`
  );
});

app.listen(3000, () => {
  console.log("server is listening on port 3000. Ready ot accept request!");
});

///part of issue
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
import express from "express";
//load the quotes JSON
import quotes from "./quotes.json" assert { type: "json" };

const app = express();
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", (request, response) => {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

// START OF YOUR CODE...
app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.get("/quotes/random", (req, res) => {
  const pickFromArray = (arrayofQuotes) =>
    arrayofQuotes[Math.floor(Math.random() * arrayofQuotes.length)];
  res.send(pickFromArray(quotes));
});

app.get("/quotes/search", (req, res) => {
  const searchQuery = req.query.term.toLowerCase();
  if (searchQuery) {
    const filterSearch = quotes.filter(
      (quote) =>
        quote.quote.toLowerCase().includes(searchQuery) ||
        quote.author.toLowerCase().includes(searchQuery)
    );
    res.send({ quotes: filterSearch });
  } else {
    res.send([]);
  }
});
// ...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
const listener = app.listen(3001, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
