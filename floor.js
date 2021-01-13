class Floor{
    constructor(width,height){

       var options = {
           isStatic : true
       }
        this.width = width
        this.height = height
       

        this.body = Bodies.rectangle(this.width,this.height,options);
    }
    display(){
         var pos =this.body.position;
      rectMode(CENTER);
     // fill(101,67,33);
      rect(pos.x, pos.y, this.width, this.height);
    }
}