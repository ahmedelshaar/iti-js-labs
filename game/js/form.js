let birdsDiv = document.getElementById('birds');
brids.forEach(bird => {
  let div = document.createElement('div');
  let img = document.createElement('img');
  img.src = bird.src;
  let p = document.createElement('p');
  p.innerText = bird.score;
  div.append(p, img);
  birdsDiv.append(div);
})

if(localStorage.getItem('nameOfPlayer') != null){
  window.location.href = "/game.html";
}

let form = document.querySelector('form');
let input = document.querySelector('input');
let span = document.getElementById('error');
input.onkeyup = _ => {
  if(input.value.trim() == "" || !isNaN(input.value)){
    span.style.display = "block"
  }else{
    span.style.display = "none"
  }
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  let playerName = input.value.trim();
  if(playerName == "" || !isNaN(playerName)){
    span.style.display = "block"
  }else{
    let plays = localStorage.getItem('plays');
    if(plays == null){
      localStorage.setItem('nameOfPlayer', playerName);
      localStorage.setItem('plays', JSON.stringify([{'name': playerName}]));
    }else{
      localStorage.setItem('nameOfPlayer', playerName);
      let othersPlayer = JSON.parse(plays);
      let findPlayer = othersPlayer.find(p => p.name === playerName);
      if(!findPlayer){
        othersPlayer.push({'name': playerName})
        localStorage.setItem('plays', JSON.stringify(othersPlayer));
      }
    }
    window.location.href = "/game.html";
  }
})