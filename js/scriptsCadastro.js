const fields = document.querySelectorAll("[required]")


function ValidateField(field){
    //lógica para verificar se existem erros
    function verifyErrors(){
        let foundError= false;

        for(let error in field.validity){
            //se não for customError 
            //então verifica se tem error
            if(field.validity[error] && !field.validity.valid){
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError){
        const messages ={
            text: {
                valueMissing: "Por favor, preencha esse campo"
            },
            email: {
                valueMissing: "E-mail é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            },
            tel: {
                valueMissing: "Por Favor, preencha um numero valido"
            }
        }

        return messages[field.type][typeError]
    }



    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
        
        if (message){
            spanError.classList.add("active")
            spanError.innerHTML= message
        }else{
            spanError.classList.remove("active")
            spanError.innerHTML= ""
        }
    }

    return function() {

        const error = verifyErrors()
        

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }

}




function customValidation(event){


    const field = event.target
     const validation =ValidateField(field)

    validation()
    




}

for ( field of fields){
    field.addEventListener("invalid", event => {
        //eliminar o bubble
        event.preventDefault()

        customValidation(event)
    } )
    field.addEventListener("blur", customValidation)
}





document.querySelector("form")
.addEventListener("submit", event =>{
    console.log("Enviar o formulário")
    
    //não vai enviar o formulario
    event.preventDefault()
})



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