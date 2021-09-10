//ADVANCED SOFTWARE ENGINEERING H.W. 0: I have added a comment to complete section 1 of H.W. 0

// I've been programming for around a year, and I have learned all of Intro to JS.
// I made a program that uses the following JS skills: for loops, shapes, colors, variables, if statements, draw function, switch, distance, noise

/* 
I would like to acknowledge google (the khan academy user not the search engine ;-)) They helped me SO MUCH! They taught me switch/case and distance
also thanks to emory.andrew.christensen for helping me with candle flicker by teaching me noise

*/
var font = createFont("fantasy");

//whether or not the invite scene is shoing
var inviteSceneOn = false;

//candle moving side to side
var candleX = 100;

//how many bites of the cupcake you took
var bites = 0;

//whether or not you should add or subtract a character (0 Means add, one means subtract)
var click = [0, 0, 0, 0, 0];

//the candle images
{
//squid candle
var squid = getImage("avatars/orange-juice-squid");
//marcimus candle
var marcimus = getImage("avatars/marcimus");
//winston candle
var winston = getImage("creatures/Winston");
//hopper candle
var hopper = getImage("creatures/Hopper-Cool");
}

var characters = [];

//all the characters images
{
var boy = getImage("cute/CharacterBoy");
var catGirl = getImage("cute/CharacterCatGirl");
var girl = getImage("cute/CharacterHornGirl");
var pinkGirl = getImage("cute/CharacterPinkGirl");
var princess = getImage("cute/CharacterPrincessGirl");
}

//background and table
var setup = function () {
    //wall
    background(130, 250, 226);
    //table
    noStroke();
    fill(194, 140, 2);
    rect(-2, 237, 404, 163);
    strokeWeight(2);
};

//no topping or candle button looks
var xOut = function () {
    fill(181, 177, 181, 200);
    rect(377, -2, 23, 31);
    strokeWeight(5);
    stroke(255, 0, 0);
    line(396, 4, 382, 22);
    line(396, 22, 382, 4);
};

//cake colors
var cakeColors = [color(117, 74, 11), color(247, 251, 202), color(242, 150, 242),
                  color(34, 152, 230), color(245, 220, 59)];

//starting flavor (vanilla)
var cakeColor = cakeColors[1];

//plate color option
var plateColors = [color(232, 183, 183), color(162, 177, 235), 
color(112, 235, 129), color(161, 161, 156), color(247, 239, 79)];

//plate color (starts as gray)
var plateColor = plateColors[3];

//plate shadow colors
var plateShadowColors = [color(217, 163, 163), color(139, 157, 217),
color(84, 201, 98), color(145, 145, 145), color(212, 204, 93)];

//plate color shadow (starts as gray)
var plateShadowColor = plateShadowColors[3];

//color of the cupcake wrapper
var wrapperColors = [color(137, 179, 250), color(252, 176, 243), color(140, 250, 175),
color(250, 183, 100), color(163, 160, 163)];

//darker part of cupcake wrapper colors
var wrapperLineColors = [color(59, 130, 245), color(245, 110, 234), color(40, 166, 78),
color(250, 142, 10), color(99, 99, 97)];

//what the color of warpper is now (blue)
var wrapperColor = wrapperColors[0];

//what the color of wrapper lines is now (blue)
var wrapperLineColor = wrapperLineColors[0];

//first option box (starting with home scene)
var option = 0;

//what topping does it start off with (in this case none)
var topping = 0;

//what candle does it start off with (in this case none)
var candle = 0;

//whether the end scene shows (now its no)
var end = 0;

//what makes the lines of the cupcake
var theLines = function (x, y, size) {
    for(var i = 0; i < 5; i++){
        line((x - size*0.22) + i * size * 0.31, y+size * 0.19, (x - size * -0.10) + i * size * 0.15, y + size * 1.21);
    }
};

var wrapper = function (x, y, size, colorLine, colorWrapper) {
    //circles or cupcake
    strokeWeight(0.04 * size);
    //bottom part (the cup)
    stroke(colorLine);
    fill(colorWrapper);
    quad(x + 1.25 * size, y + 0.16 * size, x - 0.48 * size, y + 0.16 * size, x - 0.04 *     size, y + 1.23 * size, x + 0.84 * size, y + 1.23 * size);
    //lines on bottom part
    theLines(x, y, size); 
    strokeWeight(1);
};

