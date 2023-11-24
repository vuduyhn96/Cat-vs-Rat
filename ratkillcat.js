
class Rat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.is_alive = true;
    }
    makeSound() {
        return "chít, chít";
    }
}
class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.speed = 100;
        this.maxSpeed = maxSpeed;
    }
    makeSound() {
        return "meo meo";
    }
    catchRat(rat) {
        if (this.speed > rat.speed) {
            console.log("meo "+ this.name + " da bat dc chuot " + rat.name);
        } else {
            console.log(`${rat.name}: TUỔI`)
        }
    }
    eatRat(rat) {
        if (rat.is_alive) {
            console.log(`${this.name} is eating ${rat.name}. Yummy!`);
            this.weight += rat.weight;
            rat.is_alive = false;
        } else {
            console.log(`${rat.name} đã chết rồi. ${this.name} sẽ không ăn nó`);
        }
    }
}
let rat1 = new Rat("Rat1", 1, 5);
let rat2 = new Rat("Rat2", 1.5, 3);
let cat1 = new Cat("Cat1", 5, 100);
