var response;
var responseJSON;
var canvas;
var database;
var form;



function setup() {
  canvas = createCanvas(800,400);
  response = fetch("http://worldtimeapi.org/api/ip");
  //responseJSON = response.json();

  database = firebase.database();

  form = new Form();

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  form.display();
}