export default () => {
    const signUp = `
    <section class="main-container2">        

        <form id="sign_up_form" class="sign-up-form">

            <div class="logo-container2">
                <img class="cofamily-logo-white" src="./images/Cofamily-logo-lightrose.png" alt="">
            </div>

            <div class="user-icon-container">
                <input type="text" name="user" placeholder="Name" id="signup_user_input" class ="signup-user-input" required/>
                <i class="fas fa-user"></i>
            </div>

            <div class="email-icon-container">
                <input type="email" name="email" placeholder="E-mail" id="signup_email_input" class ="signup-email-input" required/>
                <i class="fas fa-envelope"></i>
            </div>

            <div class="key-icon-container">
                <input type="password" name="password" placeholder="Password"  id="signup_password_input" class ="signup-password-input" required/>
                <i class="fas fa-key"></i>
            </div>

            <div class="key-icon-container">
                <input type="password" name="confirm-password" placeholder="Confirm Password"  id="signup_confirm_password_input" class ="signup-confirm-password-input" required/>
                <i class="fas fa-key"></i>
            </div>

            <br>            
            <button type="submit" id="signUp-button" class="signUp-button">Sign Up</button> <br>
            <h4 class="p-login">Do you have a CoFamily account already?<a class="a-login" href="#/LogIn"> <strong>Log In</strong></a></h4>
            <br>

        </form>
    </section>
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = signUp;

    return divElement;
};

