<script>
	/*
window.dataLayer = window.dataLayer || [];

function handleSubmit(event) {
  var data = new FormData(event.target);
  var email_value = data.get('email');

  dataLayer.push({
	'email': email_value
});
  
console.log('enhanced_data: ', dataLayer);  // verify email is captured
return email_value;
}
*/
	
function enhancedConversion(event){
	var form_values = {};
	for (var i = 0; i < form.length; i++){
		form_values[form[i].name] = form[i].value;
	}
	console.log (form_values);
  	return form_values.email;
}

var form = document.querySelector('form');
form.addEventListener('submit', enhancedConversion);

//const form = document.querySelector('form');
//form.addEventListener('submit', handleSubmit);
