
export default () => {
    const community = `
    <header>
        <img class="logo-community" src="./images/Cofamily-logo-blue.png" alt="">
        <input id="toggler" class="toggler" type="checkbox">
        <label for="toggler" class="burger">
            <span><i class="fas fa-bars"></i></span>
        </label>
        <nav>
            <ul>
            <li><a href="#"><b>Profile</b></a></li>
            <li><a href="#"><b>Blog</b></a></li>
            <li><a id="logout"><b>Log Out</b></a></li>
            </ul>
        </nav>
    </header>
    <section class="community-bg-container">
        
        <div class="background"></div>

        <!-- Add Post -->
        <div class="post-container">

            <form id="post_form">

                <div class="public-post-container">
                    Today, we had a great outdoor experience with all the community kids.<br>
                    We went to the forest and did a project that involved creativity, nature and science.<br>
                    We learnt together about plants, the animals that live in there and share with other families this beautiful experience.<br>
                    Then we had a Pic Nic and enjoyed the afternoon with an art project where the kids made a painting and drawing gallery about everything they saw at the forest. 
                </div><br>

                <div class="post-title-container">
                    <input type="text" id="post_title" class="post-title" placeholder="Post Title" autofocus required>
                </div>

                <div class="post-description-container">
                    <textarea id="post_description"  class="post-description" placeholder="Post Description" required></textarea>
                </div>

                <button class="button-post-form" id="button_post_form">
                    Save
                </button>

            </form>
        </div>
        <!-- New Post List -->
        <div class="posts-container" id="posts_container"></div>
    </section>
    
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = community;
    
    return divElement;
    
};

