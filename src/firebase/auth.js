const auth = firebase.auth();

// new user registration: https://firebase.google.com/docs/auth/web/manage-users//
export const register = () => {
    const signupForm = document.querySelector('#sign_up_form');

    signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailSignup = document.querySelector('#signup_email_input').value;
    const passwordSignup = document.querySelector('#signup_password_input').value;
    console.log(emailSignup, passwordSignup)
    
        auth.createUserWithEmailAndPassword(emailSignup, passwordSignup)
            .then(userCredential => {
                emailVerification()
            //clear the form
                signupForm.reset();
                console.log('sign up')
                window.location.hash = "#/LogIn"
                alert("An email has been sent with a link, please verify you acount")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert("The email address you are entering is already registered, please sign in or register with another email.")
        });emailSignup-passwordSignup.html
    });
}

// registered user log in:  https://firebase.google.com/docs/auth/web/manage-users// 
export const openSession = () => {
    const signInForm = document.querySelector('#login_form');

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailSignIn = document.querySelector('#login_email_input').value;
        const passwordSignIn = document.querySelector('#login_password_input').value;
        
        console.log(emailSignIn, passwordSignIn)

        auth.signInWithEmailAndPassword(emailSignIn, passwordSignIn)
            .then(userCredential => {
                
            //clear the form
                signInForm.reset();
                console.log('sign in')
                alert("Welcome to Cofamily")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

                console.log(errorCode)
                console.log(errorMessage)
                alert('Either email or password are incorrect, please verify and try again')
        });emailSignIn-passwordSignIn.html
    });
}

//google login: https://firebase.google.com/docs/auth/web/google-signin
export const googleLogin = () => {    
    const googleButton = document.querySelector("#login_google_button");

    googleButton.addEventListener('click', (e) => {    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
            .then(result => {
                console.log("google login")
        })
        .catch(error => {
            console.log(error)
            alert("Invalid Google acount")
        })
    });
}

//facebook login: https://firebase.google.com/docs/auth/web/facebook-login
export const facebookLogin = () => {    
    const facebookButton = document.querySelector("#login_facebook_button");

    facebookButton.addEventListener('click', (e) => {
        
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                console.log(result);
                console.log("facebook sign in");
        })
        .catch(err => {
            console.log(err);
            alert("Invalid Facebook acount")
        })
    });
}

// user validation status: https://firebase.google.com/docs/auth/web/start //
export const userStatus = () => {
    auth.onAuthStateChanged(function(user) {
        if (user) {
            console.log('User already exist')
            show(user);
          // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            console.log("---------------------");
            console.log(user.emailVerified) //true: exist // false: no exist
            console.log("---------------------");
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
            console.log('No user information found')
          // si el usuario no esta loguado no muestre el contenido y redirija a Home 
            window.location.hash = "#"
        }
    });
}
userStatus();


const show = (user) => {
    let users = user;    
    let views = document.getElementById('views');
    if(user.emailVerified){
        window.location.hash = "#/Community"
    }else {
        console.log("Don't show");
    }
}

// Auth by email: https://firebase.google.com/docs/auth/web/email-link-auth //
export const emailVerification = () => {
    let user = auth.currentUser;

    user.sendEmailVerification()
        .then(function(){
        console.log("Sending email...");
        }).catch(function(error){
            console.log(error);
        });
}

//log out: https://firebase.google.com/docs/auth/web/manage-users //
export const closeSession = () => {
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut()
            .then(() => {
            console.log('Log out')
            window.location.hash = '';
            alert("You are logged out")
        })
    })
}


