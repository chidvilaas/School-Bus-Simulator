var bus,busimage




function preload(){
busImage = loadImage("bus1.jpg")

}

function setup(){
createCanvas(1000,400)
//background image
 bus = createSprite(50,300,100,50)
bus.addImage(busImage)
bus.scale = 0.25
}

function draw() {
  background("black")
 drawSprites()
        
}
