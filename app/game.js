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
/*
function shield(){
	if (health >= 3){
		shield + 30%
	}
}
*/
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



var Obj = function (shield, option2, option3) {
	this.shield = shield;
	this.option2 = option2;
	this.option3 = option3;
}


/*
}

var ken = {
	health: 120,
	attacks: {
		kick: 20,
		punch: 15,
		uppercut: 30,
		hadouken: 40
	},
	mobility: 35
}

var ryu = {
	health: 100,
	attacks: {
		kick: 15,
		punch: 10,
		uppercut: 25,
		hadouken: 60
	}
}
function GameService() {

	var dataStore = this
	var target = new Target("Scarecrow", 100, 1, 5, 10);

	function Target(name, health, slap, punch, kick) {
		this.name = name;
		this.health = health;
		this.attacks = {
			"slap": slap,
			"punch": punch,
			"kick": kick
		};
		this.items = []
		this.hits = 0
	};

	function Item(name, modifier, description) {
		this.name = name;
		this.modifier = modifier;
		this.description = description;
	}
};

*/