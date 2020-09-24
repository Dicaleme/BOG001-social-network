
export default () => {
    const notFound = `    
    <section class="section-404">
        <div class="container-404">
            <h1 class="h1-not-found">404</h1> 
            <img class="image-bg" src="./images/kid.gif" alt="Worried running boy">
            <h3 class="h3-not-found">Looks like you're lost</h3>            
            <p>The page you are looking for is not available!</p>
            <a href="" class="go-home">Go to Home</a>
        </div>                
    </section>
    
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = notFound;

    return divElement;
};