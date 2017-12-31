$(document).ready(function(){
var $email = $('#inputEmail');
var $password = $('#inputPassword');
var $checkbox = $('input[type="checkbox"]')
var validateemail = false;
var validatepassword = false;
var validatechecbox = false;
//asociando evento al formulario...nuevo evento Input...es mas chevere.
$email.on('input', function(event){
// console.log(event.target.value);
if($email.val==""){
    validateemail
}else{
  //  console.log($(this).val());
    var PATERNEMAIL = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    PATERNEMAIL.test($(this).val());
}

});

    $password.on('input', function (event) {
      if($(this).val()>=6){
          alert('cumple');
      } else{
              alert('no cumple');
          }
  
    });

    $checkbox.on('click', function (event) {
    console.log(event.target.checked)
   // console.log($(this).target.checked)

   

    });
});
