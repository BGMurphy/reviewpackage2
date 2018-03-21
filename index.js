
var menu = document.getElementById("menu");
var counter = "closed";
var imgFile = document.getElementById("imgFile");
var titleText = document.getElementById("titleText");
var descriptionText = document.getElementById("descriptionText");
var title = document.getElementById("title");
var bgColor = document.getElementById("bgColor");
var left = 0,
bottom = 0,
height = 300;
var addStory = document.getElementById("addStory");
var currentImage = null;
currentColor = "black";

menu.addEventListener("click", function(){
    expandMenu();
});

imgFile.addEventListener("keyup", function(ev){
    changeBG(ev);
});

titleText.addEventListener("keyup", function(ev){
    changeTitle(ev);
});

descriptionText.addEventListener("keyup", function(ev){
    changeDescription(ev);
});

bgColor.addEventListener("change", function(){
    changeColor();
});

document.addEventListener("keydown", function(ev){
    moveBG(ev);
});

addStory.addEventListener("click", function(){
    createStoryboard();
});

function expandMenu(){
    if(counter == "closed"){
        controls.style.height = "150px";
        counter = "open";
    } else{
        controls.style.height = "30px";
        counter = "closed";
    };  
};

function changeColor(){
    title.style.color = bgColor.value;
    description.style.color = bgColor.value;
    currentColor = bgColor.value;
};

function changeDescription(ev){
    if(ev.keyCode > 0){
        description.innerHTML = descriptionText.value;
    };
};

function changeTitle(ev){
    if(ev.keyCode > 0){
        title.innerHTML = titleText.value;
    };
};

function changeBG(ev){
    if(ev.keyCode == 13){
        if(imgFile.value == "horse"){
            background.style.backgroundImage = "url(img/bg1.jpeg)";
            currentImage = "url(img/bg1.jpeg)";
        } else if(imgFile.value == "night"){
            background.style.backgroundImage = "url(img/bg2.png)";
            currentImage = "url(img/bg2.png)";
        } else if(imgFile.value == "mountain"){
            background.style.backgroundImage = "url(img/bg3.jpg)";
            currentImage = "url(img/bg3.jpg)";
        } else if(imgFile.value.indexOf("epic") >= 0){
            background.style.backgroundImage = "url(img/bg4.jpg)";
            currentImage = "url(img/bg4.jpg)";
        } else{
            background.style.backgroundImage = "url("+imgFile.value+")";
            currentImage = "url("+imgFile.value+")";
        };
    };
};

function moveBG(ev){
    if(ev.keyCode == 37){
        left -= 10
        background.style.backgroundPosition = left+"px"+" "+bottom+"px";
    } else if(ev.keyCode == 39){
        left += 10
        background.style.backgroundPosition = left+"px"+" "+bottom+"px";
    } else if(ev.keyCode == 38){
        bottom -= 10
        background.style.backgroundPosition = left+"px"+" "+bottom+"px";
    } else if(ev.keyCode == 40){
        bottom += 10
        background.style.backgroundPosition = left+"px"+" "+bottom+"px";
    } else if(ev.keyCode == 107){
        height += 10
        background.style.height = height+"px";
    } else if(ev.keyCode == 109){
        height -= 10
        background.style.height = height+"px";
    };
};

function createStoryboard(){
    var storyboard = document.createElement("div");
    var newTitle = document.createElement("div");
    var newDescription = document.createElement("div");
    storyboard.className = "background col-lg-3 col-md-4 col-sm-6 col-12";
    newTitle.className = "title";
    newDescription.className = "description";
    
    newDescription.style.color = currentColor;
    newTitle.style.color = currentColor;
    newDescription.innerHTML = descriptionText.value;
    newTitle.innerHTML = titleText.value;
    
    storyboard.style.backgroundImage = currentImage;
    storyboard.style.backgroundPosition = left+"px"+" "+bottom+"px";
    storyboard.style.height = height+"px";
    
    
    
    display.appendChild(storyboard);
    storyboard.appendChild(newTitle);
    storyboard.appendChild(newDescription);
};






























