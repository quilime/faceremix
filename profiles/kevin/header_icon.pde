PImage robot;
int eye_radius = 63;
int eye_x = 56;
int eye_x2 = 128;
int eye_y = 85;
int i = 0;


void setup(){
size(186, 210);
robot = loadImage("robot.png");
}


void draw(){
  //frameRate(10);
  background(127*sin(i++/50)+127, 127*sin(i++/100)+127, 125*sin(i++/75)+127);
  image(robot, -10, 8, 205, 205);
  fill(127*sin(i++/30)+127, 127*sin(i++/100)+127, 127*sin(i++/70)+127);
  ellipse(eye_x, eye_y, eye_radius, eye_radius);
  ellipse(eye_x2, eye_y, eye_radius, eye_radius);
}
