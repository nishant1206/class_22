const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, ground, world, ball;

function setup() {
    createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, 40, options);
    ball = Bodies.circle(windowWidth / 2, windowHeight / 4, 40, { restitution: 1 });

    World.add(world, ground);
    World.add(world, ball);
}

function draw() {
    background(0, 0, 0);
    Engine.update(engine);

    rectMode(CENTER);
    fill("green");
    rect(ground.position.x, ground.position.y, windowWidth, 40);

    ellipseMode(CENTER);
    fill("lightblue");
    ellipse(ball.position.x, ball.position.y, 80, 80);

}