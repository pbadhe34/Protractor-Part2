

angular.module("cspScriptModule", [])
.controller('MainController', function() {
   this.counter = 0;
   this.inc = function() {
     this.counter++;
   };
   this.snippet="<h2>This is text</h2>";
   this.result="";
   
   this.evil = function() {
     // jshint evil:true
     try {
      this.evilError ="";
      this.result= eval(this.snippet);
     } catch (e) {
       this.evilError = e.message;
     }
  
   };
 });

