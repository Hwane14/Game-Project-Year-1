/*
	The Game Project Part 7 - Game Mechanics
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var flagpole;
var isPlummeting;
var trees_x
var clouds
var mountains_x
var cameraPosX
var canyons
var collectables
var gameOver
var levelComplete
var gameScore

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    gameOver = false;
    levelComplete = false;
    gameScore = 0;
    
     mountain = {y_pos: 332};
    
	treePos_y = height/2;
    
    flagpole = [{x_pos: -600, y_pos: 400, isReached: false},
                {x_pos: 2000, y_pos: 400, isReached: false}];
    
    trees_x = [-880, 850, 1300, 2200];
    
    mountains_x = [-1200, -600, 150, 800, 1500, 2200];

    clouds = [{x: -1120, y: 60, size: 100},
              {x: -850, y: 130, size: 90},
              {x: -512, y: 100, size: 60},
              {x: -200, y: 150, size: 70},
              {x: 100, y: 130, size: 90},
              {x: 512, y: 100, size: 60},
              {x: 924, y: 75, size: 70},
              {x: 1200, y: 130, size: 90},
              {x: 1512, y: 80, size: 60},
              {x: 1924, y: 75, size: 70},
              {x: 2300, y: 70, size: 80}];

    canyons = [{x:-400, width:170},
               {x:-200, width:170},
               {x:0, width:170},
               {x:200, width:170},
               {x:600, width:170},
               {x:1000, width:170},
               {x:1400, width:170},
               {x:1600, width:170}];

    collectables = [{x_pos: -490, y_pos: 400, size: 50, isFound: false},
                    {x_pos: -210, y_pos: 400, size: 50, isFound: false},
                    {x_pos: -10, y_pos: 400, size: 50, isFound: false},
                    {x_pos: 190, y_pos: 400, size: 50, isFound: false},
                    {x_pos: 660, y_pos: 350, size: 50, isFound: false},
                    {x_pos: 710, y_pos: 350, size: 50, isFound: false},
                    {x_pos: 900, y_pos: 400, size: 50, isFound: false},
                    {x_pos: 1060, y_pos: 350, size: 50, isFound: false},
                    {x_pos: 1110, y_pos: 350, size: 50, isFound: false},
                    {x_pos: 1460, y_pos: 350, size: 50, isFound: false},
                    {x_pos: 1710, y_pos: 350, size: 50, isFound: false}];
    
    cameraPosX = 0;
         
    }

function draw()
{

	///////////DRAWING CODE//////////
    
    cameraPosX = gameChar_x - width/2;

	background(100,155,255); //fill the sky blue
    
    
    noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    fill(255, 215, 0);
    textSize(30);
    text("Score: " + gameScore, width - 150, 30);
    
    push();
    translate(-cameraPosX, 0);
    
    //Canyons
    for (var i = 0; i < canyons.length; i++)
        {
            noStroke();
            fill(92, 40, 0);
            rect(canyons[i].x, floorPos_y, canyons[i].width, height -floorPos_y);
        }
    
    //Mountains
    for (var i = 0; i < mountains_x.length; i++)
        {
            //Mountain
            fill(150);
            //Left mountain
            triangle(mountains_x[i] - 200, mountain.y_pos + 100, mountains_x[i] - 100, mountain.y_pos - 76, mountains_x[i], mountain.y_pos + 100);
            //Middle mountain
            triangle(mountains_x[i] - 150, mountain.y_pos + 100, mountains_x[i] + 50, mountain.y_pos - 182, mountains_x[i] + 250, mountain.y_pos + 100);
            //Right mountain
            triangle(mountains_x[i] + 100, mountain.y_pos + 100, mountains_x[i] + 200, mountain.y_pos - 32, mountains_x[i] + 300, mountain.y_pos + 100);
            
            //Snow
            fill(255, 255, 255);
            //Left snow
            beginShape();
            vertex(mountains_x[i] - 135, mountain.y_pos - 15);
            vertex(mountains_x[i] - 114, mountain.y_pos - 29);
            vertex(mountains_x[i] - 89, mountain.y_pos - 12);
            vertex(mountains_x[i] - 67, mountain.y_pos - 18);
            vertex(mountains_x[i] - 100, mountain.y_pos - 76);
            endShape();
            //Middle snow
            beginShape();
            vertex(mountains_x[i] + 17, mountain.y_pos - 137);
            vertex(mountains_x[i] + 37, mountain.y_pos - 127);
            vertex(mountains_x[i] + 58, mountain.y_pos - 138);
            vertex(mountains_x[i] + 89, mountain.y_pos - 127);
            vertex(mountains_x[i] + 50, mountain.y_pos - 182);
            endShape();
            //Right snow
            beginShape();
            vertex(mountains_x[i] + 177, mountain.y_pos - 2);
            vertex(mountains_x[i] + 191, mountain.y_pos - 8);
            vertex(mountains_x[i] + 206, mountain.y_pos + 1);
            vertex(mountains_x[i] + 223, mountain.y_pos - 2);
            vertex(mountains_x[i] + 200, mountain.y_pos - 32);
            endShape();
 
        }
    
    
    //Clouds
    for (var i = 0; i < clouds.length; i++)
        {
            //Cloud
            fill(255);
            ellipse(clouds[i].x, clouds[i].y, clouds[i].size);
            ellipse(clouds[i].x + 35, clouds[i].y + 35, clouds[i].size);
            ellipse(clouds[i].x - 10, clouds[i].y + 35, clouds[i].size);
            ellipse(clouds[i].x - 50, clouds[i].y + 20, clouds[i].size);
            ellipse(clouds[i].x + 50, clouds[i].y, clouds[i].size);
            ellipse(clouds[i].x + 80, clouds[i].y + 35, clouds[i].size);

        }
    
    
    //Trees
    for (var i = 0; i < trees_x.length; i++)
        {
            //Tree
            //Trunk
            noStroke();
            fill(165, 42, 42);
            rect(trees_x[i], treePos_y + 52, 20, 93);
            //Green square
            fill(0, 100, 0);
            rect(trees_x[i] - 38, treePos_y - 41, 96, 100, 15, 15, 15, 15);
            //Apples
            stroke(255, 0, 0);
            strokeWeight(10);
            point(trees_x[i] - 19, treePos_y + 26);
            point(trees_x[i] + 25, treePos_y - 9);
            point(trees_x[i] + 16, treePos_y + 24);
            point(trees_x[i] - 3, treePos_y - 32);
            point(trees_x[i] + 36, treePos_y + 38);
            point(trees_x[i] + 45, treePos_y - 28);
            point(trees_x[i] - 22, treePos_y - 10);
            point(trees_x[i] - 3, treePos_y + 43);

        }
    
    
    //Flag pole
    for (var i = 0; i < flagpole.length; i++)
        {
    if (!flagpole[i].isReached)
            {
               //Pole
               noStroke();
               fill(184, 134, 11);
               rect(flagpole[i].x_pos, 338, 5, 95);
               ellipse(flagpole[i].x_pos + 2.5, 335, 10, 10);
               //Flag
               fill(178, 34, 34);
               triangle(flagpole[i].x_pos + 5, floorPos_y - 20, flagpole[i].x_pos + 5, floorPos_y, flagpole[i].x_pos + 50, floorPos_y - 10);
            }
    
    else
            {
               levelComplete = true;
               //Pole
               noStroke();
               fill(184, 134, 11);
               rect(flagpole[i].x_pos, 338, 5, 95);
               ellipse(flagpole[i].x_pos + 2.5, 335, 10, 10);
               //Flag
               fill(178, 34, 34);
               triangle(flagpole[i].x_pos + 5, flagpole[i].y_pos - 60, flagpole[i].x_pos + 5, flagpole[i].y_pos - 40, flagpole[i].x_pos + 50, flagpole[i].y_pos - 47);
            }
        }

    
    //Collectables
    for (var i = 0; i < collectables.length; i++)
        {
    if (!collectables[i].isFound)
            {
             stroke(0);
             strokeWeight(2);
             fill(255, 215, 0);
             ellipse(collectables[i].x_pos, collectables[i].y_pos - 5, collectables[i].size);
             //Money sign
             fill(0);
             noStroke();
             textSize(25);
             text('$', collectables[i].x_pos - 7, collectables[i].y_pos + 4);

            }
        }
    



	//the game character
	if(isLeft && isFalling)
    {
        //Jumping-left code
        //Body
        fill(255, 0, 0);
        rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
        //Face
        fill(139, 69, 19);
        ellipse(gameChar_x, gameChar_y - 62, 16, 30);
        //Eyebrow
        fill(0);
        rect(gameChar_x - 7, gameChar_y - 67, 4, 2);
        //Eye
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 62, 5, 5);
        fill(0);
        point(gameChar_x, gameChar_y);
        //Mouth
        rect(gameChar_x - 7, gameChar_y - 58, 5, 6);
        //Teeth
        fill(255);
        rect(gameChar_x - 7, gameChar_y - 58, 5, 3);
        //Hand
        fill(139, 69, 19);
        ellipse(gameChar_x + 8, gameChar_y - 67, 6, 6);
        //Arms
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x - 3, gameChar_y - 45);
        vertex(gameChar_x + 2, gameChar_y - 45);
        vertex(gameChar_x + 10, gameChar_y - 65);
        vertex(gameChar_x + 5, gameChar_y - 67);
        endShape();
        //Legs
        fill(0, 0, 128);
        rect(gameChar_x - 5, gameChar_y - 25, 10, 25);
        //Shoes
        fill(0);
        rect(gameChar_x - 5, gameChar_y, 10, 3);

	}
	else if(isRight && isFalling)
	{
		//Jumping-right code
        //Body
        fill(255, 0, 0);
        rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
        //Face
        fill(139, 69, 19);
        ellipse(gameChar_x, gameChar_y - 62, 16, 30);
        //Eyebrow
        fill(0);
        rect(gameChar_x + 3, gameChar_y - 67, 4, 2);
        //Eye
        fill(0);
        ellipse(gameChar_x + 5, gameChar_y - 62, 5, 5);
        //Mouth
        rect(gameChar_x + 2, gameChar_y - 58, 5, 6);
        //Teeth
        fill(255);
        rect(gameChar_x + 2, gameChar_y - 58, 5, 3);
        //Hand
        fill(139, 69, 19);
        ellipse(gameChar_x - 8, gameChar_y - 67, 6, 6);
        //Arms
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x + 3, gameChar_y - 45);
        vertex(gameChar_x - 2, gameChar_y - 45);
        vertex(gameChar_x - 10, gameChar_y - 65);
        vertex(gameChar_x - 5, gameChar_y - 67);
        endShape();
        //Legs
        fill(0, 0, 128);
        rect(gameChar_x - 5, gameChar_y - 25, 10, 25);
        //Shoes
        fill(0);
        rect(gameChar_x - 5, gameChar_y, 10, 3);

        
	}
	else if(isLeft)
	{
		//Walking left code
        //Body
        fill(255, 0, 0);
        rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
        //Left hand
        fill(139, 69, 19);
        ellipse(gameChar_x - 11, gameChar_y - 32.5, 5, 5);
        //Left arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x - 2, gameChar_y - 51);
        vertex(gameChar_x - 12, gameChar_y - 35);
        vertex(gameChar_x - 9, gameChar_y - 32);
        vertex(gameChar_x - 2, gameChar_y - 44);
        endShape();
        //Right hand
        fill(139, 69, 19);
        ellipse(gameChar_x + 11, gameChar_y - 28.5, 5, 5);
        //Right arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x + 2, gameChar_y - 47);
        vertex(gameChar_x + 12, gameChar_y - 31);
        vertex(gameChar_x + 9, gameChar_y - 28);
        vertex(gameChar_x + 2, gameChar_y - 40);
        endShape();
        //Face
        fill(139, 69, 19);
        ellipse(gameChar_x, gameChar_y - 62, 16, 30);
        //Eyebrow
        fill(0);
        rect(gameChar_x - 7, gameChar_y - 67, 4, 2);
        //Eye
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 62, 5, 5);
        //Mouth
        rect(gameChar_x - 7, gameChar_y - 58, 5, 6);
        //Teeth
        fill(255);
        rect(gameChar_x - 7, gameChar_y - 58, 5, 3);
        //Left leg
        fill(0, 0, 128);
        beginShape();
        vertex(gameChar_x - 5, gameChar_y - 25);
        vertex(gameChar_x - 15, gameChar_y - 1);
        vertex(gameChar_x - 12, gameChar_y + 3);
        vertex(gameChar_x + 3, gameChar_y - 25);
        endShape();
        //Right leg
        fill(0, 0, 128);
        beginShape();
        vertex(gameChar_x + 5, gameChar_y - 25);
        vertex(gameChar_x + 15, gameChar_y - 1);
        vertex(gameChar_x + 12, gameChar_y + 3);
        vertex(gameChar_x - 3, gameChar_y - 25);
        endShape();
        //Left shoe
        fill(0);
        beginShape();
        vertex(gameChar_x - 15, gameChar_y - 3);
        vertex(gameChar_x - 20, gameChar_y);
        vertex(gameChar_x - 12, gameChar_y + 3);
        vertex(gameChar_x - 11, gameChar_y);
        endShape();
        //Right shoe
        fill(0);
        beginShape();
        vertex(gameChar_x + 15, gameChar_y - 1);
        vertex(gameChar_x + 16, gameChar_y + 3);
        vertex(gameChar_x + 8, gameChar_y + 3);
        vertex(gameChar_x + 11, gameChar_y);
        endShape();


	}
	else if(isRight)
	{
		//Walking right code
        //Body
        fill(255, 0, 0);
        rect(gameChar_x - 5, gameChar_y - 50, 10, 25);
        //Left hand
        fill(139, 69, 19);
        ellipse(gameChar_x + 11, gameChar_y - 32.5, 5, 5);
        //Left arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x + 2, gameChar_y - 51);
        vertex(gameChar_x + 12, gameChar_y - 35);
        vertex(gameChar_x + 9, gameChar_y - 32);
        vertex(gameChar_x + 2, gameChar_y - 44);
        endShape();
        //Right hand
        fill(139, 69, 19);
        ellipse(gameChar_x - 11, gameChar_y - 28.5, 5, 5);
        //Right arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x - 2, gameChar_y - 47);
        vertex(gameChar_x - 12, gameChar_y - 31);
        vertex(gameChar_x - 9, gameChar_y - 28);
        vertex(gameChar_x - 2, gameChar_y - 40);
        endShape();
        //Face
        fill(139, 69, 19);
        ellipse(gameChar_x, gameChar_y - 62, 16, 30);
        //Eyebrow
        fill(0);
        rect(gameChar_x + 3, gameChar_y - 67, 4, 2);
        //Eye
        fill(0);
        ellipse(gameChar_x + 5, gameChar_y - 62, 5, 5);
        //Mouth
        rect(gameChar_x + 2, gameChar_y - 58, 5, 6);
        //Teeth
        fill(255);
        rect(gameChar_x + 2, gameChar_y - 58, 5, 3);
        //Left leg
        fill(0, 0, 128);
        beginShape();
        vertex(gameChar_x - 5, gameChar_y - 25);
        vertex(gameChar_x - 15, gameChar_y - 1);
        vertex(gameChar_x - 12, gameChar_y + 3);
        vertex(gameChar_x + 3, gameChar_y - 25);
        endShape();
        //Right leg
        fill(0, 0, 128);
        beginShape();
        vertex(gameChar_x + 5, gameChar_y - 25);
        vertex(gameChar_x + 15, gameChar_y - 1);
        vertex(gameChar_x + 12, gameChar_y + 3);
        vertex(gameChar_x - 3, gameChar_y - 25);
        endShape();
        //Left shoe
        fill(0);
        beginShape();
        vertex(gameChar_x + 15, gameChar_y - 3);
        vertex(gameChar_x + 20, gameChar_y);
        vertex(gameChar_x + 12, gameChar_y + 3);
        vertex(gameChar_x + 11, gameChar_y);
        endShape();
        //Right shoe
        fill(0);
        beginShape();
        vertex(gameChar_x - 15, gameChar_y - 1);
        vertex(gameChar_x - 16, gameChar_y + 3);
        vertex(gameChar_x - 8, gameChar_y + 3);
        vertex(gameChar_x - 11, gameChar_y);
        endShape();



	}
	else if(isFalling)
	{
		// add your jumping facing forwards code
        //Body
        fill(255, 0, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);
        //Face
        fill(139, 69, 19);
        ellipse(gameChar_x, gameChar_y - 62, 32, 30);
        //Left eyebrow
        fill(0);
        rect(gameChar_x - 10, gameChar_y - 67, 7, 2);
        //Right eyebrow
        rect(gameChar_x + 3, gameChar_y - 67, 7, 2);
        //Eyes
        fill(0);
        ellipse(gameChar_x - 6, gameChar_y - 62, 5, 5);
        ellipse(gameChar_x + 6, gameChar_y - 62, 5, 5);
        //Mouth
        rect(gameChar_x - 5, gameChar_y - 58, 10, 6);
        //Teeth
        fill(255);
        rect(gameChar_x - 5, gameChar_y - 58, 10, 3);
        //Left leg
        fill(0, 0, 128);
        beginShape();
        vertex(gameChar_x - 10, gameChar_y - 25);
        vertex(gameChar_x - 15, gameChar_y - 8);
        vertex(gameChar_x - 5, gameChar_y - 8);
        vertex(gameChar_x, gameChar_y - 25);
        endShape();
        //Right leg
        beginShape();
        vertex(gameChar_x + 10, gameChar_y - 25);
        vertex(gameChar_x + 15, gameChar_y - 8);
        vertex(gameChar_x + 5, gameChar_y - 8);
        vertex(gameChar_x, gameChar_y - 25);
        endShape();
        //Left shoe
        fill(0);
        rect(gameChar_x - 15, gameChar_y - 8, 10, 5);
        triangle(gameChar_x - 15, gameChar_y - 8, gameChar_x - 17, gameChar_y - 3, gameChar_x - 15, gameChar_y - 3);
        //Right shoe
        rect(gameChar_x + 5, gameChar_y - 8, 10, 5);
        triangle(gameChar_x + 15, gameChar_y - 8, gameChar_x + 17, gameChar_y - 3, gameChar_x + 15, gameChar_y - 3);
        //Left hand
        fill(139, 69, 19);
        ellipse(gameChar_x - 21, gameChar_y - 51.5, 6, 6);
        //Left arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x - 10, gameChar_y - 45);
        vertex(gameChar_x - 20, gameChar_y - 49);
        vertex(gameChar_x - 20, gameChar_y - 54);
        vertex(gameChar_x - 10, gameChar_y - 51);
        endShape();
        //Right hand
        fill(139, 69, 19);
        ellipse(gameChar_x + 21, gameChar_y - 51.5, 6, 6);
        //Right arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x + 10, gameChar_y - 45);
        vertex(gameChar_x + 20, gameChar_y - 49);
        vertex(gameChar_x + 20, gameChar_y - 54);
        vertex(gameChar_x + 10, gameChar_y - 51);
        endShape();


	}
	else
	{
		// add your standing front facing code
        //Body
        fill(255, 0, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25);
        //Face
        fill(139, 69, 19);
        ellipse(gameChar_x, gameChar_y - 62, 32, 30);
        //Left eyebrow
        fill(0);
        rect(gameChar_x - 10, gameChar_y - 67, 7, 2);
        //Right eyebrow
        rect(gameChar_x + 3, gameChar_y - 67, 7, 2);
        //Eyes
        fill(0);
        ellipse(gameChar_x - 6, gameChar_y - 62, 5, 5);
        ellipse(gameChar_x + 6, gameChar_y - 62, 5, 5);
        //Mouth
        rect(gameChar_x - 5, gameChar_y - 58, 10, 6);
        //Teeth
        fill(255);
        rect(gameChar_x - 5, gameChar_y - 58, 10, 3);
        //Legs
        fill(0, 0, 128);
        rect(gameChar_x - 10, gameChar_y - 25, 20, 25);
        //Shoes
        fill(0);
        rect(gameChar_x - 10, gameChar_y - 5, 20, 5);
        //Left hand
        fill(139, 69, 19);
        ellipse(gameChar_x - 17, gameChar_y - 32.5, 6, 6);
        //Left arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x - 10, gameChar_y - 51);
        vertex(gameChar_x - 18, gameChar_y - 35);
        vertex(gameChar_x - 14, gameChar_y - 32);
        vertex(gameChar_x - 10, gameChar_y - 42);
        endShape();
        //Right hand
        fill(139, 69, 19);
        ellipse(gameChar_x + 17, gameChar_y - 32.5, 6, 6);
        //Right arm
        fill(255, 0, 0);
        beginShape();
        vertex(gameChar_x + 10, gameChar_y - 51);
        vertex(gameChar_x + 18, gameChar_y - 35);
        vertex(gameChar_x + 14, gameChar_y - 32);
        vertex(gameChar_x + 10, gameChar_y - 42);
        endShape();
        
        
	}
    
    pop();
    
    //Game over text
    if (gameOver == true)
        {
            fill(255, 0, 0);
            textSize(100);
            text("GAME OVER!", width/5, height/2);
            return;
        }
    
    //Level complete text
    if (levelComplete == true)
        {
            fill(0, 255, 0);
            textSize(100);
            text("LEVEL COMPLETE!", width/16, height/2);
            isLeft = false;
            isRight = false;
        }

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if (isLeft == true)
        {
            gameChar_x -= 2;
        }
    
    else if (isRight == true)
        {
            gameChar_x += 2;
        }
    
    if (gameChar_y < floorPos_y)
        {
            isFalling = true;
            gameChar_y += 1;
        }
    
    else
        {
            isFalling = false;
        }
    
    
    
    // Collectables intercation
    for (var i = 0; i < collectables.length; i++)
    {
        if (dist(gameChar_x, gameChar_y, collectables[i].x_pos, collectables[i].y_pos) < collectables[i].size && !collectables[i].isFound)
        {
                collectables[i].isFound = true;
                gameScore ++;
        }        
    }
    
    // Flagpole intercation
    for (var i = 0; i < flagpole.length; i++)
        {
            if (dist(gameChar_x, gameChar_y, flagpole[i].x_pos, flagpole[i].y_pos) < 50)
            {
            flagpole[i].isReached = true;
            }
        }
    
    // Canyons interaction
    for (var i = 0; i < canyons.length; i++)
        {
            if ((gameChar_x > canyons[i].x) && (gameChar_x < canyons[i].x + canyons[i].width) && (gameChar_y >= floorPos_y) || gameChar_y - 1 >= floorPos_y)
            {
            isPlummeting = true;
            isLeft = false;
            isRight = false;
            }
        }
    
    //Falling down canyons intercation
    if (isPlummeting == true)
        {
            gameChar_y += 5;
            isFalling = true;
        }
    
    //Game over after falling
    if (gameChar_y > height + 100)
        {
            gameOver = true;
        }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    if (key == "a" && levelComplete == false) 
        {
            isLeft = true;
        }
    
    else if (key == "d" && levelComplete == false)
        {
            isRight = true;
        }
    
    else if (key == "w" && isFalling == false && levelComplete == false)
        {
            gameChar_y -= 100;
        }
    
    
    
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    if (key == "a") 
        {
            isLeft = false;
        }
    
    else if (key == "d")
        {
            isRight = false;
        }
     
}
