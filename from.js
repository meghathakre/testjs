function registration (){
    
    let password=document.querySelector('.password').value;
    

    

 if(password===""){
        alert("plese enter password");
        document.querySelector('.password').focus();
        return false;

    }

    else if(!(password.match (/[1234567890]/)  || password.match (/[qwertyuiopasdfghjklzxcvbnm]]/) ||  password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) ||
        password.match (/[!@#$%^&*_+=]/))){
        alert("plese  use strong password");
        document.querySelector('.password').focus();
return false;
    }

    
    
}


