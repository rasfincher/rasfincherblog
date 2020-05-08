const fs = require("fs");
const childProcess = require("child_process");
const prompt = require("prompt-sync")();

var title = prompt("What would you like the title to be? ");
var description = prompt("What is the description (if any)? ");
var date = new Date();

const header = `---\ntitle: "${title}"\ndate: "${date.toISOString()}"\ndescription: ""\n---`;
const dirName = title.split(" ").join("-");
const path = `./content/blog/${dirName}`;

fs.mkdirSync(path);
fs.writeFileSync(`${path}/index.md`, header);

var child = childProcess.spawn("vim", [`${path}/index.md`], {
  stdio: "inherit",
});

child.on("exit", function(e, code) {
  console.log("finished!");
});
