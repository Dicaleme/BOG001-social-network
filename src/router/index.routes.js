// Single Page Application SPA//

import home from '../views/home.js';
import login from '../views/login.js';
import signUp from '../views/signup.js';
import notFound from '../views/notfound.js';
import community from '../views/community.js';
import {afterPost} from '../firebase/crud.js';
import {register, openSession, closeSession, googleLogin, facebookLogin, userStatus, emailVerification} from '../firebase/auth.js';

const router = async (route) => {
  const content = document.getElementById('views');
  content.innerHTML = '';
  let start = '';
  
  switch (route) {
    case '':
        start = await home();
          await content.appendChild(start);
          await login();
          await signUp();             
          break;
      case '#/LogIn':
        start = await login();
          await content.appendChild(start);
          await openSession();
          await facebookLogin();
          await googleLogin();      
          break;      
      case '#/SignUp':
        start = await signUp();          
          await content.appendChild(start);
          await register();
          await emailVerification();           
          break;
      case '#/Community':
        start = await community();
          await content.appendChild(start);
          await userStatus();
          await afterPost();   
          await closeSession();
          break;
      default:
          await content.appendChild(notFound());
  }
};
export {router};

