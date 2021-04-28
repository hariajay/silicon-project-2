const Engine = Matter.Engine
const world = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var gameState = 1
var bg1,bg2,bg3
var eng,wld
var red,b1,volley,b2,foot,b3
var carbon,arrow,light,acid,rand
var star,rec,start,button,green,award
var collide,water,sharp,weapon,lava
var j,k1,h1,h2,h3,firegroup
var s1=[],s2=[],s3=[],s4=[],s5=[],gs=[],fs=[],cs=[],ws=[],ss=[]
var collect
var dis=0,coinum=0,mins=0,gems=0,e1=10650,e2=10900,t1=1,t2=1,s=1,l=1,p=1,j=1,n=1

function preload(){
  bg1 = loadImage("brown.jpg")
  bg2 = loadImage("hills.png")
  bg3 = loadImage("mount.png")
  b1 = loadImage("red.png")
  b2 = loadImage("volley.png")
  b3 = loadImage("football.png")
  power = loadImage("power.png")
  award = loadImage("award.png")
  over = loadImage("gameover.png")
  arrow = loadImage("arrow.png")
  st1 = loadImage("stand1.png")
  st2 = loadImage("stand2.png")
  st3 = loadImage("stand3.png")
  st4 = loadImage("stand4.png")
  lava = loadImage("lava.png")
  wimg = loadImage("weapon.png")
  water = loadImage("water.png")
  acid = loadImage("acid.jpg")
  light = loadImage("light.png")
  lr1 = loadAnimation("lr1.png")
  lr2 = loadAnimation("lr2.png")
  carbon = loadImage("diamond.png")
  timer = loadImage("clock.png")
  sh1 = loadImage("blade.png")
  restart = loadImage("restart.png")
  ins = loadImage("ins.png")
  intro = loadImage("intro.png")
  story = loadImage("story.png")
  tools = loadImage("tools.png")
  stick = loadImage("stick1.png")
  stk2 = loadImage("stk2.png")
  star = loadImage("c1.png")
  rec = loadImage("rect.png")
}
function setup(){
    createCanvas(510,460)
    form = new Form()
    eng = Engine.create()
    wld = eng.world
    red = Bodies.circle(10000,350,27,{density:1,friction:0,restitution:0.3,frictionAir:0.07})
    world.add(wld,red)
    ball = createSprite(red.position.x,red.position.y,56,56)
    ball.visible = false
    collide = Bodies.rectangle(-30,170,10,460,{isStatic:true})
    world.add(wld,collide)
    ground = Bodies.rectangle(11650,415,8000,12,{isStatic:true})
    world.add(wld,ground)
    weapon = Bodies.circle(3770,0,30)
    world.add(wld,weapon)
    
    coins(155,305,380)
    coins(725,875,250)
    coins(825,975,380)
    coins(1875,2025,250)
    coins(1775,1925,380)
    coins(1715,1865,150)
    coins(3125,3275,250)
    coins(3225,3375,380)
    coins(3825,3975,270)
    coins(4575,4725,150)
    coins(4775,4925,250)
    coins(4825,4775,380)
    coins(5700,5850,380)
    coins(6450,6600,380)
    coins(6800,7100,380)
    coins(7680,7830,250)
    coins(8000,8150,380)
    coins(8950,9100,250)
    coins(8940,9090,150)
    dia(1500,200)
    dia(3000,350)
    dia(4350,250)
    dia(6150,300)
    dia(7500,350)

    for(var i=300; i<560; i+=27){
      s1.push(new Sharp(i,445,sh1))
    }
    for(var i=1115; i<1600; i+=27){
      s2.push(new Sharp(i,445,sh1))
    }
    for(var i=2235; i<2900; i+=27){
      s3.push(new Sharp(i,445,sh1))
    }
    for(var i=5160; i<5660; i+=27){
      s4.push(new Sharp(i,445,sh1))
    }
    for(var i=8315; i<8765; i+=27){
      s5.push(new Sharp(i,445,sh1))
    }
    firegroup = new Group()
    g1 = new Ground(110,350)
    g2 = new Ground(832,530)
    g3 = new Ground(1912,625)
    g4 = new Ground(4070,2365)
    g5 = new Ground(5788,270)
    g6 = new Ground(6700,2100)
  
    std1 = new Stand(800,310,260,44,st1)
    std2 = new Stand(1350,310,20,44,st3)
    std3 = new Stand(1900,310,260,44,st1)
    std4 = new Stand(1800,200,260,44,st1)
    std5 = new Stand(3200,310,260,44,st1)
    std6 = new Stand(4650,200,260,44,st1)
    std7 = new Stand(4850,310,260,44,st1)
    std8 = new Stand(5400,310,20,44,st3)
    std9 = new Stand(2375,310,180,10,stick)
    std10 = new Stand(2560,260,180,10,stick)
    std11 = new Stand(2740,210,180,10,stick)
    std12 = new Stand(7750,310,260,44,st2)
    std13 = new Stand(8525,315,20,44,st4)
    std14 = new Stand(9000,200,260,44,st2)
    std15 = new Stand(9035,310,260,44,st2)
    gate1 = new Gate(10100,275,280)
    gate2 = new Gate(10180,275,280)
    gate3 = new Gate(11050,255,320)
    ss.push(std1,std2,std3,std4,std5,std6,std7,std8,std9,std10,std11,std12,std13,std14,std15)
    
    light1 = createSprite(3600,200,30,420)
    light2 = createSprite(10480,200,30,420)
    k1 = createSprite(6650,505,20,200)
    k2 = createSprite(6700,505,20,200)
    k3 = createSprite(6750,505,20,200)
    h1 = createSprite(2465,300,150,10)
    h2 = createSprite(2620,250,150,10)
    h3 = createSprite(2775,200,150,10)
    h1.visible = false
    h2.visible = false
    h3.visible = false
    light2.visible = false
    light1.visible = false
    k1.shapeColor = "brown"
    k2.shapeColor = "brown"
    k3.shapeColor = "brown"
    wall = new Wall(300)
    bl1 = new Sharp(k1.x,45,sh1)
    bl2 = new Sharp(k2.x,45,sh1)
    bl3 = new Sharp(k3.x,45,sh1)
    chain1 = new Chain(weapon,{x:4100,y:15})
   
    r1 = createSprite(9800,365,50,50)
    r1.addAnimation("lt1",lr2)
    r1.addAnimation("lt2",lr1)
    r1.scale = 0.2
    r2 = createSprite(10000,365,50,50)
    r2.addAnimation("lt3",lr2)
    r2.addAnimation("lt4",lr1)
    r2.scale = 0.2
    he1 = createSprite(10700,400,40,10)
    he2 = createSprite(10950,400,40,10)
    la1 = createSprite(11430,400,280,10)
    la2 = createSprite(6075,400,280,10)
    la1.visible = false
    la2.visible = false
    he1.visible = false
    he2.visible = false
    re = createSprite(20,-295,128,35)
    re.visible = false
    obs = createSprite(12210,438,500,62)
    obs.visible = false
  }