//the cupcakes
var cake = function (x, y, size, color) {
    //circles or cupcake
    strokeWeight(0.04 * size);
    //the color of the cake
    stroke(color);
    fill(color); 
    //circles to make the cupcake
    ellipse(x, y, size, size); //left most
    ellipse(x + 0.77 * size, y, size, size); //right most
    ellipse(x + 0.18 * size, y - 0.32 * size, size, size); //up left
    ellipse(x + 1/2 * size, y - 0.32 * size, size, size); //up right
    wrapper(x, y, size, wrapperLineColor, wrapperColor);
};

//to make a plate
var plate = function (x, y, sizeX, sizeY, colorPlate, colorShadow) {
    strokeWeight(sizeX/72);
    //the plate
    fill(colorPlate);
    ellipse(x, y, sizeX, sizeY);
    // draw the arc without fill
    noFill();
    stroke(colorShadow);
    arc(x, y - sizeY / 4.4, sizeX, sizeY / 0.8, 45.9, 125);
    noStroke();
};

//beginning scene (flavors) and what shows on each scene
var mainScene = function(){
    setup();
    //the plate behind the cupcake
    plate(144, 348, 209, 96, plateColor, plateShadowColor);
    //Cupcake
    cake(103, 238, 100, cakeColor);
    //back button
    noStroke();
    fill(43, 0, 255);
    rect(0, 0, 87, 38);
    //next button
    rect(150, 0, 87, 38);
    //wors on buttons
    fill(130, 250, 226);
    textSize(30);
    text("Back", 10, 28);
    text("Next", 163, 28);
    
};

//color of the presnts
var presentColor = [color(138, 17, 138), color(217, 151, 167), color(31, 19, 138), 
color (23, 136, 140)];

//color of the wrappers of the presents
var presentWrapperColor = [color(25, 135, 22), color(165, 224, 232), color(128, 245, 130), 
color (115, 11, 61)];

//presnts
var present = function (x, y, size, pColor, wColor) {
    fill(pColor);
    rect(x, y, size, size, 7);
    fill(wColor);
    //vertical line of wrapper
    rect(x + size/2.4, y, size/(20/3), size);
    //horizontal line of wrapper
    rect(x, y + size/2.3, size, size/(20/3));
}; 

//the home scene
var optionsHome = function () {
    fill(130, 250, 226);
    rect(0, 0, 100, 50);
    fill(43, 0, 255);
    textFont(font, 50);
    text("Cupcake Maker!", 13, 95);
    //blue and burgendy present
    present(274, 119, 200, presentColor[3], presentWrapperColor[3]);
    //pruple amd green present
    present(242, 164, 126, presentColor[0], presentWrapperColor[0]);
    //pink and mint present
    present(319, 233, 100, presentColor[1], presentWrapperColor[2]);
    //blue and orange present
    present(255, 258, 100, presentColor[2], presentWrapperColor[1]);
};

//the gray box for options
var optionsBox = function () {
    //options box
    fill(48, 47, 48, 200);
    rect(286, 0, 116, 400);
};

//the side bar (cupcakes)
var optionsCakes = function () {
    optionsBox();
    //makes the cup cakes spread out evenly
    for (var i = 0; i < cakeColors.length; i++){
        cake(333, 33 + i * 80, 34, cakeColors[i]);   
    }
};

//Cherrys
var cherryOption = function (x, y, size) {
    //Cherry
    popMatrix();
    fill(227, 4, 4);
    noStroke();
    ellipse(x, y, size, size);
    fill(247, 74, 74); //cherry shine
    ellipse(x + size * 0.16, y - size * 0.08, size * 0.2, size * 0.4);
    stroke(0); //cherry stem
    strokeWeight(size*0.11);
    line(x - size * 0.08, y - size * 0.54, x - size * 0.24, y - size * 1.2);
    strokeWeight(1);
};

