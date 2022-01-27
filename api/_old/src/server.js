const app = require("express")();
const bodyParser = require("body-parser");

/*const { createServer } = require('http')
const server = createServer(() => {})
server.listen(4000)*/

app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true)

require("./routes/_import")(app);

app.listen(4000, () => {
	console.log("API is live on port " + 4000);
});