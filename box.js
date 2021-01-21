class Box {
    constructor (x,y,Width,Height){
    var options = {
    restitution: 0.8,
    density : 0.05,
    friction : 1,
    }
    this.body=Bodies.rectangle(x,y,Width,Height,options)
    this.w=Width
    this.h=Height
    World.add(world,this.body)
}
display(){
push();
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rectMode(CENTER)
fill("#d62828")
rect(0,0,this.w,this.h)
pop();
}
}