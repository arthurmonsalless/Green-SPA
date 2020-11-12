    // COMEÇANDO O JS

    window.addEventListener("load", () =>{
        document.querySelector(".load")
        .style.display = "none"
    })


    // FUNÇÃO DO ICONE MOBILE
 $( function(){

   $('nav.mobile').click(function(){
            // o que vai acontecer quando clicarmos na nav.mobile!
        var listaMenu = $('nav.mobile ul')

         //Abrir menu com efeito
         listaMenu.slideToggle();
    })
 })


    // IMAGENS EM LOOP 
    let time = 5000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}


function start(){
    setInterval( () => {
        //troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load" , start)