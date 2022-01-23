const fs = require("fs");
const path = require("path");

let birthtime;

const input = path.resolve(__dirname, "pic5.jpg");

fs.stat(input, (err, stats) => {
  if (err) {
    return console.log(err);
  }
  birthtime = stats;
  console.log(birthtime);
});
