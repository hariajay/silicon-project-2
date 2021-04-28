class Ground{
    constructor(x,w){
        this.body = Bodies.rectangle(x,415,w,12,{isStatic:true,friction:0})
        world.add(wld,this.body)
        this.w = w
    }
    display(){
        push()
        fill(100)
        rectMode(CENTER)
        rect(this.body.position.x,415,this.w,12)
        pop()
    }
}