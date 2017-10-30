var health = 100;
var reset = document.getElementById('reset')
function update() {
	if (health <= 0) {
		health = 0;
		document.getElementById('smoke').src = 'https://www194.lunapic.com/do-not-link-here-use-hosting-instead/150940193474175?620616655'
		reset.disabled = false
	}
	document.getElementById("health").innerText = health;
}

function resetGame() {
	health = 100;
	document.getElementById('smoke').src = '../assets/smoke_mirror.gif'
	update();
	reset.disabled = true;
}
function slap() {
	health -= 1;
	update();
}
function punch() {
	health -= 5;
	update();
}
function kick() {
	health -= 10;
	update();
}
update()
