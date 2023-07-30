//--------------------------------------------------------------------------------//
//--------------------------- Funciones para fechas ------------------------------//
//--------------------------------------------------------------------------------//
function fechacorta(){  
    var date = new Date(),
    options = { weekday: "short", month: "short", day: "numeric", year: "2-digit" };

    date = date.toLocaleString( "es-ES", options );

    document.getElementById("msg").innerHTML = date; 
}

function fechaDDMMYYY(){  
    var currentDate = new Date(),
    day = currentDate.getDate(),
    month = currentDate.getMonth() + 1,
    year = currentDate.getFullYear(),
    date = day + "/" + month + "/" + year;
    
    document.getElementById("date").innerHTML = date;
}

function fechaHoraPaises(){  
    var date = new Date();
  
    document.open();
    document.write(
      "<p>" + date.toLocaleString('es-ES') +
      "<p>" + date.toLocaleString('en-GB') +
      "<p>" + date.toLocaleString('en-AU') +
      "<p>" + date.toLocaleString('en-NZ') +
      "<p>" + date.toLocaleString('th') +
      "<p>" + date.toLocaleString('cs') +
      "<p>" + date.toLocaleString('de') +
      "<p>" + date.toLocaleString('af') +
      "<p>" + date.toLocaleString('el') +
      "<p>" + date.toLocaleString('da') +
      "<p>" + date.toLocaleString('ko') +
      "<p>" + date.toLocaleString('ar') +
      "<p>" + date.toLocaleString('es') +
      "<p>" + date.toLocaleString('fr') +
      "<p>" + date.toLocaleString('vi') +
      "<p>" + date.toLocaleString('zh') +
      "<p>" + date.toLocaleString('ja'));
    document.close();
}

function fechaLarga(){ 
    var date = new Date(),
    options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

    date = date.toLocaleString( "es-ES", options );

    document.getElementById("msg").innerHTML = date; 
}

function fechaMMDDYYY(){ 
    var currentDate = new Date(),
    month = currentDate.getMonth() + 1,
    day = currentDate.getDate(),
    year = currentDate.getFullYear(),
    date = month + "/" + day + "/" + year;
    
    document.getElementById("date").innerHTML = date; 
}

function hora12(){ 
    var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes  = "0" + minutes; 
    }

    var suffix = "AM";
    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }
    if (hours == 0) {
         hours = 12;
    }

    time = hours + ":" + minutes + " " + suffix;
        
    document.getElementById("time").innerHTML = time;
}

function hora24(){ 
    var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes  = "0" + minutes; 
    }
    time = hours + ":" + minutes;
        
    document.getElementById("time").innerHTML = time;
}