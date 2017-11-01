var items = {
    greenNet: new Item('Green Net', -0.2, "Slow them down!"),
    bomb: new Item("Short Range Bomb", -0.4, "Boom!"),
    smokeScreen: new Item("Smokescreen", -0.1, "Blind them!"),
    fire: new Item("Fire", -1.5, "It's super effective!")
}
function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
};
var health = 100;
var equipment = []
var reset = document.getElementById('reset')
function update() {
    if (health <= 0) {
        health = 0;
        document.getElementById('smoke').src = 'assets/dead-smoke.gif'
        reset.disabled = false
    }
    document.getElementById("health").innerText = health;
}
function drawItems() {
    var template = ``
    for (var i in items) {
        var item = items[i]
        template += `<center><button type="button" class="btn" onclick="addItems('${i}')"> ${item.name} </button></center>`
    }
    document.getElementById('items').innerHTML = template
}
function resetGame() {
    health = 100;
    document.getElementById('smoke').src = 'assets/smoke_mirror.gif'
    update();
    reset.disabled = true;
}
function slap() {
    health -= Math.ceil(1 * addMods());
    update();
}
function punch() {
    health -= Math.ceil(5 * addMods());
    update();
}
function kick() {
    health -= Math.ceil(10 * addMods());
    update();
}
function addItems(itemName){
    var item = items[itemName];
    equipment.push(item)
}


function addMods() {
    var totalMod = 1
    for (var i = 0; i < equipment.length; i++) {
        var item = equipment[i];
        totalMod -= item.modifier;
    }
    return totalMod
    update()
}
drawItems();
update();