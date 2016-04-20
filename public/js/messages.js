exports.message = function(){
  var fs = require("fs");
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phoneNo = document.getElementById("PhoneNo");
    var message = document.getElementById("message");

    var NewMessage = name + "\n" + email + "\n" + phoneNo + "\n" + message;
    fs.writeFileSync("/messages/msg_" + x + ".txt", NewMessage);
    // window.open('mailto:Capie12001@hotmail.com?subject=Oakdale_Electrical&body=NewMessage');
};
