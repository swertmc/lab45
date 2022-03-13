/**
 *  Light Switch @version v0.1.3
 */

(function () {
	let lightSwitch = document.getElementById("lightSwitch");
	if (!lightSwitch) {
		return;
	}

	/**
	 * @function darkmode
	 * @summary: changes the theme to 'dark mode' and save settings to local stroage.
	 * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
	 */
	function darkMode() {
		document.querySelectorAll(".bg-light").forEach((element) => {
			element.className = element.className.replace(/-light/g, "-dark");
		});

		document.body.classList.add("bg-dark");

		if (document.body.classList.contains("text-dark")) {
			document.body.classList.replace("text-dark", "text-light");
		} else {
			document.body.classList.add("text-light");
		}

		// set light switch input to true
		if (!lightSwitch.checked) {
			lightSwitch.checked = true;
		}
		localStorage.setItem("lightSwitch", "dark");
	}

	/**
	 * @function lightmode
	 * @summary: changes the theme to 'light mode' and save settings to local stroage.
	 */
	function lightMode() {
		document.querySelectorAll(".bg-dark").forEach((element) => {
			element.className = element.className.replace(/-dark/g, "-light");
		});

		document.body.classList.add("bg-light");

		if (document.body.classList.contains("text-light")) {
			document.body.classList.replace("text-light", "text-dark");
		} else {
			document.body.classList.add("text-dark");
		}

		if (lightSwitch.checked) {
			lightSwitch.checked = false;
		}
		localStorage.setItem("lightSwitch", "light");
	}

	/**
	 * @function onToggleMode
	 * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
	 */
	function onToggleMode() {
		if (lightSwitch.checked) {
			darkMode();
		} else {
			lightMode();
		}
	}

	/**
	 * @function getSystemDefaultTheme
	 * @summary: get system default theme by media query
	 */
	function getSystemDefaultTheme() {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		if (darkThemeMq.matches) {
			return "dark";
		}
		return "light";
	}

	function setup() {
		var settings = localStorage.getItem("lightSwitch");
		if (settings == null) {
			settings = getSystemDefaultTheme();
		}

		if (settings == "dark") {
			lightSwitch.checked = true;
		}

		lightSwitch.addEventListener("change", onToggleMode);
		onToggleMode();
	}

	setup();
})();

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	};
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
	"click",
	function (ev) {
		if (ev.target.tagName === "LI") {
			ev.target.classList.toggle("checked");
		}
	},
	false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === "") {
		alert("Birnarse jaz!");
	} else {
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		};
	}
}
