class Engine{
  #img;
  static #counter = 0;
  constructor(img){
    if(new.target.name=="Engine")
      throw new Error("Cannot instantiate Engine class directly")
    let car = document.createElement("img");
    car.src = img;
    car.style.width = "339px";
    car.style.height = "97px";
    car.style.position = "absolute";
    this.#img = car;
    Engine.#counter++;
  }
  get img(){ return this.#img }

  static get counter(){ return Engine.#counter }
}

class Car extends Engine {
  constructor(position, imageSrc){
    super(imageSrc);

    this.img.style.top = position.y + "px";
    this.img.style.left = position.x + "px";
    document.body.append(this.img);
  }
  moveLeft(value){
    let positionX = parseInt(this.img.style.left);
    if(positionX - value >= 0){
      positionX -= value;
    }else{
      positionX = 0;
    }
    this.img.style.left = positionX + "px";
  }
  moveRight(value){
    let positionX = parseInt(this.img.style.left);
    let imageWidth = parseInt(this.img.width);
    if(positionX + value <= window.innerWidth-imageWidth){
      positionX += value;
    }else{
      positionX = window.innerWidth-imageWidth;
    }
    this.img.style.left = positionX + "px";

  }
  ChangeStyle(styleObject){
    for(let prop in styleObject){
      this.img.style[prop] = styleObject[prop];
    }
  }
  moveCar(direction){
    if(direction == "left"){
      let id = setInterval(() => {
        let positionX = parseInt(this.img.style.left);
        this.moveLeft(20);
        if(positionX == 0){
          clearInterval(id);
        }
      }, 30);
    }else{
      let id = setInterval(() => {
        this.moveRight(20);
        let positionX = parseInt(this.img.style.left);
        let imageWidth = parseInt(this.img.width);
        if(positionX == window.innerWidth-imageWidth){
          clearInterval(id);
        }
      }, 30);
    }
  }
  toString(){
    let positionX = parseInt(this.img.style.left);
    let positionY = parseInt(this.img.style.left);
    return `(${positionX}, ${positionY}) Src:${this.img.src}`;
  }
}

let carNumber1 = new Car({x: 80, y: 0}, 'car.png');
carNumber1.moveLeft(20);
carNumber1.moveRight(80);
carNumber1.moveRight(80);
carNumber1.moveLeft(1000);
carNumber1.ChangeStyle({
  left: "20px",
  top: "50px",
  // backgroundColor: "red",
});
carNumber1.moveRight(1800);
carNumber1.moveCar("left");

let carNumber2 = new Car({x: 80, y: 200}, 'car.png');
carNumber2.ChangeStyle({
  left: "20px",
  // backgroundColor: "red",
});
carNumber2.moveRight(400);
carNumber2.moveCar("right");

console.log(Engine.counter)