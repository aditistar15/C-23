class box {
    constructor(myx,myy,myWidth,myHeight){
        var box_options = {
            restitution : 0.8
        }

        this.body = Bodies.rectangle(myx,myy,myWidth,myHeight,box_options);
        this.width = myWidth;
        this.height = myHeight;
        World.add(world,this.body);

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0,  this.width,this.height);
        pop();
    }

}

