<script>
	var request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open("GET", "0.0.0.0:3000/api/login?id=0&pass=helloworld", true);

	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
	};

	request.send();
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
