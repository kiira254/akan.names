function day() {
    var DD = parseFloat(document.getElementById("day").value);
  
    var MM = parseFloat(document.getElementById("month").value);
    var YY = parseFloat(document.getElementById("year").value);
    var vv=DD==0;
    var CC = (YY - 1) / 100 + 1;
  
    var weekDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;