console.log("hello world")
var q = new Audio('sounds/song1.wav');

var w = new Audio('sounds/song2.wav');
        
var e = new Audio('sounds/song3.wav');

var r = new Audio('sounds/song4.wav');
        
var t = new Audio('sounds/song5.wav');
        
var y = new Audio('sounds/song6.wav');
        
var u = new Audio('sounds/song7.wav');

function makeSound(key) { 
	switch (key) {
            case "q":
                q.play();
            break;
            
            case "w":
                w.play();
            break;

            case "e":
                e.play();
            break;

            case "r":
                r.play();
            break;

            case "t":
                t.play();
            break;

            case "y":
                y.play();
            break;

            case "u":
                u.play();
            break;

            default: console.log(key);
        }
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){ console.log(this.innerHTML)
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
    
}
addEventListener("keydown",function(){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}