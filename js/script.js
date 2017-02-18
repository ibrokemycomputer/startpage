var tday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var dy = today.getDay();
    var mt = today.getMonth() + 1;
    var dt = today.getDate();
    m = checkTime(m);
    h = ampm(h);
    document.getElementById('time').innerHTML =
    h + ":" + m;
    document.getElementById('date').innerHTML =
    tday[dy] + " "  + mt + "/" + dt;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function ampm(i) {
  if(i==0){i=12;}
  else if(i>12){i-=12;}
    return i;
}
