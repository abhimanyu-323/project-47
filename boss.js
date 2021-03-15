class Boss {
    constructor (x,y,width,height){
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    
}