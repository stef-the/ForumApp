module.exports = function (app) {
	console.log("Loaded /");

	app.get("/", (req, res) => {
		const users = require("../../data/users.json");

		global.userobj = { exists: false, password: false };
		global.loginobj = false;

		for (const user of users) {
			if (user.id == req.query.id) {
				global.userobj.exists = true;
				if (user.password == req.query.password) {
					global.userobj.password = true;
					global.loginobj = true;
				}
			}
		}
		res.send({
			user: global.userobj,
			login: global.loginobj,
		});
	});
};
