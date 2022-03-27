function validateform()
{
    var username = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    if(username == "" || username == null)
    {
        document.getElementById("Nerror").innerHTML = "**Name Can Not be blank";
        return false;
    }
    else
    {
        document.getElementById("Nerror").innerHTML = "";
    }

    if(number == ""  || number== null )
    {
        document.getElementById("Aerror").innerHTML = "**Phone Number Can Not be blank";
        return false;
    }
    else if(number.length!=10 )
    {
        document.getElementById("Aerror").innerHTML = "**Phone Number Can be Only 10 digits";
        return false;
    }
    else
    {
        document.getElementById("Aerror").innerHTML = "";
    }
    
    var regEx =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(email == ""  || email== null )
    {
        document.getElementById("Eerror").innerHTML = "**Email Can Not be blank";
        return false;
    }
   
    else if(!regEx.test(email))
    {
        document.getElementById("Eerror").innerHTML = "Invalid Email Address";
        return false;
    }
    else 
    {
        document.getElementById("Eerror").innerHTML = "";
    }
    
   
    
    var pass = password.length;
    if (password == "" || password == null) {
        document.getElementById("Merror").innerHTML = "**Password can not be blank";
        return false;
                }
        
                else if (pass < 8) {
                    document.getElementById("Merror").innerHTML = "** Password should have atleast 8 character's";
        return false;
                }
                else {
                    document.getElementById("Merror").innerHTML = "";
                   
                }
}










var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


