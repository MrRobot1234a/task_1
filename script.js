window.addEventListener('DOMContentLoaded', (e) => {

    const login = document.querySelector('.login'),
          loginButton = login.querySelector('.login_button'),
          welcome = document.querySelector('.welcome'),
          welcomeButton = welcome.querySelector('.welcome_button');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const inputName = login.querySelector('.login_name input'),
              inputSurname = login.querySelector('.login_surname input');

        // console.log(inputName.value);
        if (inputName.value !== '' && inputSurname !== '') {
            login.style.display = 'none';
            welcome.style.display = 'block';
        }
    });

});