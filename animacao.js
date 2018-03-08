
$(document).ready(function(){
    $("#botao0").click(function(){
        $("#central").css("background-image", "url(pizza-left.png),url(pizza-right.png)");
        $("#central").css("transform", "rotate(0deg)");
    });
    $("#botao1").click(function(){
        $("#central").css("background-image", "url(pizza-left.png),url(pizza-right.png)");
        $("#central").css("transform", "rotate(540deg)");
    });
    $("#botao2").click(function(){
        $("#central").css("background-image", "url(pizza-left2.png),url(pizza-right.png)");
        $("#central").css("transform", "rotate(900deg)");
    });
    $("#botao3").click(function(){
        $("#central").css("background-image", "url(pizza-left.png),url(pizza-right2.png)");
        $("#central").css("transform", "rotate(360deg)");
    });
});