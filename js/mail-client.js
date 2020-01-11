function submitToAPI(e) {
    console.log(e)
   e.preventDefault();
   var URL = "https://014ng4f91j.execute-api.eu-west-1.amazonaws.com/staging/contact-us";
    
        var namere = /[A-Za-z]{1}[A-Za-z]/;
        if (!namere.test($("#firstName-input").val())) {
                     alert ("El teu nom ha de tenir més de dos caràcters");
            return;
        }

        var lastNamere = /[A-Za-z]{1}[A-Za-z]/;
        if (!lastNamere.test($("#lastName-input").val())) {
                     alert ("El teu cognom ha de tenir més de dos caràcters");
            return;
        }
        if ($("#email-input").val()=="") {
            alert ("Si us plau, introdueix una adreça de correu electrònic perquè puguem contactar amb tu");
            return;
        }

        var reemail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reemail.test($("#email-input").val())) {
            alert ("Si us plau, introdueix una adreça de correu electrònic vàlida perquè puguem contactar amb tu");
            return;
        }
        if ($("#message-input").val()=="") {
            alert ("El teu missatge no pot estar buit");
            return;
        }




   var firstName = $("#firstName-input").val();
   var lastName = $("#lastName-input").val();
   var email = $("#email-input").val();
   var message = $("#message-input").val();
   var data = {
      name : '' + firstName  + ' ' + lastName,
      email : email,
      message : message
    };

   $.ajax({
     type: "POST",
     url : "https://014ng4f91j.execute-api.eu-west-1.amazonaws.com/staging/contact-us",
     dataType: "json",
     crossDomain: "true",
     contentType: "application/json; charset=utf-8",
     data: JSON.stringify(data),

     
     success: function () {
       // clear form and show a success message
       alert("Missatge enviat correctament");
       document.getElementById("contact-form").reset();
   location.reload();
     },
     error: function () {
       // show an error message
       alert("No hem pogut enviar el teu missatge. Si us plau, torna a intentar-ho més tard");
     }});
 }