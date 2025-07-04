const path=require ("path");
console.log(path.sep);
const pathName = path.join("/path-module-content", "test.txt")
console.log(pathName);
console.log(path.basename(pathName));
const absolute = path.resolve(__dirname,"path-module-content", "test.txt");
console.log(absolute)
console.log(__dirname)

