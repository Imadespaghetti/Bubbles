let xpos = 300;
let ypos = 600;
let Balls = [];

function ball() {
  this.x = xpos;
  this.y = ypos;
  this.size = random(5, 10);
  //this.speed = +1;
  this.colour = [random(255),random(255),random(255)];

  this.showMove = function() {
    this.y += random(-4, 2);
    this.x += random(1, -1);
    fill(this.colour);
   stroke(this.colour);
    circle(this.x, this.y, this.size);
    if (this.y <= 0) this.y = 600;
  };
}
let ball1
let ball2


function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 1000; i=i+1) {
    Balls[i] = new ball();
  }
   ball1= new ball();
  ball2= new ball();
}

function draw() {
  background(0,128,128,1);
   ball1.showMove()
ball2.showMove()
  for (let i = 0; i < 1000; i=i+1) {
    Balls[i].showMove();
  }
}
