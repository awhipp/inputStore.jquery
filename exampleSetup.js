 window.onload = function(){
   $("#example1").inputStore();
   $("#example2").inputStore({
     name: "CustomOptions",
     expire: 120,
     debug: true
   });

   $("#inputBlock").inputStore();
   $("#numberBlock").inputStore();
   $("#checkboxBlock").inputStore();
   $("#selectBlock").inputStore();
   $("#textareaBlock").inputStore();
 }
