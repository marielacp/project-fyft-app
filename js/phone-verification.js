$(document).ready(function () {
    /* funcion obtener numeros aleatorios nuevos lo convertimos a cadena para concatenarlo*/
    function codNumRandon() {       
        var $numOne = (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
        var $numTwo = (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
        var $numThree = (Math.floor(Math.random() * (9 - 1 + 1)) + 1).toString();
        var $concatNumRandom = $numOne + $numTwo + $numThree;
        console.log($concatNumRandom);
        return $concatNumRandom;
    };

    var $numRandonOne = $("#CodRandom1");
    var $numRandonTwo = $("#CodRandom2");
    var $numRandonThree = $("#CodRandom3");
    var $toReset = $("#btn-to-reset");
    var $send = $('#next-cod');

    $toReset.click(function(){
    /*Nueva variable que almacenara funcion*/
        var $newStoreNumRandom = codNumRandon();
      /*Lanzando alerto con codigo nuevo*/
      alert('LAB- ' + $newStoreNumRandom );
      /*Convirtiendo cada codRandom en array para obtener cada uno de los numeros aleatorios*/
      var $newStoreRandomOne = (parseInt($newStoreNumRandom[0])).toString();
      console.log($newStoreRandomOne);
      var $newStoreRandomTwo = (parseInt($newStoreNumRandom[1])).toString();
      var $newStoreRandomThree = (parseInt($newStoreNumRandom[2])).toString();
    /*Realizando comparacion de variables vs input de ingreso*/
    /*Se crea variables booleanas para realizar condiciones*/
      var $initNewStoreOne = false;
      var $initNewStoreTwo = false;
      var $initNewStoreThree = false;
      
      $numRandonOne.keyup(function(){
        if ($(this).val() === $newStoreRandomOne){
          $initNewStoreOne=true;
        }else{
          $initNewStoreOne = false;
        }
        if ($ifinitNewStoreOne === true && $ifinitNewStoretwo === true && $ifinitNewStorethree ===true) {
          $send.removeAttr('disabled');
        //  $send.addClass('btn-enabled');
        } else {
          $send.attr('disabled', 'disabled');
       //   $send.removeClass('btn-enabled');
        }
      })
      $numRandonTwo.keyup(function () {
        if ($(this).val() === $newStoreRandomTwo) {
          $initNewStoreTwo = true;
        } else {
          $initNewStoreTwo = false;
        }
        if ($ifinitNewStore === true && $ifinitNewStoretwo === true && $ifinitNewStorethree === true) {
          $send.removeAttr('disabled');
          //  $send.addClass('btn-enabled');
        } else {
          $send.attr('disabled', 'disabled');
          //   $send.removeClass('btn-enabled');
        }
      })
      $numRandonThree.keyup(function () {
        if ($(this).val() === $newStoreRandomThree) {
          $initNewStoreThree = true;
        } else {
          $initNewStoreThree = false;
        }
        if ($ifinitNewStoreOne === true && $ifinitNewStoretwo === true && $ifinitNewStorethree === true) {
          $send.removeAttr('disabled');
          //  $send.addClass('btn-enabled');
        } else {
          $send.attr('disabled', 'disabled');
          //   $send.removeClass('btn-enabled');
        }
      })
    })
  

/* redireccionamiento a la vista formulario*/
$send.click(function () {
  window.location.href = '../views/form-register.html';
});


});
