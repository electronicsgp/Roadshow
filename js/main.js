const sections = document.querySelectorAll(".sc-section");
var elemento = document.getElementById("otro");
const scriptURLCH = "https://script.google.com/macros/s/AKfycbxcRq5pU4AaLfsJaW2qydPOHL8l6cjfRDIZyiXpecqujJ9mMlDdQrW3spOt-zuensGLhA/exec";
const scriptURLMX = "https://script.google.com/macros/s/AKfycbz9h4TWfD190V8zLebS1tQTZ_C2RbWd5kJdjzwsFaNvVOUq4E1aJwvQ3Ch8WlWDD7De/exec";
const scriptURLCOL = "https://script.google.com/macros/s/AKfycbyi_TinYYjlhO7tCQ4AG2h8QTwFPijg6uk7em1PZbFSfNe3mCrQ2aAhjOMpbcg6-kEK9Q/exec";
const formCH = document.forms['formCH'];
const formMX = document.forms['formMX'];
const formCOL = document.forms['formCOL'];
let modallg = document.getElementsByClassName("modalxl");
let modalbodyf = document.getElementsByClassName("mbodyF");
let modalbodyt = document.getElementsByClassName("mbodyT");
let modalh = document.getElementsByClassName("mheader");
let email = document.getElementsByClassName("inputEmail");
let corpo = document.getElementsByClassName("error");
let btnEn = document.getElementsByClassName("env");


formCH.addEventListener('submit', e => {
    e.preventDefault()
    const texto = email[0].value;
    let correos = ["gmail", "hotmail", "outlook", "yahoo", "live.com"];
    var resultado = -1;
    for (let correo of correos) {
        if (texto.indexOf(correo) !== -1) {
            resultado = texto.indexOf(correo);
            break;
        }
    }
    if (resultado !== -1) {
        corpo[0].innerHTML = "El correo no es corporativo";
        corpo[0].className = "error active";
    } else {
        corpo.innerHTML = "";
        corpo.className = "error";
        btnEn[0].setAttribute("disabled", false);
        fetch(scriptURLCH, {
                method: 'POST',
                body: new FormData(formCH)
            })
            .then(response => Cambio())
            .catch(error => console.error('Error!', error.message))
    }
})

formMX.addEventListener('submit', e => {
    e.preventDefault()
    const texto = email[1].value;
    let correos = ["gmail", "hotmail", "outlook", "yahoo", "live.com"];
    var resultado = -1;
    for (let correo of correos) {
        if (texto.indexOf(correo) !== -1) {
            resultado = texto.indexOf(correo);
            break;
        }
    }
    if (resultado !== -1) {
        corpo[1].innerHTML = "El correo no es corporativo";
        corpo[1].className = "error active";
    } else {
        corpo[1].innerHTML = "";
        corpo[1].className = "error";
        btnEn[1].setAttribute("disabled", false);
        fetch(scriptURLMX, {
                method: 'POST',
                body: new FormData(formMX)
            })
            .then(response => Cambio())
            .catch(error => console.error('Error!', error.message))
    }
})
formCOL.addEventListener('submit', e => {
    e.preventDefault()
    const texto = email[2].value;
    let correos = ["gmail", "hotmail", "outlook", "yahoo", "live.com"];
    var resultado = -1;
    for (let correo of correos) {
        if (texto.indexOf(correo) !== -1) {
            resultado = texto.indexOf(correo);
            break;
        }
    }
    if (resultado !== -1) {
        corpo[2].innerHTML = "El correo no es corporativo";
        corpo[2].className = "error active";
    } else {
        corpo[2].innerHTML = "";
        corpo[2].className = "error";
        btnEn[2].setAttribute("disabled", false);
        fetch(scriptURLCOL, {
                method: 'POST',
                body: new FormData(formCOL)
            })
            .then(response => Cambio())
            .catch(error => console.error('Error!', error.message))
    }
})

function Cambio() {
    for (let index = 0; index < modallg.length; index++) {
        modallg[index].classList.remove("modal-xl");
        modallg[index].classList.add("modal-lg")
        modalbodyf[index].classList.add("d-none");
        modalbodyt[index].classList.remove("d-none");
        modalbodyt[index].classList.add("d-block");
        modalh[index].classList.add("d-none");

    }


    // setTimeout(function() {
    //     window.location.href = window.location;
    // }, 1500);
}

window.onscroll = () => scrollspy();
window.onload = () => scrollspy();
window.onresize = () => scrollspy();

const scrollspy = () => {

    const pageYPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((section) => {
        const sectionYPosition = section.offsetTop;
        let ejemplo = document.querySelector('#' + section.id);
        if (pageYPosition > sectionYPosition - window.screen.height + 300) {
            // alert(section.id);
            if ("section1" === section.id) {
                //alert("hola");
                elemento.className += " animate__animated animate__fadeInUp";

            }
        } else {
            elemento.className = "row  d-flex justify-content-center mx-xl-5";
        }
    });
};

scrollspy();