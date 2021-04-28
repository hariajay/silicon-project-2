class Gate{
  constructor(x,y,h){
    this.body = Bodies.rectangle(x,y,h,{isStatic:true})
    this.h = h
    world.add(wld,this.body)
  }
  display(){
     var pos = this.body.position
     push()
     image(stk2,pos.x,pos.y,40,this.h)
     pop()
  }
}