//Oreos
var oreoOption = function (x, y, size) {
    //oreo
    fill(0);
    noStroke();
    ellipse(x, y, size, size); //bottom piece
    fill(255, 255, 255);
    ellipse(x, y - size * 0.07, size * 0.84, size * 0.84);//middle
    fill(0);
    ellipse(x, y - size * 0.2, size, size - size * 0.11);//top piece
    //word on the oreo
    textSize(size * 0.39);
    fill(94, 92, 92);
    text("oreo", x - size*0.38, y - size*0.08);
};

//gum drop colors
{
//gumdrop red
var gumRed = function (x, y, size) {
    noStroke();
    fill(230, 3, 3); //gumdrop
    ellipse(x, y, size, size);
    fill(252, 111, 111); //red shine
    ellipse(x + size * 0.2, y, size - size * 1.19, size - size * 0.47);
};

//gumdrop green
var gumGreen = function (x, y, size) {
    noStroke();
    fill(14, 204, 62); //green gumdrop
    ellipse(x, y, size, size);
    fill(70, 242, 113); //green shine
    ellipse(x + size * 0.2, y, size - size * 1.19, size - size * 0.47);
};

//gumdrop purple
var gumPurple = function (x, y, size) {
    noStroke();
    fill(213, 0, 255); //purple gumdrop
    ellipse(x, y, size, size);
    fill(230, 145, 247); //purple shine
    ellipse(x + size * 0.2, y, size - size * 1.19, size - size * 0.47);
};

//gumdrop blue
var gumBlue = function (x, y, size) {
    noStroke();
    fill(0, 217, 255); //blue gumdrop
    ellipse(x, y, size, size);
    fill(175, 241, 250); //blue shine
    ellipse(x + size * 0.2, y, size - size * 1.19, size - size * 0.47);
};

//gumdrop orange
var gumOrange = function (x, y, size) {
    noStroke();
    fill(255, 170, 0); //orange gumdrop
    ellipse(x, y, size, size);
    fill(247, 201, 108); //orange shine
    ellipse(x + size * 0.2, y, size - size * 1.19, size - size * 0.47);
};
}

//the toppings page
var optionsToppings = function () {
    optionsBox();
    //sprinkles (mini)
    pushMatrix();
    rotate(20);//left up
    fill(136, 0, 255);
    rect(312, -99, 10, 20);
    rotate(10); //right down
    fill(0, 255, 34);
    rect(329, -151, 10, 20);
    fill(242, 140, 237);//left down
    rotate(50);
    rect(107, -329, 10, 20);
    fill(0, 251, 255); //right up
    rect(90, -356, 10, 20);
    fill(255, 217, 0); //left mid
    rotate(40);
    rect(-140, -318, 10, 20);
    popMatrix();
    //Cherry (mini)
    cherryOption(345, 142, 31);
    //oreo
    oreoOption(343, 245, 45);
    //Gum Drops
    gumRed(329, 327, 20);
    gumGreen(361, 336, 20);
    gumPurple(341, 331, 20);
    gumBlue(328, 351, 20);
    gumOrange(346, 353, 20);
    xOut();
};

//sprinkles on the cupcake
var sprinkles = function () {
    noStroke();
    pushMatrix();
    rotate(4);
    fill(250, 87, 212);//pink
    rect(91, 215, 10, 20);
    rect(173, 171, 10, 20);
    fill(105, 228, 250);//blue
    rotate(14);
    rect(208, 160, 10, 20);
    rect(155, 118, 10, 20);
    fill(170, 0, 255);//purple
    rotate(14);
    rect(289, 69, 10, 20);
    rect(207, 89, 10, 20);
    fill(34, 255, 0);//green
    rotate(14);
    rect(244, 69, 10, 20);
    rect(277, 20, 10, 20);
    fill(247, 212, 74);//yellow
    rotate(14);
    rect(218, -59, 10, 20);
    rect(207, 14, 10, 20);
    popMatrix();
};

//cherrys on cupcake
var cherrys = function () {
    cherryOption(143, 162, 40); //top one
    cherryOption(68, 230, 20); //left most one
    cherryOption(117, 241, 20); //middle left
    cherryOption(166, 241, 20); //middle right
    cherryOption(213, 230, 20); //right most one
};

