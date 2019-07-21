"use strict";

function country(_name, _people, _area, _language){
  this.name= _name;
  this.people= _people;
  this.area= _area;
  this.language= _language;
  this.areaClass= areaClass;
  this.changeArea= function changeArea(_area){
    this.area= _area;
  }
}

function areaClass(){
  if(this.area >= 100)
    return "big";
  else if(this.area >= 50)
    return "medium";
  else if (this.area >= 20)
    return "small";
  else
    return "very small";
}

alert("Hello, this is COUNTRY_BOT");
var agree= confirm("Can you answer on some questions?..");

while(agree == true){
  var inputCountry= prompt("Input name of your country...");
  var inputPeople= prompt("How many ppl are there?.. (+- 5 millions)");
  var inputArea= prompt("Make mark(1-100): 1- very small country(Vatican)/100 - big country(USA/Russia)...");
  var inputLanguage= prompt("What is your native language?..");
  var userCountry= new country(inputCountry, inputPeople, inputArea, inputLanguage);
  document.write("Your country is "+ userCountry.name+ ", it has "+ userCountry.people+
  " (+- 5 millions) people. Also it has "+ userCountry.areaClass()+ " area("+ userCountry.area+
  "), and "+ userCountry.language+ " is native..."+ "<br />");
  agree= confirm("Another one country?..");
  // if(agree == false)
  //   break;
}
