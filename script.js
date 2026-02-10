
document.addEventListener('DOMContentLoaded', () => {
    const theBody = document.body;
    theBody.style.fontFamily = 'Arial, Helvetica, sans-serif';
    theBody.style.margin = '0';
    theBody.style.padding = '16px';
    theBody.style.backgroundColor = '#5674c3';

    
    const signupSection = document.getElementById('signup-section');
    signupSection.style.color = 'blue';
    signupSection.style.fontSize = '20px';
    signupSection.style.display = 'flex';
    signupSection.innerHTML = `<h2>Sign Up Form</h2>`

 const form = document.createElement('form');
 signupSection.appendChild(form);

 form.style.backgroundColor = '#8aa2b67f';
 form.style.padding = '20px';

 const usernameLabel = document.createElement('label');
 usernameLabel.textContent = 'Username: ';
 form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.required = true;
    form.appendChild(usernameInput);


     const userPasswordLabel = document.createElement('label');
 userPasswordLabel.textContent = 'Password: ';
 form.appendChild(userPasswordLabel);

        const userPassword = document.createElement('input');
    userPassword.type = 'text';
    userPassword.name = 'password';
    userPassword.required = true;
    form.appendChild(userPassword);

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.className = 'btn btn-primary btn-lg';
submitBtn.textContent = 'Submit';
form.appendChild(submitBtn);



});
