const userNmae = document.getElementById('userNameInput')
const passwodintput = document.getElementById('passwordInput')

const logingbtnn = document.getElementById('loginbtn')

logingbtnn.addEventListener('click', function(){
    if(userNmae.value == 'admin' && passwodintput.value == 'admin123'){
        window.open('maintask.html')
      
    }
    else{
          alert('Invalid Login')
    }
})