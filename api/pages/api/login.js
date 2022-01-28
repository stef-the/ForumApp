export default function handler(req, res) {
	const users = require("../../data/users.json");
	var output = {};
	var query = {};

	for (const rawquery of req.url.split("?")[1].split("&")) {
		query[rawquery.split("=")[0]] = rawquery.split("=")[1];
	}
	console.log(query);
	console.log(users)

	output.user = { exists: false, pass: false };
	output.login = false;

	for (const user of users) {
		if (user.id == query.id) {
			output.user.exists = true;
			if (user.pass == query.pass) {
				output.user.pass = true;
				output.login = true;
			}
		}
	}

	res.status(200).json({
		query: query,
		login: output.login,
		user: output.user,
	});
}
