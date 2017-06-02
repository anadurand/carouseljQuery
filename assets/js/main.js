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
    switch (this.id) {
      case "firstImg":  showImg(0);
        break;
      case "secondImg":  showImg(1);
        break;
      case "thirdImg":  showImg(2);
        break;
      case "forthImg":  showImg(3);
        break;
      case "fifthImg":  showImg(4);
        break;
    }
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
