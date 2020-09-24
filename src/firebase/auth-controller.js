// funciones de autentificacion de firebase para testear
export const register = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const openSession = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const facebookLogin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const closeSession = () => firebase.auth().signOut();
