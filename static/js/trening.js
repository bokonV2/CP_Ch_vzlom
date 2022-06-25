var arr = new Array();

function randomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function start() {
  var a1 = randomNumber(1, 10);
  var a2 = randomNumber(1, 10);
  var b1 = randomNumber(1, 10);
  var b2 = randomNumber(1, 10);
  document.getElementById("a1").innerHTML = a1;
  document.getElementById("a2").innerHTML = a2;
  document.getElementById("b1").innerHTML = b1;
  document.getElementById("b2").innerHTML = b2;
  document.getElementById("a11").innerHTML = a1;
  document.getElementById("a21").innerHTML = a2;
  document.getElementById("b11").innerHTML = b1;
  document.getElementById("b21").innerHTML = b2;
  arr = new Array();
  arr.push(a1,a2,b1,b2,a1-a2,b1-b2);
  arr.push(a1,a2,b1,b2,a1+a2,b1+b2);
}
function prov(){
  var inputs = document.getElementsByTagName('input');
  console.log("Start");
  for (index = 0; index < inputs.length; ++index) {
    console.log(inputs[index].value);
    if(parseInt(inputs[index].value) == arr[index]){
      inputs[index].style.backgroundColor = "green";
    }
    else {
      inputs[index].style.backgroundColor = "red";
    }
  }
}
