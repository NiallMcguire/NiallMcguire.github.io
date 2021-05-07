'use strict';



document.getElementById('submit').onclick = function() {
    let email = document.getElementById("Email1").value;
    let name = document.getElementById("name1").value;
    let message = document.getElementById("Message").value;


    console.log(email);
    console.log(name);
    console.log(message);

    let link = "mailto:niallm95@gmail.com" + email + encodeURIComponent(name) + encodeURIComponent(message)
    window.location.href = link

};


