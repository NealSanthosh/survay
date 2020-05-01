class Form {
    constructor(){
    }
    display(){
        var title = createElement('h2');
        title.html("Welcome To The Survey");
        title.position(130,0);
        var name = createInput("name");
        name.position(130,120);
        var email = createInput("email");
        email.position(130,170);
        var button = createButton('Start');
        button.position(250,200);
        var greeting = createElement('h3');
        button.mouseIsPressed(()=>{
            name.hide();
            email.hide();
            button.hide();
                        
            greeting.html("Hello " + name);
            greeting.position(130,160);
        });
    }
}