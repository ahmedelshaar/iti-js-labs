let bar = document.querySelector('.bar');
let gamerName = document.querySelectorAll('.name');
let score = document.getElementById('score');
let time = document.getElementById('time');
let kill = document.getElementById('kill');
let best = document.getElementById('best');
let last = document.getElementById('last');
let welcome = document.getElementById('welcome');
let welcomeBack = document.getElementById('welcomeBack');
let loser = document.getElementById('loser');
let winner = document.getElementById('winner');
let startButtons = document.querySelectorAll('.start');
let logoutButtons = document.querySelectorAll('.logout');

let randomBrid = () => Math.floor(Math.random() * brids.length);
let randomTop = (height) => Math.round(Math.random() * (window.innerHeight - height));
let randomDown = (width) => Math.round(Math.random() * (window.innerWidth - width));
let startGame = () => {
  if(localStorage.getItem('nameOfPlayer') == null){
    window.location.href = "/index.html";
  }else{
    let playerName = localStorage.getItem('nameOfPlayer');
    gamerName.forEach((item) => item.innerText = playerName);
    let players = JSON.parse(localStorage.getItem('plays'));
    let player = players.find(p => p.name === playerName);
    if(player['best'] == undefined){
      welcome.style.display = "block";
    }else{
      welcomeBack.style.display = "block";
      welcomeBack.querySelector('.last').innerText = last.innerText = player['last'];
      welcomeBack.querySelector('.best').innerText = best.innerText = player['best'];
    }
  }
}
let bestScore = (score) => {
  let playerName = localStorage.getItem('nameOfPlayer');
  let players = JSON.parse(localStorage.getItem('plays'));
  let playerindex = players.findIndex(p => p.name === playerName);
  if(players[playerindex]['best'] == undefined){
    players[playerindex]['best'] = score;
  }else{
    if(+players[playerindex]['best'] < score){
      players[playerindex]['best'] = score;
    }
  }
  best.innerText = players[playerindex]['best'];
  localStorage.setItem('plays', JSON.stringify(players));
}

startButtons.forEach((btn) => {
  btn.onclick = () => {
    startGame();
    welcome.style.display = "none";
    welcomeBack.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
    bar.style.display = "flex";
    kill.innerText = score.innerText = 0;
    new Game();
  }
})

let finish = (score) => {
  let items = document.querySelectorAll('img:not(.pop)');
  items.forEach((item) => {
    item.remove();
  })
  let playerName = localStorage.getItem('nameOfPlayer');
  let players = JSON.parse(localStorage.getItem('plays'));
  let playerindex = players.findIndex(p => p.name === playerName);
  players[playerindex]['last'] = score;
  localStorage.setItem('plays', JSON.stringify(players));
  bar.style.display = "none";
  if(score >= 50){
    winner.style.display = "block";
  }else{
    loser.style.display = 'block';
  }
}


logoutButtons.forEach((btn) => {
  btn.onclick = () => {
    localStorage.removeItem('nameOfPlayer');
    location.href = "index.html";
  }
})
