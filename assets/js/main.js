$(document).ready(function(){
  var actualImg = 1;
  var imagenes = $("img");
  var numImg = imagenes.length;
  var circulo = $(".circle");
  //console.log(circulo);
  showImg(0);

  var autoSlide = setInterval(autoshow, 5000);
  function autoshow(){
    moveImg(1);
  }
  circulo.on("click",function(){
    //console.log($(this).attr("data-id"));
    showImg($(this).attr("data-id"));
    clearInterval(autoSlide);
  });
  $("#arrowLeft").on("click", function(){
    clearInterval(autoSlide);
    moveImg(-1);
  });
  $("#arrowRight").on("click", function(){
    clearInterval(autoSlide);
    moveImg(1);
  });

  function moveImg(valor){
    actualImg += valor;
    if(actualImg > numImg){
      actualImg = 1;
    }
    if(actualImg < 1){
      actualImg = numImg;
    }
    showImg(actualImg-1);
  }
  function showImg(valor){
    imagenes.hide();
    imagenes.eq(valor).show();
    circulo.removeClass("circle-select");
    circulo.eq(valor).addClass("circle-select");
    actualImg = valor+1;
  }

});
