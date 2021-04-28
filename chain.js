class Chain{
    constructor(bodyA,pointB){
      var option = {
          bodyA:bodyA,
          pointB:pointB
      }
      this.chain = Constraint.create(option)
      world.add(wld,this.chain)
      this.pointB = pointB
    }
    display(){
      stroke(0)
      strokeWeight(5)
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}