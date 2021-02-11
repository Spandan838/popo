class Sling {
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 60,
            stiffness : 0.01
        }
        this.sling = Constraint.create(options);
        this.pointB = point2;
        World.add(world,this.sling);
    }
    display(){
    if(this.sling.bodyA){ //if(bird.body) if(not null)
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
    fly(){
        this.sling.bodyA = null;
    }
}