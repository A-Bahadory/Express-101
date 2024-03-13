import express, { query } from "express";
const app = express();

const trainees = [
  { name: "Maziar", region: "north-west" },
  { name: "Shimen", region: "north-west" },
  { name: "Zaw", region: "london" },
  { name: "Pakiza", region: "london" },
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
  //
  req.query.region;
  res.send(trainees);
});
app.listen(3000, () => {
  console.log("server is listening on port 3000. Ready ot accept request!");
});
