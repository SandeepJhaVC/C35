class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Multiplayer Car Racing");
        title.position(130,0);
        var input = createInput('Player name');
        var button = createButton("Start");
        var greeting = createElement('h4');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Welcome "+name);
            greeting.position(130,160);
        })
    }
}