$("img").hover(function () {
  let actual = $(this).attr("src");
  let imagen = $(this).attr("data-alt-src");
  $(this).toggleClass("magictime puffIn");
  console.log(actual);
  console.log(imagen);
  $(this).attr("src", imagen);
  $(this).attr("data-alt-src", actual);
});

// HINT: La función de jQuery .hover() acepta 2 funciones como parámetros: la primera función ejecuta el código cuando entramos
// al área con el cursor, la segunda escribe el código para lo que queremos que suceda cuando el cursor salga del área. 