const fs = require("fs");
const path = require("path")
const filePath = path.resolve(__dirname,"fs-content", "first.txt")
const filePathToFolder = path.resolve(__dirname, "fs-content" , "second.txt")
console.log(fs.readFileSync(filePath,"utf-8"));
fs.writeFileSync(filePathToFolder, "Hello this is the second file", "utf-8")
