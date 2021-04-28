class Stand{
    constructor(x,y,w,h,img){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true,})
        this.sprite = createSprite(x,y,w,h)
        this.img = img
        this.w = w
        this.h = h
        this.sprite.visible = false
        world.add(wld,this.body)
    }
    display(){
      var pos = this.body.position
      push()
      imageMode(CENTER)
      image(this.img,pos.x,pos.y,this.w,this.h)
      pop()
    }
    jump(){
      var x1 = this.sprite.x-this.w/2
      var x2 = this.sprite.x+this.w/2
      var y1 = (this.sprite.y-this.h/2)-28
      if((ball.x>x1 && ball.x<x2 && ball.y>y1 && ball.y<y1+2) || ball.y>381.5 && ball.y<383){
        n=1
      }    
   }
}