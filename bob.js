
  class Ball {
    constructor(x, y,radius) {
        var options = {
            'friction': 1.0,
            'restitution':0.1,
            'density':0.5
      };
                 
 this.x=x
 this.y=y
 this.r=radius
 this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
 World.add(world, this.body);
};
 display(){
 var pos = this.body.position;
                 
 var angle = this.body.angle;
            
 push();
 translate(pos.x, pos.y);
 rotate(angle);
ellipseMode(RADIUS)  
 fill("white");
 //circle(0,0,this.r)
ellipse(0,0,this.r,this.r) 
 pop();
    }
  };
  