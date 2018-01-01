$(document).ready(function() {
  var $firstName = $('#inp-first-name');
  var $lastName = $('#inp-last-name');
  var $email = $('#inp-email');
  var $checkbox = $('input[type="checkbox"]');
  var $submit = $('#next');

  /* Iniciamos con focus en input Name*/
  $firstName.focus(); 

  /* Ocultamos mensajes de alerta para cada input */
  $('.alert1').hide();
  $('.alert2').hide();
  $('.alert3').hide();

  /* Evento input, comprobando que cumpla validaciones*/
  $firstName.on('input', function(event) {
    /* Comprobando que no ingrese vacios o que no ingrese datos numericos*/    
    if (($(this).val() === '') || ($(this).val().match(/[1-9]/))) {
      $(this).val('');
      $('.alert1').show();
    } else {
      $('.alert1').hide();
    }
  }); 

  $lastName.on('input', function(event) {
    /* Comprobando que no ingrese vacios o que no ingrese datos numericos*/
    if (($(this).val() == '') || ($(this).val().match(/[1-9]/))) {
      $(this).val('');
      $('.alert2').show();
    } else {
      $('.alert2').hide();
    }
  });

  /* Comprobando que no ingrese vacio o que no ingrese datos numericos aplicamos evento focusout para evitar que pierda el foco del input */
  $email.focusout(function() {  
    var PATERNEMAIL = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var restringerEmail = PATERNEMAIL.test($(this).val());  
    if (!restringerEmail) {     
      $('.alert3').show();
      $(this).val('');
    } else {
      $('.alert3').hide();
    }
  });

  /* Boton next o submit si los datos se validan correctamente nos trasladamos al la pagina final */
  $submit.click(function(event) {
    /* console.log(event.target.checked) */
    if ($checkbox.prop('checked') && ($firstName.val()!== '') && ($lastName.val()!== '') && ($email.val()!== '')) {
      event.preventDefault();
      window.location.href = '../views/end.html';
    } else {
      alert('Por favor complete todos los campos');
      event.preventDefault();
    }    
  });
});
