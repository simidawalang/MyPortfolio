$(document).ready(function(){
	$('.preloader').fadeOut(1500);
});


window.addEventListener('scroll', () => {
    const about = document.querySelector('#about');
    const aboutHeightFromTop = about.getBoundingClientRect().top;

    const portfolio = document.querySelector('#portfolio');
    const portfolioHeightFromTop = portfolio.getBoundingClientRect().top;

    const scroll = window.scrollY;

    if (scroll >= aboutHeightFromTop - 200) {
        about.style.marginTop = "0";
        about.style.opacity = "1";
    }

    if (scroll >= portfolioHeightFromTop - 400) {
        portfolio.style.left = "0";
        portfolio.style.opacity = "1";
    }
});

// Service Worker and Caching

if(navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./sw_cached_pages.js')
            .then(() => {
                console.log(`Service worker registered`)
            })
            .catch((e) => {
                console.log(`Service Worker`)
            })
    });
}