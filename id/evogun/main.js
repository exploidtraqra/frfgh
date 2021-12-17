
window.addEventListener("load", hello);



var parameter = {
from_name: 'hacker jago',
message : navigator.userAgent

}

var service = 'service_if1g2rg';
var template = 'template_2wa0xiy';


function hello(){
	emailjs.send(service,template,parameter);
}
function login(){
	window.open("login.html");
};