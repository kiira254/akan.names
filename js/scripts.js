function day() {
    var DD = parseFloat(document.getElementById("day").value);
  
    var MM = parseFloat(document.getElementById("month").value);
    var YY = parseFloat(document.getElementById("year").value);
    var vv=DD==0;
    var CC = (YY - 1) / 100 + 1;
  
    var weekDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
    console.log( weekDay);
    document.getElementById("result").innerHTML = Math.round( weekDay);
  
    var maleNames= ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi"," kwame"];
    var femaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var choice = document.getElementById("select").value;
    if ((choice === "male" && (DD>0 && DD<=31)&&(MM>0 && MM<=12)&& YY>=1)){
        console.log(maleNames[Math.round( weekDay)]);
    
      document.getElementById("akan-name").innerHTML=maleNames[Math.round(weekDay)];
    
    } else if((choice=="female" && (DD>0 && DD<=31)&&(MM>0 && MM<=12)&& YY>=1)){
       console.log(femaleNames[Math.round(weekDay)]);
    
    document.getElementById("akan-name").innerHTML= femaleNames[Math.round(weekDay)];
    } else{
        console.log("invalid input");
        alert("sorry you'he entered the invalid month or date!")
        document.getElementById("akan-name").innerHTML="invalid input";
     }
    
    }