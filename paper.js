class Paper 
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic : false,
            friction : 0.5,
            restitution : 0.3,
            density : 1.2
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
       // this.radius = 3;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
        
    }
        display()
        {
            var pos =this.body.position;
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,this.width,this.height);
        }
    
}