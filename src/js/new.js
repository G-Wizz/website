




function submitContactForm(e) {
  e.preventDefault();

  if (validateField()){
    $('#sent-message').text('Sending email...')
    let formdata = new FormData();
    formdata.append('name', nameInput.val());
    formdata.append('email', emailInput.val());
    formdata.append('message', messageInput.val());

    fetch('/backend/contactform.php', {
      method: 'POST',
      body: formdata
    })
    .then(res => res.text())
    .catch(error => console.error('error:', error))
    .then(response => console.log('success:', response))
    .then(() => {
      $('#contact').collapse('hide');
      clearForm();
    })
  }
}

document.forms['vform'].onsubmit = submitContactForm;

// Name variables
let nameInput = $("#namef");
let requiredName = $("#requiredName");


// Email variables
let emailInput = $('#email');
let requiredEmail = $('#requiredEmail');
let emailReg = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


// Messsage variables
let messageInput = $('#message');
let requiredMessage = $('#requiredMessage');


// Validate Name function
function validateName(){
  let name = nameInput.val();
  if (name === '') {
    nameInput.removeClass("is-valid").addClass("is-invalid");
    requiredName.text('Required');
    nameInput.focus();
    return false;
  } else {
    nameInput.removeClass("is-invalid").addClass("is-valid");
    requiredName.text('');
    return true;
  }
}

// Validate Email function
function validateEmail(){
  let email = emailInput.val();
  if (!emailReg.test(email) || email === '') {
    emailInput.removeClass("is-valid").addClass("is-invalid");
    requiredEmail.text('Please enter a valid email address');
    emailInput.focus();
    return false;
  } else {
    emailInput.removeClass("is-invalid").addClass("is-valid");
    requiredEmail.text('');
    return true;
  }
}

// Validate Message function
function validateMessage(){
  let message = messageInput.val();
  if (message === '') {
    messageInput.removeClass("is-valid").addClass("is-invalid");
    requiredMessage.text('Required');
    messageInput.focus();
    return false;
  } else {
    messageInput.removeClass("is-invalid").addClass("is-valid");
    requiredMessage.text('');
    return true;
  }
}

// Validate Form function
function validateField() {

  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isMessageValid = validateMessage();

  return isNameValid && isEmailValid && isMessageValid;


};

function clearForm() {
  nameInput.val("");
  emailInput.val("");
  messageInput.val("");

  requiredName.text('');
  requiredEmail.text('');
  requiredMessage.text('');

  nameInput.removeClass("is-invalid is-valid");
  emailInput.removeClass("is-invalid is-valid");
  messageInput.removeClass("is-invalid is-valid");

  $('#sent-message').text('');
}
