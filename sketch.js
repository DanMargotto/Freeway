function setup() 
{
  createCanvas(800, 500);
  soundMusicTrack.loop();
}

function draw() 
{  
  background(imageRoad);
  showActor();
  moveActor();
  showCar();
  moveCar();
  backPositionInitialCar();
  verifiedColision();
  includePoints();
  scorePoint();
}

