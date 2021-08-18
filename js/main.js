const sections = document.querySelectorAll(".sc-section");
var elemento = document.getElementById("otro");
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