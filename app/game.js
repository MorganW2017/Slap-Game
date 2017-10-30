var health = 100;
var reset = document.getElementById('reset')
var resetHealth
function updateHealth() {
	if (health <= 0) {
		health = 0;
		reset.disabled = false
	}
	document.getElementById("health").innerText = health;
}

function resetHealth() {
	health = 100;
	updateHealth();
	reset.disabled = true;
}
function slap() {
	health -= 1;
	updateHealth();
}
function punch() {
	health -= 5;
	updateHealth();
}
function kick() {
	health -= 10;
	updateHealth();
}
updateHealth()
