const fs = require("fs");

// 写入文件
fs.writeFileSync(
  "hello.txt",
  "Hello Node.js"
);

// 读取文件
const data = fs.readFileSync(
  "hello.txt",
  "utf-8"
);

console.log(data);