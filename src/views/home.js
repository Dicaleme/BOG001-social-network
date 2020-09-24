export default () => {
    const home = `
    <header>
        <h2 class="home-title">COFAMILY</h2>
        <input id="toggler" class="toggler" type="checkbox">
        <label for="toggler" class="burger">
            <span><i class="fas fa-bars"></i></span>
        </label>
        <nav>
            <ul>
            <li><a class="home-login-button" href="#/LogIn"><b>Log In</b></a></li>
            <li><a class="home-signup-button" href="#/SignUp"><b>Sign Up</b> </a></li>
            </ul>
        </nav>
    </header>
    <section class="home-bg-container">
        <div class="home-background"></div>
        <h1 class="home-motto">The Colombian</h1>
        <h1 class="home-motto2">Homeschooling Network</h1><br>
        <button type="button">WELCOME</button>
    </section>
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = home;
    
    return divElement;
};
        