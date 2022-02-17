const headerImg = document.querySelector('header');
const title = document.querySelector('.title');
const subTitle = document.querySelector('.sub-title');
const authorImg = document.querySelector('.author-img-outer');
const names = document.getElementById('name');
const date = document.querySelector('.date');
const animatedBg = document.querySelectorAll('.animated-bg');
const animatedText = document.querySelectorAll('.animated-text');

setTimeout(() => {
    headerImg.innerHTML = '<img src="/img/kari-shea-1SAnrIxw5OY-unsplash.jpg">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    subTitle.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eius.';
    authorImg.innerHTML = '<img src="/img/front-page-team-1.jpg">';
    names.innerHTML = 'John Doe';
    date.innerHTML = 'Feb 17, 2022';

    animatedBg.forEach(element => {
        element.classList.remove('animated-bg');
    })

    animatedText.forEach(element => {
        element.classList.remove('animated-text');
    })
}, 2000)



