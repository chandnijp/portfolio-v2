const path = require("path");

module.exports = {
        mode: "development", // could be dev or prod
        entry: path.resolve(__dirname, "src/index.js"), // app entry point
        output: {
            path: path.resolve(__dirname, "dist/"), // build folder
            filename: "bundle.js", // build entry file name
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
    }
