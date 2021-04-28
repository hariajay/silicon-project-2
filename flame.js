class Fires{
  constructor(x,y){
    this.fire = createSprite(x,y,80,50)
    this.img = loadImage("fire.png")
    this.fire.addImage("fire",this.img)
    this.fire.scale = 0.1
    this.fire.velocityX = -5
    this.fire.lifetime = 200
    firegroup.add(this.fire)
  }
}