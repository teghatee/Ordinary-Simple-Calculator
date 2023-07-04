function equal1(){
  var a = document.getElementById("inp1").value;
  var b = document.getElementById("inp2").value;
  var add = Number(a) + Number(b);
   
  document.getElementById("outa").value = add;
 }

 function equal2(){
  var a = document.getElementById("inp3").value;
  var b = document.getElementById("inp4").value;
  var Minus = Number(a) - Number(b);
 
  document.getElementById("outb").value = Minus;
}

function equal3(){
  var a = document.getElementById("inp5").value;
  var b = document.getElementById("inp6").value;
  var Division = Number(a) / Number(b);
 
  document.getElementById("outc").value = Division;
}

function equal4(){
  var a = document.getElementById("inp7").value;
  var b = document.getElementById("inp8").value;
  var Multiplication = Number(a) * Number(b);
 
  document.getElementById("outd").value = Multiplication;
}

function equal5(){
  var a = document.getElementById("inp9").value;
  var b = document.getElementById("inp10").value;
  var Modulus = Number(a) % Number(b);
 
  document.getElementById("oute").value = Modulus;
}