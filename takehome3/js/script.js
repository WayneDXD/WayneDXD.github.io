

function setup(){

createCanvas(500,500); /*creates canvas*/
background(150);/*adds colour to the canvas via rbg or grey scale for single value.*/
noStroke(); /*takes out stroke on elements drawn for all elements */
}

function draw(){ /* function allows us to draw shapes like ellipse, circle, triangle, rect, etc*/

/*arms*/	
fill('#F2B7E8');	
ellipse(130, 200, 75, 100);  /*ellipse works by location and dimension ie ellipse(x-axis,y-axis,width,height).*/
ellipse(375, 200, 75, 100);
/*legs*/
fill('#E92F80');
ellipse(325, 375, 65,100);
ellipse(200, 385, 65,100);
/*body*/
fill('#F5ABE8');
ellipse(250,250, 275,275);
/*eyes*/
fill(0)
ellipse(280,200, 30,65);
ellipse(220, 200, 30,65);
/*mouth*/
arc(250, 275, 50, 50, 0, PI + QUARTER_PI, CHORD); /* PI is used as a way call to a degree or roatation in this case a degree, 0 is where the PI will stop and PI is whe the ratation will start where the middle is the origin of the angle like a clock.*/
/*pupil*/

fill(300);
ellipse(280,190,12,18);
ellipse(220, 190,12,18);


}