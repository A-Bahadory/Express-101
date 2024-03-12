import express from "express";
const app = express();
app.listen(3000, () => {
  console.log("server is listening on port 3000. Ready ot accept request!");
});
