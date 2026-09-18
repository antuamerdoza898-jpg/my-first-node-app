const fs = require("fs");

const command = process.argv[2];

const data = fs.readFileSync(
    "todos.json",
    "utf-8"
);

const todos = JSON.parse(data);

if (command === "list") {
    console.log(todos);
}

if (command === "add") {
    const title = process.argv[3];

    todos.push({
        title: title,
        done: false
    });

    console.log(todos);
}