//oreos on cupcake
var oreos = function () {
    oreoOption(139, 172, 80);
    oreoOption(72, 212, 40);
    oreoOption(208, 212, 40);
    oreoOption(114, 233, 40);
    oreoOption(164, 233, 40);
};

//gumdrops on cupcake
var gumdrops = function () {
    gumRed(136, 193, 30);
    gumBlue(112, 161, 30);
    gumGreen(170, 176, 30);
    gumPurple(98, 232, 30);
    gumOrange(219, 227, 30);
    gumGreen(97, 197, 30);
    gumPurple(190, 205, 30);
    gumRed(179, 233, 30);
    gumOrange(135, 227, 30);
    gumBlue(62, 223, 30);
};

//all the different candles
{
//squid candle
var candleSquid = function (x, y, size) {
    noStroke();
    image(squid, x, y, size, size * 0.9);
    //candle stick
    fill(0);
    rect(x + size * 0.46, y - size * 0.28, size * 0.08, size * 0.33);
    //flame
    fill(255, 166, 0);
    ellipse(x + size * 0.5, y - size * 0.31, size * 0.2, size * 0.2);
    triangle(x + size * 0.41, y - size * 0.35, x + size * 0.6, y - size * 0.33, x + size * candleX, y - size * 0.61);
    //Smaller flame inside
    fill(247, 113, 24);
    ellipse(x + size * 0.5, y - size * 0.30, size * 0.12, size * 0.12);
    triangle(x + size * 0.44, y - size * 0.33, x + size * 0.56, y - size * 0.32, x + size * candleX + 1, y - size * 0.47);
};

//marcimus candle
var candleMarcimus = function (x, y, size) {
    noStroke();
    image(marcimus, x, y, size, size);
    //candle stick
    fill(0);
    rect(x + size * 0.46, y - size * 0.15, size * 0.08, size * 0.33);
    //flame
    fill(255, 166, 0);
    ellipse(x + size * 0.5, y - size * 0.22, size * 0.2, size * 0.2);
    triangle(x + size * 0.41, y - size * 0.27, x + size * 0.6, y - size * 0.23, x + size * candleX, y - size * 0.49);
    //Smaller flame inside
    fill(247, 113, 24);
    ellipse(x + size * 0.5, y - size * 0.22, size * 0.12, size * 0.12);
    triangle(x + size * 0.44, y - size * 0.24, x + size * 0.56, y - size * 0.24, x + size * candleX + 1, y - size * 0.39);
};

//winston candle
var candleWinston = function (x, y, size) {
    noStroke();
    image(winston, x, y, size, size);
    //candle stick
    fill(0);
    rect(x + size * 0.46, y - size * 0.41, size * 0.09, size * 0.43);
    //flame
    fill(255, 166, 0);
    ellipse(x + size * 0.5, y - size * 0.39, size * 0.2, size * 0.2);
    triangle(x + size * 0.41, y - size * 0.44, x + size * 0.6, y - size * 0.40, x + size * candleX, y - size * 0.85);
    //Smaller flame inside
    fill(247, 113, 24);
    ellipse(x + size * 0.5, y - size * 0.40, size * 0.12, size * 0.12);
    triangle(x + size * 0.44, y - size * 0.44, x + size * 0.56, y - size * 0.44, x + size * candleX + 1, y - size * 0.66);
};

//hopper candle
var candleHopper = function (x, y, size) {
    noStroke();
    image(hopper, x, y, size, size);
    //candle stick
    fill(0);
    rect(x + size * 0.46, y - size * 0.41, size * 0.09, size * 0.43);
    //flame
    fill(255, 166, 0);
    ellipse(x + size * 0.5, y - size * 0.39, size * 0.2, size * 0.2);
    triangle(x + size * 0.41, y - size * 0.44, x + size * 0.6, y - size * 0.40, x + size * candleX, y - size * 0.85);
    //Smaller flame inside
    fill(247, 113, 24);
    ellipse(x + size * 0.5, y - size * 0.40, size * 0.12, size * 0.12);
    triangle(x + size * 0.44, y - size * 0.42, x + size * 0.56, y - size * 0.42, x + size * candleX + 1, y - size * 0.69);
};
}

