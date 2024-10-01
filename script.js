function trailer() {
    let Divtrailer = document.querySelector('.div-trailer');
    let trailer = document.querySelector('.trailer-video');
let trailerDiv = document.querySelector('.trailer-div');

trailerDiv.addEventListener('click', function(){
    trailer.play();
    gsap.from(trailer, {
        opacity: 0,
        borderRadius: "150px",
        duration: 1
    })
    gsap.to(Divtrailer, {
        display: "inline-block",
        background: "#2a2623",
        zIndex: 999

    });
    gsap.to(trailer, {
        display: "inline-block",

    });
})

trailer.addEventListener('click', function(){
    gsap.to(Divtrailer, {
        display: "none",
        zIndex: -3
    });
    gsap.to(trailer, {
        display: "none",
    })
    trailer.load();
})
}

trailer();


function loco() {

const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});
}

loco() 