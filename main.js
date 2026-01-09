const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "endMarks.txt");

function AFileRead() {
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

AFileRead().then((data) => {
  console.log("Each subject CGPA in the odd sem of the 2nd year:");
  console.log(data);
});