import { addMinutes } from "date-fns";

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

	if (users.find(user => user.id == query.id && user.pass == query.pass)) {
		output.login = true;
	}

	res.status(200).json({
		query: query,
		login: output.login,
	});
}