//candles scene (option box)
var optionsCandles = function () {
    optionsBox();
    candleSquid(312, 45, 63);
    candleMarcimus(310, 140, 66);
    candleWinston(321, 246, 43);
    candleHopper(318, 342, 53);
    xOut();
};

//plate scene
var optionsPlates = function () {
    optionsBox();
    //lays out the plate in the side bar
    for (var i = 0; i < 5; i++){
        plate(342, 41 + i * 80, 96, 65, plateColors[i], plateShadowColors[i]);   
    }
};

//the wrapper scene
var optionsWrapper = function () {
    optionsBox();
    for (var i = 0; i < wrapperColors.length; i++){
        wrapper(331, 11 + i * 80, 40, wrapperLineColors[i], wrapperColors[i]);   
    }
};

//the scene where you pick whose invited
var optionsInvite = function () {
    stroke(122, 94, 22);
    fill(163, 127, 35);
    //back right leg
    rect(213, 218, 17, 73, 5);
    //back left leg
    rect(104, 218, 17, 73, 5);
    //front left leg
    rect(92, 248, 17, 73, 5);
    //front right leg
    rect(204, 248, 17, 73, 5);
    //the table
    fill(194, 140, 2);
    rect(83, 202, 148, 73, 5);
    noStroke();
    cake(137, 235, 25, cakeColor);
    //makes the candle smaller when you go to this scene
    {
    if (candle === 1) {
        candleSquid(134, 204, 24);
    }
    if (candle === 2) {
        candleMarcimus(134, 202, 24);
    }
    if (candle === 3) {
        candleWinston(135, 202, 18);
    }
    if (candle === 4) {
        candleHopper(135, 202, 19);
    }
    }
    //makes the toppings small when you go to this screen
    if (topping === 1) {
        fill(250, 87, 212);
        rect(150, 228,  3, 6);
        fill(105, 228, 250);
        rect(137, 227,  3, 6);
        fill(170, 0, 255);
        rect(162, 227,  3, 6);
        fill(34, 255, 0);
        rect(131, 221,  3, 6);
        fill(247, 212, 74);
        rect(142, 223,  3, 6);
    }
    if (topping === 2) {
        cherryOption(152, 233, 5);
        cherryOption(141, 233, 5);
        cherryOption(160, 231, 5);
        cherryOption(131, 231, 5);
    }
    if (topping === 3) {
        oreoOption(161, 229, 7);
        oreoOption(131, 229, 7);
        oreoOption(151, 233, 7);
        oreoOption(142, 233, 7);
    }
    if (topping === 4) {
        gumRed(138, 227, 5);
        gumGreen(156, 227, 5);
        gumBlue(146, 235, 5);
        gumPurple(127, 229, 5);
        gumOrange(165, 233, 5);
        gumRed(156, 221, 5);
        gumGreen(133, 232, 5);
        gumOrange(148, 225, 5);
    }
    fill(82, 80, 80, 220);
    noStroke();
    rect(0, 326, 401, 100);
    image(boy, -8, 283, 100, 131);
    image(girl, 72, 283, 100, 131);
    image(princess, 148, 292, 106, 116);
    image(catGirl, 235, 283, 100, 131);
    image(pinkGirl, 311, 283, 100, 131);
    fill(43, 0, 255);
    text("Add some guests!", 3, 80);
};

//takes away the characters
var takeAway = function () {
    for (var i = 0; i < characters.length; i++) {
        characters[i] = false;
        click[i] = 0;
    }
};

//last scene
var optionsEnd = function () {
    //the words
    textSize(30);
    fill(0, 68, 255);
    text("Great Job! And\nhappy coding\neveryone!", 193, 87);
    pushMatrix();
    rotate(-20);
    textSize(20);
    text("Click to eat!", -25, 92);
    popMatrix();
};

