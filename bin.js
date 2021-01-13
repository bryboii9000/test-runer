class Bin {
    constructor(x, y,width,hieght) {

      var options = {
        isStatic : true
      }
       
      this.x = x
      this.y = y
      this.width = width
      this.hieght = hieght 
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.hieght,options);
     
     // this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    };
    display(){
      
      var pos =this.body.position;
     // rectMode(CENTER);
      //fill(101,67,33);
      rect(pos.x, pos.y, this.width, this.height);
      
      //image(this.image ,0, 0, this.width, this.height);
      
    };
  };
 