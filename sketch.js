const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, divison1, divison2, divison3, divison4, divison5, divison6, divison7;
var particles = [];
var divisons = [];
var plinkos = [];
var divisonHeight = 300;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(430,800);


    ground = new Ground(1210,790,2400,20);

    divison1 = new Division(20, 630, 20, 300);
    divison2 = new Division(120, 630, 20, 300);
    divison3 = new Division(220, 630, 20, 300);
    divison4 = new Division(320, 630, 20, 300);
    divison5 = new Division(420, 630, 20, 300);
    divison6 = new Division(20, 630, 20, 300);
    divison7 = new Division(20, 630, 20, 300);
}

function draw(){
    background("white");

    ground.display();

    divison1.display();
    divison2.display();
    divison3.display();
    divison4.display();
    divison5.display();
    divison6.display();
    divison7.display();
}

for (var k = 0; k <= 430; k = k + 80) {
    divisons.push(new Division(k, height-300/2, 10, 300));
}

for (var j = 40; j <= 430; j = j + 50){
    plinkos.push(new plinkos(j,75));
}

for (var j = 15; j <= 420; j = j + 50){
    plinkos.push(new plinkos(j,175));
}