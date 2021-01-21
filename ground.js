class Ground {

constructor (x,y,Width,Height){
var options =  {
isStatic : true
}
this.body=Bodies.rectangle(x,y,Width,Height,options)

this.w=Width
this.h=Height

World.add(world,this.body)
}
display(){
  rectMode(CENTER)
  fill("orange")
  rect(this.body.position.x,this.body.position.y,this.w,this.h)
  
}

}