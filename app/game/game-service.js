
function GameService() {
    var target = new Target("Smoke", 100, 1, 5, 10, 200);
    var items = {
        shield: new Item('Shield', -0.3, "This is a way cool shield"),
        crows: new Item("Throwing Stars", 0.5, "100% ACCURATE!!!"),
        straw: new Item("Bomb", -0.2, "Boom!"),
        fire: new Item("Fire", 1.6, "It's super effective")
    };
    function Target(name, health, slap, punch, kick, fire) {
        this.name = name;
        this.health = health;
        this.attacks = {
            slap: slap,
            punch: punch,
            kick: kick,
            fire: fire
        };
        this.items = []
        this.hits = 0
    };
    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };
    function addMods() {
        var total = 1;
        for (var index = 0; index < target.items.length; index++) {
            var item = target.items[index];
            total += item.modifier
        }
        return total
    };
    this.attack = function attack(type) {
        if (target.attacks[type]) {
            target.health -= target.attacks[type] * addMods()
            target.hits++
        }
    }
    this.getTarget = function getTarget() {
        return JSON.parse(JSON.stringify(target))
    }

}