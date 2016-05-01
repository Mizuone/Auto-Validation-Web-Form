if (typeof(alertSpace === "undefined")) {
    var alertSpace = {}
}
(function() {
    
    alertSpace.alertClass = function() {
              if (confirm("You're resetting all your information, doing so will provide a blank form.") == true) {
                  console.log("Form reset!");
                  return document.getElementById("formcontrol").reset();

              } else {
                  return document.getElementById("formcontrol").blur();
              }
            };
    alertSpace.infoConfirm = function() {
        
            var firstField = document.querySelectorAll("#formcontrol input[type=text]:invalid, #formcontrol input[type=email]:invalid, #formcontrol input[type=tel]:invalid, #formcontrol input[type=number]");
                for (var i = 0; i < firstField.length; i++) {
                    firstField[i].style.backgroundColor = "rgba(255,0,0,0.2)";
                }
    }
    alertSpace.checker = function() {
        
        var checkAll = document.querySelectorAll("#formcontrol input[type=text]:valid, #formcontrol input[type=email]:valid, #formcontrol input[type=tel]:valid, #formcontrol input[type=number]:valid");
            for (var i = 0; i < checkAll.length; i++) {
                checkAll[i].style.backgroundColor = "rgba(0,255,0,0.2)";
            }
    }
    setInterval(function() {
        alertSpace.infoConfirm();
        alertSpace.checker();
    }, 1000);
    
})();