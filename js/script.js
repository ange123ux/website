// function myFunction(){
//     var text;
//     if (confirm ("We have received your message. Thank you for reaching out to us!")){
//         text="thank you";
//     }
//     document.getElementById("demo").innerHTML = text;
// }


<script>

var frmvalidator = new Validator(“contactform”); 
frmvalidator.addValidation(“name”,”req”,”Please provide your name”); 
frmvalidator.addValidation(“email”,”req”,”Please provide your email”); 
frmvalidator.addValidation(“email”,”email”, “Please enter a valid email address”); 
</script>