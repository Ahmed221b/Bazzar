/*menu function*/
function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
}
/*slide bar*/

var i = 0; 			// Start Point
var images = [3];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "Images/pyramids.jpg";
images[1] = "Images/temples.jpg";
images[2] = "Images/nile river.jpg";

// Change Image
function changeImg(){
document.slide.src = images[i];

// Check If Index Is Under Max
if(i < images.length - 1){
// Add 1 to Index
i++; 
} else { 
// Reset Back To O
i = 0;
}

// Run function every x seconds
setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
function check()
{  
 var email = document.getElementById("email").Value;

var password=document.getElementById("password").Value;

var admin_mail="admin@gmail.com";

var admin_pass="Abc_123";  
if(email==="")
{
    alert("email is empty");
}
else if(password==="")
{
    alert("password is empty");
}
else if(email===""&&password==="")
{
    alert("email and password are empty");
}
else if(admin_mail===email && admin_pass===password)
{
    
   window.location.href="https://www.w3schools.com";
}
else if(email==="user@gmail.com"&& password==="Abc_321")
{
    window.location.href="https://www.w3schools.com";  
}
else
{
    alert("wrong email or password!");
}
}