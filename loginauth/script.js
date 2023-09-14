const showPasswordCheckbox = document.getElementById('showPassword');
    showPasswordCheckbox.addEventListener('change', function () {
      if (showPasswordCheckbox.checked) {
        document.getElementById("password-signup").setAttribute("type","text");
      } else {
        document.getElementById("password-signup").setAttribute("type","password");
      }
    });
    const showPasswordCheckboxl = document.getElementById('showPasswordl');
    showPasswordCheckboxl.addEventListener('change', function () {
      if (showPasswordCheckboxl.checked) {
        document.getElementById("password-login").setAttribute("type","text");
      } else {
        document.getElementById("password-login").setAttribute("type","password");
      }
    });



let btn_sign = document.getElementById('submit-signup');
let good = [];

btn_sign.addEventListener("click", (e) => {
  e.preventDefault();
  let emails = document.getElementById("email-signup").value;
  let crpass_s = document.getElementById("password-signup").value;

if(emails !=='' && crpass_s !==''){

  const shiftValue = 3;
  const encryptedText = caesarCipher(crpass_s, shiftValue);
  
  let a = emails;
  let b = encryptedText;
  
  function areEmailPresent(arr, str) {
    return arr.some(childarr => childarr[0] === str);
  }

  function arePasswordPresent(arr, str) {
    return arr.some(childarr => childarr[1] === str);
  }
  
  let emailFound = areEmailPresent(good, a);
  let passwordFound = arePasswordPresent(good, b);
  
  if (emailFound && passwordFound) {
    console.log('present email and password');
    alert('Already have this Email and Password')
  } else if (emailFound) {
    console.log('present email');
    alert('Already have this Email')
  } else if (passwordFound) {
    console.log('present password');
    alert('Already have this password');
  } else {
    console.log('not present');
    good.push([emails,b]);
    alert('Registration Successfull ! Now you can log in with your id to access the page. Click below login link..')
  }
  console.log(good);
  document.getElementById("email-signup").value = '';
  document.getElementById("password-signup").value = '';
}
else{
  alert('Email and Password are required for signing up');
}

});

let btn_log = document.getElementById('submit-login');
btn_log.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('dfghj');
  let emaill = document.getElementById("email-login").value;
  let crpass_l = document.getElementById("password-login").value;

  if(emaill !==''&&crpass_l !==''){
  const shiftValues = 3;
  const encryptedTexts = caesarCipher(crpass_l, shiftValues);

  let as = emaill;
  let bs = encryptedTexts;
  console.log(good);

  function areEmailPresent(arr, str) {
    return arr.some(childarr => childarr[0] === str);
  }

  function arePasswordPresent(arr, str) {
    return arr.some(childarr => childarr[1] === str);
  }

  let emailFound = areEmailPresent(good, as);
  let passwordFound = arePasswordPresent(good, bs);

  if (emailFound && passwordFound) {
    console.log('present email and password');
    alert('Log In successfull');
    document.querySelectorAll('.signup-to').forEach(element => {
      element.style.display = 'none'; 
  })
  document.querySelectorAll('.signin-to').forEach(element => {
      element.style.display = 'none'; 
  })
  document.querySelectorAll('.page_access').forEach(element => {
    element.style.display = 'flex'; 
})
  }
  else {
    console.log('not present');
    alert('Invalid id ! If you do not have any account please sign up by clicking below signup link..')
  }
  
  document.getElementById("email-login").value='';
  document.getElementById("password-login").value='';
  }
  else{
    alert('Email and Password are required for signing in');
  }
})


document.addEventListener('DOMContentLoaded', function () {
    let btn_signup_login = document.querySelector('.have');
    let btn_login_signup = document.querySelector('.dont-have');

    btn_login_signup.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll('.signup-to').forEach(element => {
            element.style.display = 'flex'; 
        })
        document.querySelectorAll('.signin-to').forEach(element => {
            element.style.display = 'none'; 
        })
    })

    btn_signup_login.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll('.signup-to').forEach(element => {
            element.style.display = 'none'; 
        })
        document.querySelectorAll('.signin-to').forEach(element => {
            element.style.display = 'flex'; 
        })
    })
});
function caesarCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let charCode = text.charCodeAt(i);

    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const charCodeA = isUpperCase ? 65 : 97;
      char = String.fromCharCode(((charCode - charCodeA + shift) % 26) + charCodeA);
    } else if (/[0-9]/.test(char)) {
      char = String.fromCharCode(((charCode - 48 + shift) % 10) + 48);
    } else {
      
    }

    result += char;
  }

  return result;
}

document.addEventListener('DOMContentLoaded', function () {
  let ms = document.querySelector('#m-s');
  let ml = document.querySelector('#m-l');

  ms.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll('.signup-to').forEach(element => {
          element.style.display = 'flex'; 
      })
      document.querySelectorAll('.signin-to').forEach(element => {
          element.style.display = 'none'; 
      })
      document.querySelectorAll('.page_access').forEach(element => {
        element.style.display = 'none'; 
    })
  })

  ml.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll('.signup-to').forEach(element => {
          element.style.display = 'none'; 
      })
      document.querySelectorAll('.signin-to').forEach(element => {
          element.style.display = 'flex'; 
      })
      document.querySelectorAll('.page_access').forEach(element => {
        element.style.display = 'none'; 
    })
  })
});
    


  
  
