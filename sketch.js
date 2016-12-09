var o = 0;
var v = 12;
var b0 = 0;
var B = 0;
var N = 1200;
var red = 0;
var yello = 0;
var blue = 0;

function setup() {
  
createCanvas (windowWidth,windowHeight);



pos = createVector(60,400);
v = createVector(2,6);
B = new Array(N);

 
 
 for (n = 0; n<N ; n++ ){
     B[n] = new ball(width/2,height-1);
}
  

  
}
function draw() {
 //background(0,0,0,50);
 
 
 for (n = 0;n < N ; n++){
   B[n].evolv_draw();
 }
 
}
var ball = function(x,y){
  
  this.pos = createVector(x,y);
   this.v = p5.Vector.random2D();
    this.v.mult(random(1,1));
    this.red = random(255);
    this.blue= random(255);
    this.yello=random(255);
    
    
this.evolv_draw = function(){
    
    this.pos.add(this.v);
    
    if (this.pos.x >= width || this.pos.x < 0){
      this.v.x= this.v.x*-1;
    }
    
    if (this.pos.y >= height || this.pos.y < 0){
      this.v.y= this.v.y*-1;
    }
    
   fill(this.red,this.yello,this.blue,this.thing);
    ellipse (this.pos.x , this.pos.y ,5 ,5 );
  };

  
  
  

};


function mousePressed(){
  translate(random(width),random(height));
    for (n = 0; n<N ; n++ ){
     B[n] = new ball(mouseX,mouseY);
   }
 
  
  
  
}
