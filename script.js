
document.addEventListener('DOMContentLoaded', () => {
    const theBody = document.body;
    theBody.style.fontFamily = 'Arial, Helvetica, sans-serif';
    theBody.style.margin = '0';
    theBody.style.padding = '16px';
    theBody.style.backgroundColor = '#5674c3';
    theBody.style.display = 'flex';
    theBody.style.flexDirection = 'column';
    theBody.style.alignItems = 'center';
    theBody.style.position = 'relative';

    const navBar = document.createElement('nav');
    navBar.style.width = '100%';
    navBar.style.backgroundColor = '#333';
    navBar.style.display = 'flex';
    navBar.style.justifyContent = 'center';
    navBar.style.padding = '10px 0';

    const navList = document.createElement('ul');   
    navList.style.listStyle = 'none';
    navList.style.display = 'flex';
    navList.style.gap = '20px';

    const navItems = ['Home', 'About', 'Dashboard','Contact'];  
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item;
        a.href = '#';
        a.style.color = 'white';
        a.style.textDecoration = 'none';    
        a.style.fontSize = '18px';
        li.appendChild(a);
        navList.appendChild(li);
    });

    navBar.appendChild(navList);
    theBody.prepend(navBar);

    let signedIn = false;



    
    // Create background overlay div with opacity
    const bgOverlay = document.createElement('div');
    bgOverlay.style.position = 'fixed';
    bgOverlay.style.top = '0';
    bgOverlay.style.left = '0';
    bgOverlay.style.width = '100%';
    bgOverlay.style.height = '100%';
    bgOverlay.style.backgroundImage = 'url("./images/mic.jpg")';
    bgOverlay.style.backgroundSize = 'cover';
    bgOverlay.style.backgroundPosition = 'center 30%';
    bgOverlay.style.backgroundRepeat = 'no-repeat';
    bgOverlay.style.opacity = '0.50';
    bgOverlay.style.zIndex = '-1';
    theBody.prepend(bgOverlay);
    theBody.style.opacity = '1.';
    
    
    const signupSection = document.getElementById('signup-section');
    signupSection.style.color = 'blue';
    signupSection.style.fontSize = '20px';
    signupSection.style.display = 'flex';
    signupSection.style.flexDirection = 'column';
    signupSection.style.alignItems = 'center';
    signupSection.style.justifyContent = 'center';
    signupSection.style.marginTop = '10%';


 const form = document.createElement('form');
 signupSection.appendChild(form);

 form.style.backgroundColor = '#8aa2b67f';
 form.style.padding = '20px';
 form.style.display = 'flex';
 form.style.flexDirection = 'row';
 form.style.gap = '15px';
 form.style.alignItems = 'center';
 form.style.flexWrap = 'wrap';
 form.style.borderRadius = '8px';

 const usernameLabel = document.createElement('label');
 usernameLabel.textContent = 'Username: ';
 form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.required = true;
    usernameInput.pattern = '[A-Za-z0-9]+';
    usernameInput.title = 'Username must contain only letters and numbers';
    form.appendChild(usernameInput);


     const userPasswordLabel = document.createElement('label');
 userPasswordLabel.textContent = 'Password: ';
 form.appendChild(userPasswordLabel);

        const userPassword = document.createElement('input');
    userPassword.type = 'password';
    userPassword.name = 'password';
    userPassword.required = true;
    userPassword.pattern = '(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+';
    userPassword.title = 'Password must contain both letters and numbers';
    form.appendChild(userPassword);

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.className = 'btn btn-primary btn-lg';
submitBtn.textContent = 'Submit';
form.appendChild(submitBtn);

// Form validation on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usernameValue = usernameInput.value;
    const passwordValue = userPassword.value;
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    const hasLetterAndNumber = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+$/;
    
    if (!alphanumericRegex.test(usernameValue)) {
        alert('Username must contain only letters and numbers');
        return;
    }
    
    if (!hasLetterAndNumber.test(passwordValue)) {
        alert('Password must contain both letters and numbers');
        return;
    }
});

});
