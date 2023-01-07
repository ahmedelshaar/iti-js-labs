class Bird{
  #brid;
  static #score = 0;
  static #kill = 0;

  constructor(bridObj){
    let brid = document.createElement('img');
    brid.src = bridObj.src;
    brid.width = bridObj.width;
    brid.height = bridObj.height;
    brid.style.position = "absolute";
    brid.style.top = `${randomTop(brid.height)}px`;
    brid.style.left = `-${bridObj.width}px`;
    brid.classList.add('bird');
    brid.onclick = () => {
      brid.remove();
      score.innerText = Bird.#score += bridObj.score;
      kill.innerText = ++Bird.#kill;
      bestScore(Bird.#score);
    }
    this.#brid = brid;
    this.#flyMove();
    document.body.append(brid);
  }

  static get score(){ return Bird.#score }
  static resetScore(){ Bird.#score = 0 }
  static resetKill(){ Bird.#kill = 0 }

  #fly(value){
    let positionX = parseInt(this.#brid.style.left);
    if(positionX + value < window.innerWidth + this.#brid.width){
      positionX += value;
    }else{
      positionX = window.innerWidth + this.#brid.width;
    }
    this.#brid.style.left = positionX + "px";
  }
  #flyMove(){
      let id = setInterval(() => {
        if(document.hasFocus()){
          this.#fly(15);
          let positionX = parseInt(this.#brid.style.left);
          if(positionX == window.innerWidth + this.#brid.width){
            this.#brid.remove();
            clearInterval(id);
          }
        }
      }, speed);
  }
}

class Bomb{
  #bomb;
  constructor(){
    let bomb = document.createElement('img');
    bomb.style.position = "absolute";
    bomb.src = 'img/bomb.png';
    bomb.width = 120;
    bomb.height = 120;
    bomb.style.top = `-120px`;
    bomb.style.zIndex = 1000;
    bomb.style.left = `${randomDown(bomb.width)}px`;
    bomb.onclick = _ => {
      let bombX = parseInt(this.#bomb.style.left);
      let bombY = parseInt(this.#bomb.style.top);
      let birds = document.querySelectorAll('.bird');
      birds.forEach((bird) => {
        let birdX = parseInt(bird.style.left);
        let birdY = parseInt(bird.style.left);
        if(bombX - 200 < birdX  && bombX + this.#bomb.width + 200 > birdX
          && bombY - 200 < birdY && bombY + this.#bomb.height + 200 > birdY){
          bird.click();
        }
      })
      bomb.remove();
    }
    this.#bomb = bomb;
    document.body.append(bomb);
    this.#downMove();
  }
  #down(value){
    let positionY = parseInt(this.#bomb.style.top);
    if(positionY + value < window.innerHeight + this.#bomb.height){
      positionY += value;
    }else{
      positionY = window.innerHeight + this.#bomb.height;
    }
    this.#bomb.style.top = positionY + "px";
  }
  #downMove(){
    let id = setInterval(() => {
      if(document.hasFocus()){
        this.#down(15);
        let positionY = parseInt(this.#bomb.style.top);
        if(positionY == window.innerHeight + this.#bomb.height){
          this.#bomb.remove();
          clearInterval(id);
        }
      }
    }, speed);
  }
}

class Game{
  constructor(){
    Bird.resetKill();
    Bird.resetScore();
    let count = 60;
    let id = setInterval(() =>{
      if(document.hasFocus()){
        new Bird(brids[randomBrid()]);
        new Bird(brids[randomBrid()]);
        if(count % 5 == 0){
          new Bomb();
        }
        count--;
        time.innerText = `${parseInt(count/60)}:${parseInt(count%60)}`;
        if(count == 0){
          clearInterval(id);
          finish(Bird.score);
        }
      }
    }, 1000);
  }
}


startGame();
