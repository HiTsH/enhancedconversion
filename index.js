<script>
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

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
