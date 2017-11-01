
function gameController() {
    var gameService = new GameService()

    function drawItems() {
        var items = gameService.getItems()
        var template = ``
        for (var item in items) {
            template += `<button type="button" class="btn" onclick="giveItem('` + item + `')">` + item + `</button>`
        }
        document.getElementById('items').innerHTML = template
    }
    function update() {
        var target = gameService.getTarget()
        document.getElementById('health').innerHTML = target.health
        document.getElementById('name').innerHTML = target.name
        document.getElementById('hits').innerHTML = target.hits
        if (target.health <= 0) {
            document.getElementById("players").innerHTML = `<h1>Knockout!</h1>`
        }
    }
    this.attack = function attack(type) {
        gameService.attack(type)
        update()
    }
    update()
    drawItems()
}