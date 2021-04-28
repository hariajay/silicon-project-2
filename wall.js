class Wall{
  constructor(x,y){
     this.body = Bodies.rectangle(x,y,60,70)
     world.add(wld,this.body)
  }
  display(){
     var angle = this.body.angle
     push()
     rectMode(CENTER)
     rotate(angle)
     fill("brown")
     rect(this.body.position.x,this.body.position.y,40,70)
     pop()
  }
}