function draw(){
  background(0)

   form.display()
   if(gameState == 2){
   Engine.update(eng)
   imageMode(CENTER)
   image(bg2,3750,180,7800,610)
   image(bg3,11650,217,8000,550)
   image(rec,camera.position.x-177,30,140,45)
   image(rec,camera.position.x+185,30,115,40)
   image(carbon,camera.position.x-157,30,28,24)
   image(arrow,camera.position.x+153,30,30,10)
   image(water,425,440,275,67)
   image(water,1350,440,500,67)
   image(water,2567,440,690,67)
   image(water,5400,437,500,67)
   image(lava,la2.x,438,280,60)
   image(power,200,300,50,50)
   if(l == 1){
   image(light,3600,200,50,420)
   image(light,10480,200,50,420)
   }
   image(star,camera.position.x-223,30,28,28)
   image(wimg,weapon.position.x,weapon.position.y,70,70)
   image(water,8525,438,440,72)
   image(lava,9500,438,355,62)
   image(lava,la1.x,438,275,62)
   textSize(24)
   if(frameCount % 15 == 0){
     rand = Math.round(random(1,3))
   }
   if(rand == 1){
     image(water,12210,438,450,62)
     text("water",12210,438)
   }
   if(rand == 2){
    image(lava,12210,438,450,62)
    text("lava",12210,438)
   }
   if(rand == 3){
    image(acid,12210,438,450,62)
    text("acid",12210,438)
   }
   ball.x = red.position.x
   ball.y = red.position.y
   re.x = camera.position.x-10
   if(la1.x<11450){
    la1.velocityX+=1.5
   }
   if(la1.x>11530){
    la1.velocityX-=1.5
   }
   if(la2.x<6095){
    la2.velocityX+=1.5
   }
   if(la2.x>6175){
    la2.velocityX-=1.5
   }
   textSize(22)
   fill(0)
   text(gems,camera.position.x-138,38)
   text(coinum,camera.position.x-203,38)
   text(dis+" m",camera.position.x+172,38)
   camera.position.x = red.position.x+130
   camera.position.y = 230
   
   dis=Math.round(red.position.x/50)
   bl1.sprite.position.y=k1.y-120
   bl2.sprite.position.y=k2.y-120
   bl3.sprite.position.y=k3.y-120
   h1.y = std9.body.position.y
   h2.y = std10.body.position.y
   h3.y = std11.body.position.y

   if(k1.y<435){
     k1.velocityY+=4
     k2.velocityY+=4
     k3.velocityY+=4
   }
   if(k1.y>500){
     k1.velocityY=-4
     k2.velocityY=-4
     k3.velocityY=-4
   }
  if(s==1){
   fill(50)
   strokeWeight(0)
   ellipse(he1.x,410,100,20)
   ellipse(he2.x,410,100,20)
   }
   image(b1,red.position.x,red.position.y,55,55)
   fill(0)
   strokeWeight(3)
   line(10100,0,10100,260)
   line(10180,0,10180,260)
   line(11050,0,11050,260)
   
   chain1.display()
   for(var i=0; i<ss.length; i++){
     ss[i].display()
     ss[i].jump()
   }
   gate1.display()
   gate2.display()
   gate3.display()

  if(keyDown("space") && n==1){
    Matter.Body.applyForce(red,red.position,{x:0,y:-23})
    j+=1
  }
   if(keyDown("left")){
    Matter.Body.applyForce(red,red.position,{x:-3.5,y:0})
  }
   if(keyDown("right")){
    Matter.Body.applyForce(red,red.position,{x:3.5,y:0})
  }
  if(j>6){
    n=2
    j=1
  }
  if(ball.isTouching(h1)){
    Matter.Body.setStatic(std9.body,false)
  }
  if(ball.isTouching(h2)){
    Matter.Body.setStatic(std10.body,false)
  }
  if(ball.isTouching(h3)){
    Matter.Body.setStatic(std11.body,false)
  }
  for(var i=0; i<cs.length; i++){
    cs[i].touching1()
  }
  for(var i=0; i<gs.length; i++){
    gs[i].touching2()
  }
  if(ball.isTouching(r2)){
    r2.changeAnimation("lt4",lr1)
    p=2
  }
  if(ball.isTouching(r1) && p==2){
    p=3
  }
  if(p==3){
   r1.changeAnimation("lt2",lr1)
   Matter.Body.setStatic(gate1.body,false)
   Matter.Body.setStatic(gate2.body,false)
   gate1.body.position.y-=0.6
   gate2.body.position.y-=0.6
  }
  if(gate1.body.position.y<140){
    p=1
    Matter.Body.setStatic(gate1.body,true)
    Matter.Body.setStatic(gate2.body,true)
  }
  if(he1.x < 10710){
    he1.velocityX+= 3.5
    he2.velocityX-= 3.5
   }
   if(he1.x > 10940){
     he1.velocityX-= 3.5
     he2.velocityX+= 3.5
   }
   if(t1 > 6){
    t2 = 2
  }
   if(ball.x>10510){
     t1+=0.1
   }
   if(t2 == 1){
     fill(150)
     textSize(20)
     text("hell",he1.x-13,415)
     text("open",he2.x-13,415)
   }
  if(ball.isTouching(he2) && s==1){
    s=2
  }
  if(s==2){
    Matter.Body.setStatic(gate3.body,false)
    gate3.body.position.y-=0.6
  }
  if(gate3.body.position.y<140){
    s=3
    Matter.Body.setStatic(gate3.body,true)
  }
  flame()
  drawSprites()
 }
}
function dia(x,y){
  gs.push(new Gem(x,y))
}
function coins(x1,x2,y){
  for(var a=x1; a<x2; a+=50){
    cs.push(new Coin(a,y))
   }
}
function flame(){
 if(frameCount % 100 == 0){
   fs.push(new Fires(camera.position.x+400,random(175,390)))
 }
}
function end(){
  Matter.Body.setStatic(red,true)
  firegroup.setVelocityXEach(0)
  re.y = 295
  image(bg1,camera.position.x-5,200,320,250)
  image(restart,camera.position.x-10,295,130,110)
  image(award,camera.position.x-5,165,40,40)
  image(over,camera.position.x-5,125,350,250)
  textSize(22)
  strokeWeight(0.2)
  fill(0)
  text("Coins: "+coinum,camera.position.x-105,220)
  text("Gems: " +gems,camera.position.x+20,220)
  text("Distance: " +dis+" m",camera.position.x-65,255)
}