//option menus for the pages and the candle movement
draw = function() {
    mainScene();
    //option menu (for the different pages)
    switch(option) {
        case 0: optionsHome(); break;
        case 1: optionsCakes(); break;
        case 2: optionsToppings(); break;
        case 3: optionsCandles(); break;
        case 4 : optionsPlates(); break;
        case 5: optionsWrapper(); break;
        case 6 :optionsInvite(); break;
        case 7: optionsEnd(); break;
    }
    //the different toppings 
    switch(topping) {
        case 1: sprinkles(); break;
        case 2: cherrys(); break;
        case 3: oreos(); break;
        case 4: gumdrops(); break;
    }
    //the different candles
    switch(candle) {
        case 1: candleSquid(95, 89, 92);break;
        case 2: candleMarcimus(88, 83, 100); break;
        case 3: candleWinston(105, 114, 69); break;
        case 4: candleHopper(93, 83, 86); break;
    }
    //eating page
    switch(end) {
        case 1: optionsEnd();
    }
    //makes the candle move
    candleX = noise(1/22, frameCount);
    //The cupcake gets eaten with each bite
    {
    if(bites >= 2) {
        //bite marks
        fill(130, 250, 226);
        ellipse(50, 181, 87, 100);
        ellipse(92, 204, 20, 20);
        ellipse(59, 229, 20, 20);
        ellipse(94, 169, 20, 20);
        ellipse(78, 220, 29, 20);
        ellipse(97, 187, 20, 20);
        fill(130, 250, 226);
        rect(149, -7, 100, 45);
    }
    if(bites >= 3) {
        fill(130, 250, 226);
        ellipse(100, 166, 50, 50);
        ellipse(126, 164, 50, 30);
        ellipse(110, 183, 50, 30);
        ellipse(102, 203, 50, 30);
        rect(112, 11, 79, 155);
        rect(87, 70, 25, 113);
        ellipse(151, 135, 69, 100);
        //to make the candle move to the side of the table
        if(candle === 1) {
            candleSquid(258, 251, 92);
            fill(130, 250, 226);
            rect(247, 186, 100, 48);
        }
        if(candle === 2) {
            candleMarcimus(258, 237, 100);
            fill(130, 250, 226);
            rect(247, 179, 100, 48);
        }
        if(candle === 3) {
            candleWinston(258, 245, 69);
            fill(130, 250, 226);
            rect(247, 179, 100, 48);
        }
        if(candle === 4) {
            candleHopper(258, 251, 86);
            fill(130, 250, 226);
            rect(247, 179, 100, 48);
        }
    }
    if(bites >= 4) {
        ellipse(93, 211, 50, 50);
        ellipse(145, 164, 50, 30);
        ellipse(134, 183, 50, 30);
        ellipse(125, 203, 50, 30);
    }
    if(bites >= 5) {
        ellipse(170, 164, 50, 30);
        ellipse(158, 183, 50, 30);
        ellipse(138, 203, 50, 30);
    }
    if(bites >= 6) {
        ellipse(185, 193, 50, 50);
        ellipse(125, 221, 50, 30);
        ellipse(167, 214, 50, 30);
    }
    if(bites >= 7) {
        ellipse(207, 206, 74, 50);
        ellipse(125, 221, 50, 30);
        ellipse(167, 214, 50, 30);
        ellipse(100, 203, 100, 100);
        ellipse(115, 200, 100, 100);
        fill(194, 140, 2);
        ellipse(138, 245, 36, 17);
        rect(46, 237, 100, 16);
    }
    if (bites >= 8) {
        fill(130, 250, 226);
        ellipse(169, 218, 100, 63);
        fill(194, 140, 2);
        ellipse(199, 245, 36, 17);
        rect(102, 237, 100, 16);
    }
    if (bites >= 9) {
        fill(130, 250, 226);
        ellipse(197, 218, 100, 63);
        fill(194, 140, 2);
        rect(136, 237, 100, 16);
    }
    }
    if (inviteSceneOn === true) {
        //covers the cupcake
        fill(130, 250, 226);
        rect(38, 38, 211, 237);
        rect(95, 8, 52, 100);
        //floor
        fill(71, 54, 18);
        rect(-9, 165, 410, 244);
        optionsInvite();
    }
    if (characters[0] === true) {
        image(boy, 262, 69, 100, 177);
    }
    if (characters[1] === true) {
        image(girl, -22, 153, 124, 170);
    }
    if (characters[2] === true) {
        image(princess, 100, 52, 100, 156);
    }
    if (characters[3] === true) {
        image(catGirl, 231, 171, 116, 143);
    }
    if (characters[4] === true) {
        image(pinkGirl, 51, 100, 83, 106);
    }
};

