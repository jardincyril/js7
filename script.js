//Declaration dune fonction
function anniversaire(){
  //declaration des variable
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //declaration des variable parseInt
  var shoeSizeInt = parseInt(shoeSize);
  var yearOfBirthInt = parseInt(yearOfBirth);
  //Declaration d'une variage regex
  var regex = /[0-9]+/;
  //boite de dialogue avec appel des variables
  if ((regex.test(shoeSize) == true) && (regex.test(yearOfBirth) == true)) {
    //declaration d'une variable shoes et result
    var shoes = ((shoeSizeInt *2) +5) *50;
    var result = (shoes - yearOfBirthInt +1766);
    alert(result);
  }else {
    alert('erreur!!')
  }
  }
