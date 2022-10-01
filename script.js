let globlesubmit = false
function reset (){
   firstName = document.getElementById('First-name').value =''
    lastName = document.getElementById('Last-name').value=''
    email = document.getElementById('Email').value=''
    password = document.getElementById('password').value = ''
    confirmpassword = document.getElementById('confirm-password').value = ''
    TandC = document.getElementById('invalidCheck').checked = false

}
function validation(isSubmit) {
  if(isSubmit){
    globlesubmit=true
  }  
    let firstName = document.getElementById('First-name').value
    let lastName = document.getElementById('Last-name').value
    let email = document.getElementById('Email').value
    let password = document.getElementById('password').value
    let confirmpassword = document.getElementById('confirm-password').value
    let TandC = document.getElementById('invalidCheck').checked
    let error = false
    if(globlesubmit){

    if(firstName.length >=3){
        document.getElementById('First-name-invalid').style.display = 'none'
    }else{
      error = true
        document.getElementById('First-name-invalid').style.display = 'block'
    }
    if(lastName.length >=3){
      document.getElementById('Last-name-invalid').style.display = 'none'
  }else{
    error = true
      document.getElementById('Last-name-invalid').style.display = 'block'
  }
    if(
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") > 0 &&
      email.substr(email.lastIndexOf('.') +1) .length>=2){ 
      document.getElementById('Email-invalid').style.display = 'none'
    }else{
      error = true
      document.getElementById('Email-invalid').style.display = 'block'
    }

    
    if(password.match(/[a-z]/g) && 
       password.match(/[A-Z]/g) && 
       password.match(/[0-9]/g) && 
       password.match(/[^a-zA-Z\d]/g) && 
       password.length >= 8){
        document.getElementById('password-invalid').style.display = 'none'
    }else{
        error = true
        document.getElementById('password-invalid').style.display = 'block'
    }


    if(password !== confirmpassword){
        document.getElementById('confirm-password-invalid').style.display = 'block'
        error = true
    }else{
        document.getElementById('confirm-password-invalid').style.display = 'none'
    }


if(TandC){
    document.getElementById('tandc-invalid').style.display = 'none'
}else{
  error = true
  document.getElementById('tandc-invalid').style.display = 'block'
}
if(error === false){
  alert('Your details have been saved successfully!')
  reset()
}
}
    
}