const express = require("express");
const app = express();
const cors = require("cors");
const { get } = require("express/lib/response");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("how are you brother how are you");
});

const users = [
  { id: 1, name: "kabir", email: "kabir@gmail.com", phon: "o143241654" },
  { id: 2, name: "labir", email: "hh@gmail.com", phon: "o143241654" },
  { id: 3, name: "shiplu", email: "aaa@gmail.com", phon: "o143241654" },
  { id: 4, name: "bablu", email: "dd@gmail.com", phon: "o143241654" },
  { id: 5, name: "mubin", email: "dd@gmail.com", phon: "o143241654" },
  { id: 6, name: "ripa", email: "ddd@gmail.com", phon: "o143241654" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.get("/fruit", (req, res) => {
  res.send(["mango", "banana", "orange"]);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
