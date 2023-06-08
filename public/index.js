const burger = document.querySelector('.hamburger')
const ul = document.createElement('ul')


burger.addEventListener('click', (event) => {

    event.preventDefault();
    const mainArticle = document.querySelector('.main-art')
    const pinkBurgerLine = document.getElementById('pink')
    const yellowBurgerLine = document.getElementById('yellow')
    const blueBurgerLine = document.getElementById('blue')
    const listItems = document.querySelectorAll('.list__items')

    const showHide = document.querySelector('.show-hide')
   // showHide.classList.add('hide-main')



    mainArticle.classList.toggle('hide-main')
    pinkBurgerLine.classList.toggle('hide-pink')
    blueBurgerLine.classList.toggle('rotate-blue')
    yellowBurgerLine.classList.toggle('rotate-yellow')




    listItems.forEach(ele => {
        ul.appendChild(ele)
       ele.classList.toggle('show')

    })




    showHide.appendChild(ul)
    showHide.classList.toggle('show')



})
