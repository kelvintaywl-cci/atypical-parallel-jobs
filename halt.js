const proc = require('child_process')

if (process.env.CIRCLE_NODE_INDEX == "1") {
    console.log("Halting...")
    proc.execSync(`circleci-agent step halt`, { cwd: process.cwd() })
}
