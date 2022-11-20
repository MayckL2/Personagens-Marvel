var head= document.querySelector("header")

function apagahead(){
    // head.innerHTML= window.pageYOffset

    let rola = window.pageYOffset
    if (rola > 99){
        head.style.opacity= "0.5"
    }else{
        head.style.opacity= "1"
    }
}

function carro(a){
    var cabeca = document.querySelector("#cabeca")
    

    if (a == 1){
        cabeca.style.marginLeft= "0vw"
        window.scrollTo(0, 2300)
    }else if(a == 2){
        cabeca.style.marginLeft= "-100vw"
        window.scrollTo(0, 2300)
    }else if(a == 3){
        cabeca.style.marginLeft= "-200vw"
        window.scrollTo(0, 2300)
    }else if(a == 4){
        cabeca.style.marginLeft= "-300vw"
        window.scrollTo(0, 2300)
    }else if(a == 5){
        cabeca.style.marginLeft= "-400vw"
        window.scrollTo(0, 2300)
    }
}


function carro2(a){
    var cabeca = document.querySelector("#cabeca")
    

    if (a == 1){
        cabeca.style.marginLeft= "0vw"
        window.scrollTo(0, 800)
    }else if(a == 2){
        cabeca.style.marginLeft= "-90vw"
        window.scrollTo(0, 800)
    }else if(a == 3){
        cabeca.style.marginLeft= "-180vw"
        window.scrollTo(0, 800)
    }else if(a == 4){
        cabeca.style.marginLeft= "-270vw"
        window.scrollTo(0, 800)
    }else if(a == 5){
        cabeca.style.marginLeft= "-360vw"
        window.scrollTo(0, 800)
    }else if(a == 6){
        cabeca.style.marginLeft= "-450vw"
        window.scrollTo(0, 800)
    }else if(a == 7){
        cabeca.style.marginLeft= "-540vw"
        window.scrollTo(0, 800)
    }else if(a == 8){
        cabeca.style.marginLeft= "-630vw"
        window.scrollTo(0, 800)
    }else if(a == 9){
        cabeca.style.marginLeft= "-720vw"
        window.scrollTo(0, 800)
    }else if(a == 10){
        cabeca.style.marginLeft= "-810vw"
        window.scrollTo(0, 800)
    }else if(a == 11){
        cabeca.style.marginLeft= "-900vw"
        window.scrollTo(0, 800)
    }else if(a == 12){
        cabeca.style.marginLeft= "-990vw"
        window.scrollTo(0, 800)
    }else if(a == 13){
        cabeca.style.marginLeft= "-1080vw"
        window.scrollTo(0, 800)
    }else if(a == 14){
        cabeca.style.marginLeft= "-1170vw"
        window.scrollTo(0, 800)
    }else if(a == 15){
        cabeca.style.marginLeft= "-1260vw"
        window.scrollTo(0, 800)
    }else if(a == 16){
        cabeca.style.marginLeft= "-1350vw"
        window.scrollTo(0, 800)
    }
}