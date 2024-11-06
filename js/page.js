$(document).ready(function(){

    var poema = $(".principais-obras a");
    var btn = $(".voltar-ao-topo");

    $(window).scroll(function(){
        var posicaoAtual = $(this).scrollTop();
        if (posicaoAtual >=200){
            btn.fadeIn();
        }
        else{
            btn.fadeOut();
        }
    })

    btn.click(function(){
        $("html, body").animate({scrollTop: 0},400);
    })

    poema.click(function(event){
        event.preventDefault();
        var seletor = $(this).attr("href");
        var posicao = $(seletor).offset().top;
    
        $("html, body").animate({scrollTop: posicao},400);
    });
})

function teste() {
    const box = document.getElementById("teste");

    box.style.overflow = box.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";

    box.innerText = box.innerText === "Clique aqui" ? "Alterado!" : "Clique aqui";
}