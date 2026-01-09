const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "endMarks.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  console.log("CGPA of each subject in the Odd Sem of 2nd year: ");
  console.log(data);
});