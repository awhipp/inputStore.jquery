 window.onload = function(){
   $("#example1").cookieStore();
   $("#example2").cookieStore({
     name: "CustomOptions",
     expire: 120,
     debug: true
   });
 }