//changes what items you clicked (flavor candle ect) and whether you go forward or back in pages
var mouseClicked = function () {
    //back button
    if(mouseX > 0 && mouseX < 87 && mouseY > 0 && mouseY < 38 && option > 0){
        option--;
    }
    //next button
    if(mouseX > 150 && mouseX < 237 && mouseY > 0 && mouseY < 38 && option < 7){
        option++;
    }
    //cakes options
    if(option === 1){
        //takes away bite from last page if you go back
        end = 0;
        if (mouseX > 315 && mouseX < 375){
            //check y value for each cake
            for (var i = 0; i < 5; i++){
                if(mouseY > i * 80 && mouseY < 80 + i * 80){
                    cakeColor = cakeColors[i];
                }
            }
        } 
        inviteSceneOn = false;
    }
    //toppings options
    else if(option === 2){
        //takes away bite from last page if you go back
        end = 0;
        if(dist(mouseX, mouseY, 342, 37) < 30) {
            //sprinkles
            topping = 1;
        }
        if(dist(mouseX, mouseY, 345, 138) < 20){
            //cherry
            topping = 2;
        }
        if(dist(mouseX, mouseY, 343, 246) < 30){
            //oreo
            topping = 3;
        }
        if(dist(mouseX, mouseY, 344, 335) < 25){
            //gumdrop
            topping = 4;
        }
        if (mouseX > 377 && mouseY < 30) {
            //takes away the topping
            topping = 0;
        }
        inviteSceneOn = false;
    }
    //candle options
    else if(option === 3){
        //takes away bite from last page if you go back
        end = 0;
        if (dist(mouseX, mouseY, 345, 54) < 48.5) {
            candle = 1;
        }
        if(dist(mouseX, mouseY, 344, 154) < 47){
            candle = 2;
        }
        if(dist(mouseX, mouseY, 343, 250) < 39.5){
            candle = 3;
        }
        if(dist(mouseX, mouseY, 346, 347) < 49){
            candle = 4;
        }
        if (mouseX > 377 && mouseY < 30) {
            //takes away the topping
            candle = 0;
        }
        inviteSceneOn = false;
    }
    //plate page
    else if(option === 4) {
        //takes away bite from last page if you go back
        end = 0;
        //finds out what plate you clicked and changes the color based on that
        if(mouseX > 294 && mouseX < 390) {
            for (var i = 0; i < 5; i++) {
                if(mouseY > i * 80 + 7 && mouseY < 75 + i * 80) {
                    plateColor = plateColors[i];
                    plateShadowColor = plateShadowColors[i];
                }
            }
        }
        inviteSceneOn = false;
    }
    //wrapper page
    else if (option === 5) {
        //takes away bite from last page if you go back
        end = 0;
        bites = 0;
        //finds out what wrapper you pressed and changes the color
        if (mouseX > 300 && mouseX < 383) {
            for (var i = 0; i < 5; i ++) {
                if(mouseY > i * 80 + 20 && mouseY < 60 + i * 80) {
                    wrapperColor = wrapperColors[i];
                    wrapperLineColor = wrapperLineColors[i];
                }
            }
        }
        inviteSceneOn = false;
        takeAway();
    }
    //invite page
    else if (option === 6) {
        end = 0;
        bites = 0;
        inviteSceneOn = true;
        if (mouseY > 328 && mouseY < 400) {
            for (var i = 0; i < 5; i ++) {
                if (mouseX > i * 75 + 15 && mouseX < i * 85 + 65) {
                    if(click[i] === 0) {
                        characters[i] = true;
                        click[i] = 1;
                        }
                    else if(click[i] === 1) {
                        characters[i] = false;
                        click[i] = 0;
                    }
                }
            }
        }
    }
    //last page
    else if (option === 7) {
        //makes the last page get a bite mark
        end = 1;
        bites ++;
        inviteSceneOn = false;
        takeAway();
    }
    
};
