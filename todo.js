const fs = require("fs");

const command = process.argv[2];

const data = fs.readFileSync(
    "todos.json",
    "utf-8"
);

const todos = JSON.parse(data);

if (command === "list") {
    console.log("任务列表：");

    todos.forEach(function(todo, index) {
        console.log(index + 1, todo.title);
    });
}

if (command === "add") {
    const title = process.argv[3];

    todos.push({
        title: title,
        done: false
    });

    const json = JSON.stringify(todos);

    fs.writeFileSync("todos.json", json);

    console.log("任务已添加");
}

    