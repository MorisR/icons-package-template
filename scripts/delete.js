const fse = require("fs-extra");
const path = require("path");
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

yargs(hideBin(process.argv))
    .scriptName("delete")
    .commandDir(path.relative(__dirname, ".."))
    .command("$0 [path]", "deletes a file or a dir, if not found does nothing", (yargs) => {
        yargs.positional("path", {
            type: "string",
            describe: "a path to a dir/file"
        })
    }, (argv) => {
        fse.remove(argv.path)
    })
    .help()
    .argv


