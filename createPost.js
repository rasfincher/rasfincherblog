const fs = require("fs")
const childProcess = require("child_process")

const title = process.argv[2]
var date = new Date()

const header = `---\ntitle: "${title}"\ndate: "${date.toISOString()}"\ndescription: ""\n---`
const dirName = title.replace(" ", "-")
const path = `./content/blog/${dirName}`

fs.mkdirSync(path)
fs.writeFileSync(`${path}/index.md`, header)

var child = childProcess.spawn("vim", [`${path}/index.md`], {
  stdio: "inherit",
})

child.on("exit", function(e, code) {
  console.log("finished!")
})
