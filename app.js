const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const trailConditions = [
  { trail: "105-79", condition: "Open" },
  { trail: "94-79", condition: "Closed" },
  { trail: "81-N", condition: "Open" },
  { trail: "81-S", condition: "Closed" },
];

app.get("/getTrailConditions", (req, res) => {
  res.send(trailConditions);
});

app.post("/updateTrailCondition", (req, res) => {
  const { trail, condition } = req.body;
  const index = trailConditions.findIndex((tc) => tc.trail === trail);
  trailConditions[index].condition = condition;
  res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
