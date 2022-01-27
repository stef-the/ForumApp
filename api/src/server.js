const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)

require("./routes/_import")(app);

app.listen(port, () => {
	console.log("API is live on port " + port);
});