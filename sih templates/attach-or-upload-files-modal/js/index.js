

$("#switch-to-upload").on("click", function() {
  
  console.log("click 1");
  
  $("#modal-attach").addClass("is-leaving").one("animationend -webkit-animationend", function() {
    
    console.log("swap 1");
    
    $("#modal-attach").addClass("is-hidden").removeClass("is-leaving");
    
    $("#modal-upload").removeClass("is-hidden").addClass("is-entering").one("animationend -webkit-animationend", function() {
      
      console.log("finish 1");
      
      $("#modal-upload").removeClass("is-entering");
      
    });
  });
});

$("#switch-to-attach").on("click", function() {
  
  console.log("click 2");
  
  $("#modal-upload").addClass("is-leaving").one("animationend -webkit-animationend", function() {
    
    console.log("swap 2");
    
    $("#modal-upload").addClass("is-hidden").removeClass("is-leaving");
    
    $("#modal-attach").removeClass("is-hidden").addClass("is-entering").one("animationend -webkit-animationend", function() {
      
      console.log("finish 2");
      
      $("#modal-attach").removeClass("is-entering");
      
    });
  });
});

// $("#switch-to-upload").on("click", function() {
//   $("#modal-attach").addClass("is-hidden");
//   $("#modal-upload").removeClass("is-hidden");
// });

// $("#switch-to-attach").on("click", function() {
//   $("#modal-upload").addClass("is-hidden");
//   $("#modal-attach").removeClass("is-hidden");
// });