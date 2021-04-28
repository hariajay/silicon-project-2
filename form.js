 class Form{
   constructor(){ 
    this.name = createInput("Name") 
    this.greet = createElement("h1")
    this.cont = createButton("CONTINUE")
    this.story = createButton("STORY")
    this.ins = createButton("INSTRUCTIONS")
    this.tools = createButton("BALLS & TOOLS")
    this.save = createButton("Save")
    this.pre1 = createButton("Back")
    this.pre3 = createButton("Back")
    this.play = createButton("PLAY")
  }
  hide(){
    this.name.hide()
    this.cont.hide() 
    this.story.hide()
    this.ins.hide()
    this.tools.hide()
    this.greet.hide()
    this.save.hide()
  }
  show(){
    this.cont.show() 
    this.story.show()
    this.ins.show()
    this.tools.show()
    this.greet.show()
  }
  display(){
    var b=[1,2,3,4]
    imageMode(CENTER)

     if(gameState == 0){
      image(intro,265,230,530,460)
      this.pre1.hide()
      this.pre3.hide()
      this.play.hide()

      this.name.position(180,213)
      this.name.style('width','100px')
      this.name.style('height','30px')
      this.name.style('background','red')

      this.save.position(300,213)
      this.save.style('width','50px')
      this.save.style('height','35px')
      this.save.style('background','red')

      this.cont.position(205,263)
      this.cont.style('width','120px')
      this.cont.style('height','35px')
      this.cont.style('background','red')

      this.story.position(220,313)
      this.story.style('width','90px')
      this.story.style('height','35px')
      this.story.style('background','red')

      this.ins.position(192,363)
      this.ins.style('width','150px')
      this.ins.style('height','35px')
      this.ins.style('background','red')

      this.tools.position(192,413)
      this.tools.style('width','150px')
      this.tools.style('height','35px')
      this.tools.style('background','red')
    }
      this.save.mousePressed(()=>{
        var player = this.name.value()
        this.name.hide()
        this.save.hide()
        this.greet.html("Hello "+player)
        this.greet.position(190,185)
        this.greet.style('color','darkgreen')
      })
      this.cont.mousePressed(()=>{
        this.hide()
        gameState = b[1]
      })
       if(gameState == b[1]){
        image(bg1,265,230,530,460)
        this.play.show()
        image(timer,220,370,40,40)
        image(star,35,25,25,25)
        image(carbon,35,60,25,20)
        textSize(26)
        fill(0)
        textSize(24)
        text(coinum,55,35)
        text(gems,55,65)
        this.play.position(220,400)
        this.play.style('width','110px')
        this.play.style('height','45px')
        this.play.style('background','rgb(10,110,230)')
        this.play.style('font-size','35px')
       }
       if(p==1 && gameState==b[1]){
        this.pre3.show()
        this.pre2.hide()
          this.pre3.position(85,405)
          this.pre3.style('width','70px')
          this.pre3.style('height','40px')
          this.pre3.style('font-size','20px')
          this.pre3.style('background','red')
          fill(0)
          strokeWeight(2)
          textSize(32)
          text("LEVEL 1",200,68)
          text(mins+" mins",250,378)
          fill("blue")
          text("Blue Mounts",175,107)
          image(l1,265,230,280,220)
       }
      this.story.mousePressed(()=>{
        this.hide()
        gameState = b[2]
      })
      if(gameState == b[2]){
        image(story,265,230,530,460)
      }
      this.ins.mousePressed(()=>{
        this.hide()
        gameState = b[3]
      })
      if(gameState == b[3]){
        image(ins,265,230,530,460)
      }
      if(gameState==b[2] || gameState==b[3]){
        this.pre1.show()
        this.pre1.position(407,428)
        this.pre1.style('width','55px')
        this.pre1.style('height','25px')
        this.pre1.style('background','red')
        this.pre1.style('font-size','15px')
       }
      this.tools.mousePressed(()=>{
        this.hide()
        gameState = b[4]
      })
      if(gameState == b[4]){
        image(bg1,265,230,530,460)
        image(b2,100,100,50,50)
        this.pre1.show()
        this.c1.show()
        this.pre1.position(5,10)
        this.pre1.style('background','red')
      }
      this.pre1.mousePressed(()=>{
         gameState=0
         this.show()
      })
      this.pre2.mousePressed(()=>{
        p=1
      })
      this.pre3.mousePressed(()=>{
        gameState=0
        this.show()
      })
      this.play.mousePressed(()=>{
        gameState=2
      })
    }
  }
  