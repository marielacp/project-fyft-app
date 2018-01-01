$(document).ready(function() {
  /* funcion obtener numeros aleatorios nuevos lo convertimos a cadena para concatenarlo*/
  function codNumRandon() {       
    var $numOne = (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
    var $numTwo = (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
    var $numThree = (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
    var $concatNumRandom = $numOne + $numTwo + $numThree;
    console.log($concatNumRandom);
    return $concatNumRandom;
  };
  /* Declarando variables */
  var $numRandonOne = $('#codRandom1');
  var $numRandonTwo = $('#codRandom2');
  var $numRandonThree = $('#codRandom3');
  var $toReset = $('#btn-to-reset');
  var $send = $('#next-cod');

  $toReset.click(function() {
    /* Nueva variable que almacenara funcion */
    var $newStoreNumRandom = codNumRandon();
    /* Lanzando alerta con codigo nuevo */
    alert('LAB- ' + $newStoreNumRandom);
   
    /* Convirtiendo cada codRandom en array para obtener cada uno de los numeros aleatorios */
    var $newStoreRandomOne = (parseInt($newStoreNumRandom[0])).toString();
    console.log($newStoreRandomOne);
    var $newStoreRandomTwo = (parseInt($newStoreNumRandom[1])).toString();
    var $newStoreRandomThree = (parseInt($newStoreNumRandom[2])).toString();

    /* Realizando comparacion de variables vs input de ingreso*/
    /* Se crea variables booleanas para realizar condiciones*/
    var $initNewStoreOne = false;
    var $initNewStoreTwo = false;
    var $initNewStoreThree = false;
    
    $numRandonOne.keyup(function() {
      if ($(this).val() === $newStoreRandomOne) {       
        $initNewStoreOne = true;
      } else {
        $initNewStoreOne = false;       
      }
      if (($initNewStoreOne === true) && ($initNewStoreTwo === true) && ($initNewStoreThree === true)) {
        $send.removeAttr('disabled');
        $send.addClass('next-active'); 
      } else {
        $send.attr('disabled', 'disabled');
        $send.removeClass('next-active'); 
      }
    });
    $numRandonTwo.keyup(function() {
      if ($(this).val() === $newStoreRandomTwo) {
        $initNewStoreTwo = true;
      } else {
        $initNewStoreTwo = false;
      }
      if (($initNewStoreOne === true) && ($initNewStoreTwo === true) && ($initNewStoreThree === true)) {
        $send.removeAttr('disabled');
        $send.addClass('next-active'); 
      } else {
        $send.attr('disabled', 'disabled');
        $send.removeClass('next-active');
      }
    });
    $numRandonThree.keyup(function() {
      if ($(this).val() === $newStoreRandomThree) {
        $initNewStoreThree = true;
        $send.addClass('next-active'); 
      } else {
        $initNewStoreThree = false;
        $send.removeClass('next-active');
      }
      if (($initNewStoreOne === true) && ($initNewStoreTwo === true) && ($initNewStoreThree === true)) {
        $send.removeAttr('disabled');
      } else {
        $send.attr('disabled', 'disabled');
      }
    });
  /* redireccionamiento a la vista formulario*/
  $send.click(function() {
    window.location.href = '../views/form-register.html';
  });
});
});

