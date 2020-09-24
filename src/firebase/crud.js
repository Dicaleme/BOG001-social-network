// CRUD: created, read, update and delete

const dataBase = firebase.firestore();

// guarda los post con title y description y los almacena en la base de datos de firebase 
export const savePost = (title, description) =>
    // crea una coleccion en la base de datos llamada posts en firebase
    dataBase.collection("posts").doc().set({
        title,
        description,
        like
    });

let like = []; 

// obtiene los post guardados en la base de datos 
export const getPosts = () => dataBase.collection("posts").get();

// llama la coleccion con el contenido que exista en el momento
export const existingPosts = (callback) => dataBase.collection("posts").onSnapshot(callback);

// elimina el contenido almacenado // ejemplo de id = Z9qrt0B2RNLspXOfkch8 desde firebase
export const deletePost = (id) => dataBase.collection("posts").doc(id).delete();

// trae el id del post desde firebase
export const getNewPost = (id) => dataBase.collection("posts").doc(id).get();

// edita y actualiza los post dependiendo de su id 
export const updatePost = (id, updatedPost) => dataBase.collection('posts').doc(id).update(updatedPost);

export const afterPost = () => {
    //Llama a los Id de community.js
    const postForm = document.getElementById("post_form");
    const postsContainer = document.getElementById("posts_container");
    
    // editStatus inicia en false para que no permita editarlo 
    // id vacio para posteriormente darle un valor
    let editStatus = false;
    let id = '';

        existingPosts((querySnapshot) => {
            postsContainer.innerHTML = "";
    
            querySnapshot.forEach((doc) => {
                const post = doc.data();
    
                postsContainer.innerHTML += `
                <div class="new-post-container">
                    <h3 class="">${post.title}</h3>
                    <p>${post.description}</p>
                    <div>
                        <button class="button-delete" data-id="${doc.id}"> Delete</button>
                        <button class="button-edit" data-id="${doc.id}"> Edit</button>
                        <span class="button-likes" id="like-${doc.id}" red><i class="fas fa-heart"></i></span>
                        <span id="numero-${doc.id}" class="numeros-megusta">${post.like.length}</span> 
                    </div>
                </div>`;
            });

            querySnapshot.forEach((doc) => {              
                // <!----- Función likes Post  ------>
                document.getElementById(`like-${doc.id}`).addEventListener('click', () => postLike(doc.id));    
            });

        // elimina el post por el id 
        const buttonsDelete = postsContainer.querySelectorAll(".button-delete");
            buttonsDelete.forEach((button) =>
                button.addEventListener("click", async (e) => {
                    console.log(e.target.dataset.id);
                    try {
                    if (confirm('Do you want to delete this post?')){
                    await deletePost(e.target.dataset.id);
                    }
                    } catch (error) {
                    console.log(error);
                    }
                })
            );
    
        // edita el post por el id     
        const buttonsEdit = postsContainer.querySelectorAll(".button-edit");
            buttonsEdit.forEach((button) => {
                button.addEventListener("click", async (e) => {
                try {
                const doc = await getNewPost(e.target.dataset.id);
                const post = doc.data();
                postForm["post_title"].value = post.title;
                postForm["post_description"].value = post.description;
    
                editStatus = true;
                id = doc.id;
                postForm["button_post_form"].innerText = "Update";
    
                } catch (error) {
                console.log(error);
                }
                });
            });
        });
    
        
    
        // resetea para poder actualizar despues de editar 
        postForm.addEventListener("submit", async (e) => {
            e.preventDefault();
        
            const title = postForm["post_title"];
            const description = postForm["post_description"];
        
            try {
                if (!editStatus) {
                await savePost(title.value, description.value);
                } else {
                await updatePost(id, {
                    title: title.value,
                    description: description.value,
                })
                // editStatus termina en false para que no permita editarlo nuevamente
                editStatus = false;
                // id vacio para limpiar el contenido
                id = '';
                like = postLike;
                postForm['button_post_form'].innerText = 'Save';
                }
        
                postForm.reset();
                title.focus();
            } catch (error) {
                console.log(error);
            }
        });

        const postLike = (id) => {
            const user = auth.currentUser;
        
            // de la collection post traeme el documento con el ID, "id"
            dataBase.collection('post').doc(id).get().then((response) => {
            const post = response.data();
        
            if (post.like == null || post.like == '') {
                post.like = [];
                // eslint-disable-next-line no-console
                console.log('empty like');
            }
        
            if (post.like.includes(user.uid)) {
                for (let i = 0; i < post.like.length; i++) {
                if (post.like[i] === user.uid) { // verifica si ya el usuario está en el array
                    post.like.splice(i, 1); // sentencia para eliminar un elemento de un array
        
                    dataBase.collection('post').doc(id).update({ // para actualizar el array
                    like: post.like,
                    });
                }
                }
            } else {
                post.like.push(user.uid);
                dataBase.collection('post').doc(id).update({
                like: post.like,
                });
            }
            
            document.getElementById(`numero-${doc.id}`).value = post.like.length;
            })
            .catch(() => {
        
            });
        };
    } 
    
    

