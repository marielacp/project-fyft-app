$(document).ready(function() {
  var rutaLocal = '../assets/img/';
  var arrImagenes = [{url: 'b-peru.png'},
    {url: 'b-mexico.png'},
    {url: 'b-colombia.png'},
    {url: 'b-chile.png'},      
  ];

  /*Declaracion de variables*/
  var $img = $('#img');
  var $select = $('#select-control');    
  var $phone = $('#inputPhone');
  var $flags = $('.cont-flags');
  var $inputCode = $('#input-code');
  var $next = $('#next');
  var $validateForm = $('#validate-form');

  valPhone();
  /* Agregando eventos mouseover y recorriendo el select */
  $select.change(function() {    
    if ($select.val() == 'pais') {
      $img.removeAttr('src');     
      $inputCode.val('Elegir Pais');
    } else if ($select.val() == 'peru') {
      $img.attr('src', rutaLocal + arrImagenes[0].url);            
      $inputCode.val('051:');
    } else if ($select.val() == 'mexico') {
      $img.attr('src', rutaLocal + arrImagenes[1].url)           
      $inputCode.val('01139:');
    } else if ($select.val() == 'colombia') {
      $img.attr('src', rutaLocal + arrImagenes[2].url)            
      $inputCode.val('01102:');
    } else if ($select.val() == 'chile') {            
      $img.attr('src', rutaLocal + arrImagenes[3].url)            
      $inputCode.val('01130000:');
}
});

/* funcion para validar el numero de celular e inabilitar el boton next*/
$phone.keyup(function() {
  if ((($(this).val().length) === 10) & ($inputCode.val() != 0)) {
    $('#next').removeAttr('disabled');
    $('#next').addClass('next-active');         
  } else {
    $('#next').attr('disabled', 'disabled');
    $('#next').removeClass('next-active');
  }  
});
  /* Enviando mensaje de alerta con codigo*/
  $next.click(function () {
    alert('lab-' + numx + numy + numz);
      window.location.href = '../views/phone-verification.html';
  });  

  /*Plugin controla caracteres numericos*/
function valPhone() {    
  $(".numeric").numeric();
  $(".integer").numeric(false, function () { alert("Integers only"); this.value = ""; this.focus(); });
  $(".positive").numeric({ negative: false }, function () { alert("No negative values"); this.value = ""; this.focus(); });
  $(".positive-integer").numeric({ decimal: false, negative: false }, function () { alert("Positive integers only"); this.value = ""; this.focus(); });
  $(".decimal-2-places").numeric({ decimalPlaces: 2 });
  $("#remove").click(
      function (e) {
          e.preventDefault();
          $(".numeric,.integer,.positive,.positive-integer,.decimal-2-places").removeNumeric();
      }
  );
}

/* Declarando variables de numeros aleatorios,numx,y,z..estan establecidas para evitar duplicidad de codigos. */   
var numx= Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numy = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var numz = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}); 
