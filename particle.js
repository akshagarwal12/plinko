class Particle{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.4
        }
        this.body= Matter.Bodies.circle(x,y,15,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,15,15)
    }
}