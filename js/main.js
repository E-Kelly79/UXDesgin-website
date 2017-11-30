$(document).ready(function(){
	var username = $('#login-email');
	var password = $('#login-password');
	var name = $('#name');
	var regEmail = $('#reg-email');
	var regPassword = $('#reg-password');
	
	
//	if(location.href = "http://thewayround.16mb.com/index.html"){
//		
//	}
	
	$('.alert-danger').hide();
	
	$('#register').on('click', function(){
		sessionStorage.setItem("name", name.val());
		sessionStorage.setItem("email", regEmail.val());
		sessionStorage.setItem("password", regPassword.val());
	});
	
	
	$('#login-button').on('click', function(){
		if(sessionStorage.getItem("email") == username.val() && sessionStorage.getItem("password") == password.val()){
			$('.logged-in').html("Welcome " + sessionStorage.getItem("name"));
			$('#loginModal').modal('hide');
		}else{
			$('.alert-danger').html("email or password is incorrect").show();
			$('.alert-danger').fadeOut(500);
		}
	});
	
	
	if(location.href == "http://127.0.0.1:6897/about.html"){
		$('.logged-in').html("Welcome " + sessionStorage.getItem("name"));
	}
	
	
	$('#increase, #decrease').on('click', function() { // click to increase or decrease
      var btn = $(this),
      fontSize = parseInt(window.getComputedStyle(document.body, null).fontSize, 0); // parse the body font size as a number
      if (btn[0].id === "increase") { // detect the button being clicked
      	fontSize++; // increase the base font size
      } else {
      	fontSize--; // or decrease
      }
      document.body.style.fontSize = fontSize + 'px'; // set the body font size to the new value
    });
	
	

});
