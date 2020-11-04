class Polygon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.polygon_img = loadImage("polygon.png");
      polygon = Bodies.circle(50,200,20);
      World.add(world,polygon);
    }

    display(){
        imageMode(CENTER);
        image(this.image ,polygon.position.x, polygon.position.y, 40,40);
     

        }
        
    
}