const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const routeIndex = require("./src/routes/routeIndex")

const app = express()
const port = 3333

app.use("/images", express.static(path.join(__dirname, "uploaded-images")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, **POST**, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(routeIndex)

app.listen(port, () => console.log(`Child health api server is listening on port ${port}`))