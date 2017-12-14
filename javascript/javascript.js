function hello() {

		var hour = new Date()
		var time = hour.getHours();

		if (time > 1 && time < 12) {
			document.getElementById("teamtext2").innerHTML = ("Good Morning Dear Visitor! We welcome you to our Homepage. Feel free to explore around.");
		} else if (time > 12 && time < 16) {
			document.getElementById("teamtext2").innerHTML = ("Good Afternoon Dear Visitor! We welcome you to our Homepage. Feel free to explore around.");
		} else {
			document.getElementById("teamtext2").innerHTML = ("Good Evening Dear Visitor! We welcome you to our Homepage. Feel free to explore around.");
		}
	}