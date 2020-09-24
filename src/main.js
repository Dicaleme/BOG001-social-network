
//import { initFirebase } from './firebase/firebase-init.js';
import { router } from './router/index.routes.js';


router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
});








