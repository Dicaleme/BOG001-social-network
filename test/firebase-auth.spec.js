
    import { openSession, googleLogin, closeSession, facebookLogin, register } from '../src/firebase/auth-controller.js';
    import { mocksdk } from '../_mocks_/firebase-mock.js';
    
    //De manera global todo lo que diga firebase sera reemplazado por nuestro mock: mocksdk
    global.firebase = mocksdk;

    describe('funcion register con email y password', () => {
        it('Deberia crearse un usuario con email y contraseña', (done) => {
            register('example@gmail.com', '123456').then((user) => {
            expect(user.email).toBe('example@gmail.com');
            done();
        });
        });
    });
    
    
    describe('funcion openSession con email y password', () => {
        it('Deberia loguearse un usuario con email y contraseña', (done) => {
            openSession('example@gmail.com', '123456').then((user) => {
            expect(user.email).toBe('example@gmail.com');
            done();
        });
        });
    });
    
    describe('funcion facebookLogin para iniciar sesion con facebook', () => {
        it('Deberia iniciar sesion con facebook', () => {
            facebookLogin().then((user) => {
            expect(user.emailVerified).toBe(true);
        });
        });
    });

    describe('funcion googleLogin para iniciar sesion con google', () => {
        it('Deberia iniciar sesion con Google', () => {
            googleLogin().then((user) => {
            expect(user.emailVerified).toBe(true);
        });
        });
    });
    
    describe('funcion closeSession para cerrar sesion', () => {
        it('Deberia cerrar sesion', () => {
            closeSession().then((user) => {
            expect(user.emailVerified).toBe(false);
        });
        });
    });
    


