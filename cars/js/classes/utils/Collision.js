class Collision {

    static checkCollide(obj1, obj2){
        const distX = Math.abs(obj1.x - obj2.x);
        const distY = Math.abs(obj1.y - obj2.y);

        return distX < Math.max(obj1.width, obj2.width)/2 && distY < Math.max(obj1.height, obj2.height)/2;
    }
}