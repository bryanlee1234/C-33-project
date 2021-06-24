const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var mysnowlist=[]

function preload(){
  backgroundimg=loadImage("snow3.jpg")
}

function setup() {
engine=Engine.create()
world=engine.world
createCanvas(800,400)

}

function draw() {
  Engine.update(engine)
background(backgroundimg)
if(frameCount%5==0){
  mysnow=new Snow(random(0,700),30,30)
  mysnow.display()
}
drawSprites()
}