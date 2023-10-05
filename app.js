const imageSlider = document.querySelector('.image-slider')
const leftArrow = document.querySelector('.arrow-left')
const leftSvg = document.querySelector('.arrow-left svg')
const rightArrow = document.querySelector('.arrow-right')
const rightSvg = document.querySelector('.arrow-right svg')
const heading = document.querySelector('.caption a')
const des = document.querySelector('.caption p')

const images = ['img1.jpg','img2.jpg','img3.jpg']
const headings = ['Ney York, USA','Tokyo, Japan','Rotterdam, Netherlands']
const desc = ['The land of opportunity','Land of the rising sun','Dutch']
const idKey = 'ID_STORAGE'

const helpTexts = document.querySelector('.helpText')
const help = document.querySelector('.help')
help.addEventListener('mouseover',()=>{
    helpTexts.classList.add('imageFade')
    helpTexts.removeAttribute('hidden')
})
help.addEventListener('mouseout', () => {
    helpTexts.setAttribute('hidden','')
})

document.addEventListener('DOMContentLoaded',()=>{
    let id = JSON.parse(localStorage.getItem(idKey)) || 0
    idchecker(id)

    function slide(id) {

        imageSlider.style.backgroundImage = `
        url(img/${images[id]})`
        imageSlider.classList.add('imageFade')

        setTimeout(() => {
            imageSlider.classList.remove('imageFade')
        }, 550)
        heading.textContent = headings[id]
        des.innerHTML = desc[id]
    }

    leftArrow.addEventListener('click', () => {
        --id
        if (id < 0) {
            id = images.length - 1
        }
        localStorage.setItem(idKey, JSON.stringify(id))
        idchecker(id)
    })
    leftArrow.addEventListener('mouseover',()=>{
        leftSvg.setAttribute('fill','white')
        leftArrow.style.backgroundColor = 'black'
    })
    leftArrow.addEventListener('mouseout', () => {
        leftSvg.setAttribute('fill', 'black')
        leftArrow.style.backgroundColor = 'white'
    })

    rightArrow.addEventListener('click', () => {
        ++id
        if (id >= images.length) {
            id = 0
        }
        localStorage.setItem(idKey, JSON.stringify(id))
        idchecker(id)
    })
    rightArrow.addEventListener('mouseover', () => {
        rightSvg.setAttribute('fill', 'white')
        rightArrow.style.backgroundColor = 'black'
    })
    rightArrow.addEventListener('mouseout', () => {
        rightSvg.setAttribute('fill', 'black')
        rightArrow.style.backgroundColor = 'white'})

    function idchecker(id) {
        if (id == 0) {
            heading.setAttribute('href', 'article/usa/usa.html')
        } else if(id == 1){
            heading.setAttribute('href', 'article/jpn/japan.html')
        }else{
            heading.setAttribute('href', 'article/neth/netherland.html')
        }
        slide(id)
    }
})
