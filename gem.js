class Gem{
  constructor(x,y){
    this.gem = createSprite(x,y,50,55)
    this.img = loadImage("diamond.png")
    this.gemgroup = new Group()
    this.gem.addImage("gm",this.img)
    this.gem.scale = 0.01
  }
  touching2(){
    this.gemgroup.add(this.gem)
     if(ball.isTouching(this.gemgroup)){
        gems+=1
        this.gemgroup[0].destroy()
     }
   }
}