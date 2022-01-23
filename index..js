const fs = require("fs");

fs.stat("./pic1.jpg", (err, stats) => {
  if (err) {
    return console.log(err);
  }
  console.log(stats);
});
