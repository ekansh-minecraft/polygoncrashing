class Block
{

    constructor(x,y,width,height,mycolor){
     
        var options = {

            isStatic:false,
            restitution:0,
            friction:1

        }

        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)

        
        
        this.sprite = createSprite(this.x,this.y,this.w,this.h)

        this.sprite.shapeColor = mycolor
        
     

    }

    display()
    {
        this.sprite.x = this.body.position.x
        this.sprite.y = this.body.position.y
    }
}


