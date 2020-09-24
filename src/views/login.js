export default () => {
    const login = `
    <section class="main-container"> 

        <form id="login_form" class="login-form">

            <div class="logo-container">
                <img class="cofamily-logo-blue" src="./images/Cofamily-logo-blue.png" alt="">
            </div>

            <div class="email-icon-container">
                <input type="email" id="login_email_input" class ="login-email-input" placeholder="E-mail" required/>
                <i class="fas fa-envelope"></i>
            </div>
            
            <div class="key-icon-container">
                <input type="password" id="login_password_input" class ="login-password-input" placeholder="Password" required/>
                <i class="fas fa-key"></i>
            </div>            
            <br>
            
            <button type="submit" id="login_button" class="login-button">Log In</button> <br>
            <a class="a-sign-up" href='#/ForgotPassword'> <strong>Forgot your password?</strong></a> 
            <br>
            
            <div id="login_facebook_button" class="login-facebook-button">
                <div class="facebook-icon-container">
                    <img class="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/240px-Facebook_logo_36x36.svg.png"/>
                </div>
                <p class="facebook-text">Log in with Facebook</p>
            </div> 
            <br>

            <div id="login_google_button" class="login-google-button">
                <div class="google-icon-container">
                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p class="google-text">Log in with Google</p>                
            </div> 
            <br>

            <h4 class="p-sing-up">Don't you have a CoFamily account yet?<a class="a-sing-up" href="#/SignUp"> <strong>Sign up</strong></a></h4><br>
        </form>
    </section>
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = login;

    return divElement;
};


