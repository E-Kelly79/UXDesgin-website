$(document).ready(function(){
	
	var username = $('#login-email');
	var password = $('#login-password');
	var name = $('#name');
	var regEmail = $('#reg-email');
	var regPassword = $('#reg-password');
	
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
			$('.alert-danger').html("email or password is incorrect").show()
		}
	});
	
	
	if(location.href == "http://127.0.0.1:6897/about.html"){
		$('.logged-in').html("Welcome " + sessionStorage.getItem("name"));
	}
	
	

});
