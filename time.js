"use strict";

function printDate(){

  var d= new Date();
  var day= d.getDate();
  var month= d.getMonth() + 1;
  var year= d.getFullYear();
  var hours= d.getHours();
  var minutes= d.getMinutes();
  var seconds= d.getSeconds();

  var full_date= date+ ".0"+ month+ "."+ year;
  var full_time= hours+ ":"+ minutes+ ":"+ seconds;

  var full= "DATE: "+ full_date+
  "<br />"+ "TIME: "+ full_time;

  var elem= document.getElementsByClassName("time");
  elem.innerHTML= full;
}

setInterval(printDate, 1000);
