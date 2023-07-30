//--------------------------------------------------------------------------------//
//------------------------------- Funciones para bucles --------------------------//
//--------------------------------------------------------------------------------//
function breakContFor(){
    var myBankBalance = 0;
    var output = "";
  
    for (myBankBalance = 0; myBankBalance <= 3; myBankBalance++) {
      if  (myBankBalance === 1) { 
        continue; 
        }
      output += "Mi balance es ahora de " + myBankBalance + " € " + "<br>";
    }
    document.getElementById("msg").innerHTML = output;
}

function breakContWhile(){
    var i = 0;
    var output = "";
  
    while (i < 5) {
      i ++;
      if  (i === 3) { 
        continue; 
        }
      output += i + "<br>";
    }
    document.getElementById("msg").innerHTML = output;
}

function breakBucleFor(){
  var myBankBalance = 0;
  var output = "";

  for (myBankBalance = 0; myBankBalance <= 10; myBankBalance++) {
    if (myBankBalance === 5) { 
      break; 
      }
    output += "Mi blanace es ahora de" + myBankBalance + " € " + "<br>";
  }
  document.getElementById("msg").innerHTML = output;
}

function breakBucleWhile(){
    var myBankBalance = 0;
    var output = "";
  
    while (myBankBalance <= 10) {
      if (myBankBalance === 5) { 
        break; 
        }
      output += "Mi balance es ahora de " + myBankBalance + " € " + "<br>";
      myBankBalance ++;
    }
    document.getElementById("msg").innerHTML = output;
}

function bucleDoWhile(){
    var myBankBalance = 0;
    var output = "";
  
    do {
      output += "Mi balance es ahora de " + myBankBalance + " € " + "<br>";
      myBankBalance ++;
    }
    while (myBankBalance <= 10);
  
    document.getElementById("msg").innerHTML = output;
}

function bucleforAnidado(){
    var output = "";

    for (i = 1; i <= 10; i++) {
        output += "<h1>" + i + " tabla de tiempo</h1>";
        output += "<ul>";
          for (j = 1; j <= 10; j++) {
            output += "<li>" + j + " x " + i + " = " + j * i;
        }
        output += "</ul>";
    }
    document.getElementById("msg").innerHTML = output;
}

function bucleForIn(){
    var user = { firstname: "Homer", surname: "Simpson", email: "HomerJS@gmail.com" };
    var output = "";
  
    for (var prop in user) {
      output += prop + ": " + user[prop] + "<br>";
    }
    document.getElementById("msg").innerHTML = output;
}

function bucleFor(){
    var myBankBalance = 0;
    var output = "";
  
    for (myBankBalance = 0; myBankBalance <= 10; myBankBalance++) {
      output += "Mi balance es ahora de " + myBankBalance + " € " + "<br>";
    }
    document.getElementById("msg").innerHTML = output;
}

function bucleWhileAnidado(){
    var i = 1;
    var output = "";
  
    while (i <= 10) {
        output += "<h1>" + i + " tabla de tiempo</h1>";
        output += "<ul>";
          var j = 1;
          while (j <= 10) {
            output += "<li>" + j + " x " + i + " = " + j * i;
            j++;
        }
            i++;
        output += "</ul>";
    }
    document.getElementById("msg").innerHTML = output;
}

function bucleWhile(){
    var myBankBalance = 0;
    var output = "";
  
    while (myBankBalance <= 10) {
      output += "Mi balance es ahora de " + myBankBalance + " € " + "<br>";
      myBankBalance ++;
    }
    document.getElementById("msg").innerHTML = output;
}