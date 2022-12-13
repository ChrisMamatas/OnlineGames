const express = require('express')
var path = require('path');

const app = express()
const port = 3000

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.render("index.ejs")
  });

app.get('/local-multiplayer', (req, res) => {
    res.render("local-game.ejs")
}) 