function down(egg,basket) {
    egg.style.top = '0px';
    egg.style.left = (Math.random() * (window.innerWidth - egg.width - 25)) + 'px';
    let counterElement = document.querySelector(".counter");
    let top = -egg.height;
    let id = setInterval(function(){
        if(top + 5 <= (window.innerHeight - egg.height - basket.height / 3)){
            top += 5;
            egg.style.top= top + "px"
        }else {
            let leftEgg = parseInt(egg.style.left);
            let leftBasket = parseInt(basket.style.left);
            if(leftEgg > leftBasket && leftEgg < leftBasket + basket.width){
                counterElement.innerText = +counterElement.innerText + 1;
                down(egg, basket);

            }else{
                egg.src = 'image/egg-broken.png';
                egg.style.top = window.innerHeight - egg.height - 1 + "px";
            }
            clearInterval(id);
        }
      }, 25);
};

window.addEventListener('load', function() {
    // Create Basket
    let basket = document.createElement("img");
    basket.src = 'image/basket.png';
    basket.width = 100;
    basket.height = 100;
    basket.style.position = 'absolute';
    let left = Math.round( (window.innerWidth-basket.width)/2 );
    basket.style.left = left + 'px';
    basket.style.top = window.innerHeight - basket.height - 1 + 'px';
    document.body.appendChild(basket);

    // Create Egg
    let egg = document.createElement("img");
    egg.src = 'image/egg.png';
    egg.width = 50;
    egg.height = 50;
    egg.style.position = 'absolute';
    this.document.body.appendChild(egg);

    down(egg,basket);

    window.addEventListener('keydown', function(event) {
        if(event.key =="ArrowRight") {
            if(left + 25 < (window.innerWidth-basket.width)){
                left += 25;
                basket.style.left=left+"px"
            }else{ 
                left = window.innerWidth - basket.width - 2;
                basket.style.left=left+"px"
            }
        }else if(event.key =="ArrowLeft") {
            if(left - 25 >= 0){
                left -= 25;
                basket.style.left=left+"px"
            }else{ 
                left = 0;
                basket.style.left="0px"
            }
        }
    });

});