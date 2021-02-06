class Bob {
    constructor(x, y) {
      var options = {
          'isStatic':true,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke("black")
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };