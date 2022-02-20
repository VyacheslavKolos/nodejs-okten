const express = require('express');
const path = require("path");
const {engine} = require("express-handlebars");
const apiRoutes=require("./routes/apiRoutes")

const app = express();

app.use(express.static(path.join(__dirname, 'files', 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.listen(4800, () => {
    console.log("Server has started on PORT 4800")
});
