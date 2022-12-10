function fall(egg,top,basket) {  
    egg.style.left = getRandomInt(0,window.innerWidth-egg.width)+'px';
    let id=setInterval(function(){
        top+=30
        if(top<(window.innerHeight-egg.height))
            egg.style.top=top+"px"
        else
        {
            if(
                parseInt(egg.style.left)>parseInt( basket.style.left )
                &&
                parseInt(egg.style.left)+parseInt(egg.width)<parseInt(basket.style.left)+parseInt(basket.width)
                 ){
                counter++;
                span.innerHTML = counter;
                // egg.remove();
                top = 0;
                fall(egg,top,basket);
                egg.src = "image/basket.png";
                
            }else{
                // alert("Game Over");
                egg.src = 'image/egg-broken.png';
            }
            clearInterval(id);
        }
      },100);

};


function getRandomInt(min=0, max=window.innerWidth) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }



window.addEventListener('load', function() {
    
    
    let basket = document.createElement("img");
    basket.src = 'image/basket.png';
    basket.width = 200;
    basket.height = 100;
    basket.style.position = 'absolute';
    left = Math.round( (window.innerWidth-basket.width)/2 );
    basket.style.left = left+'px';
    basket.style.top = this.window.innerHeight-basket.height+'px';
    this.window.addEventListener('keydown', function(event) {
        if(event.key =="ArrowRight")
        {
            left+=50;
            if(left<(window.innerWidth-basket.width))
                basket.style.left=left+"px"
            else 
                left=window.innerWidth-basket.width;
        }else if(event.key =="ArrowLeft")
        {
            left-=50;
            if(left>=0)
                basket.style.left=left+"px"
            else 
                left=0;
        }
    });
    
    
    
    this.document.body.appendChild(basket);
    // egg.style.top = top+'px';
    counter = 0;
    span = document.createElement("span");
    span.style.position = 'absolute';
    span.style.top = '0px';
    span.style.left = '0px';
    span.style.fontSize = '50px';
    span.style.color = 'red';
    span.innerHTML = counter;
    this.document.body.appendChild(span);

    let egg = document.createElement("img");
    let top = 0;
    egg.src = 'image/egg.png';
    egg.width = 100;
    egg.height = 100;
    egg.style.position = 'absolute';
    egg.style.top = top+'px';
    this.document.body.appendChild(egg);
    // egg = document.querySelector("img");
    fall(egg,top,basket);
});