Class Launcher(
    constructor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
         stiffness:0.004,
         length:1
        }
        this.bodyA=body
        this.pointB=anchor
        this.launcher=Constraint.create(options)
        world.add(world,this.launcher)
    }
    attach(body){
        this.launcher.bodyA=body
    }
    fly(){
        this.launcher.bodyA=null
    }
    display(){
        var launcherPos=this.bodyA.position;	
		push()
		translate(launcher.x, launcher.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }
)
