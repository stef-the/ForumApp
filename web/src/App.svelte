<script>
	var url = "http://0.0.0.0:3000/api/login?id=0&pass=helloworld";

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url);

	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		console.log(xhr.responseText);
	}};

	var data = `{
	"Id": 78912,
	"Customer": "Jason Sweet",
	"Quantity": 1,
	"Price": 18.00
	}`;

	console.log(xhr.send(data));

</script>

<main>
	<h1 class="title">Log In</h1>
	<p>
		Or join the <a href="https://discord.gg/eeZNxMCGdJ">Discord</a> to learn
		more about us.
	</p>
	<br />
	<form class="loginform">
		<input type="text" id="user" name="user" /><br />
		<input type="password" id="pass" name="pass" /><br />
		<input type="submit" id="loginsubmit" />
	</form>
</main>
