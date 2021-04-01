const sliderElements = document.querySelectorAll('.slider-element')
const dataImg = document.querySelector('.data-img')
const dataHeader = document.querySelector('.data-header')
const dataContent = document.querySelector('.data-content')
const accordion = document.querySelectorAll('.accordion')
const arrow = document.querySelector('.arrow')
const input = document.querySelector('form')
const error = document.querySelector('.error')
const errorIcon = document.querySelector('.error-icon')
const div = document.querySelector('.input')
const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const responsive = document.querySelector('.responsive')
const header = document.querySelector('header')
const logo = document.querySelector('.logo')

const silderData = [{
        id: "Simple Bookmarking",
        img: 'illustration-features-tab-1.svg',
        header: 'Bookmark in one click',
        content: `Organize your bookmarks however you like.
         Our simple drag-and-drop interface gives you complete control over 
         how you manage your favourite sites.`
    },
    {
        id: 'Speedy Searching',
        img: 'illustration-features-tab-2.svg',
        header: 'Intelligent search',
        content: `Our powerful search feature will help you find saved sites in no time at all.
         No need to trawl through all of your bookmarks.`
    },
    {
        id: 'Easy Sharing',
        img: 'illustration-features-tab-3.svg',
        header: 'Share your bookmarks',
        content: `Easily share your bookmarks and collections with others. Create a shareable
    link that you can send at the click of a button.`
    }
]

//slider
sliderElements.forEach(slider => {
    slider.addEventListener('click', (e) => {
        if (!slider.classList.contains('active')) slider.classList.add('active')
        for (let i = 0; i < 3; i++) {
            if (slider.innerHTML !== sliderElements[i].innerHTML) {
                if (sliderElements[i].classList.contains('active')) {
                    sliderElements[i].classList.remove('active')
                }
            }
        }
        silderData.find(data => {
            if (data.id === e.target.innerHTML) {
                dataImg.src = `./images/${data.img}`
                dataHeader.innerHTML = data.header
                dataContent.innerHTML = data.content
            }
        })
    })
})

//accordion
accordion.forEach(acc => {
    acc.addEventListener('click', function() {
        var panel = acc.children[1]
        acc.children[0].children[0].classList.toggle('arrow-active')
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
})

//email validation
input.addEventListener('submit', (e) => {
    console.log(e.target.children[0].children[0].value)
    const inputValue = e.target.children[0].children[0].value
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputValue)) {
        error.style.display = 'block'
        errorIcon.style.display = 'block'
        div.classList.add('error-input')
        setTimeout(() => {
            error.style.display = 'none'
            errorIcon.style.display = 'none'
            div.classList.remove('error-input')
        }, 3000)
    }
    e.preventDefault()
})

//navbar
hamburger.addEventListener('click', () => {
    responsive.classList.add('show')
    header.classList.add('change-bg')
    document.body.style.overflow = 'hidden'
    hamburger.style.display = 'none'
    close.style.display = 'block'
    logo.classList.add('change-logo')
})

close.addEventListener('click', () => {
    responsive.classList.remove('show')
    header.classList.remove('change-bg')
    document.body.style.overflow = "visible"
    close.style.display = 'none'
    hamburger.style.display = 'block'
    logo.classList.remove('change-logo')
})

//check windows size for displaying hamburger menu
function check() {
    if (window.innerWidth > 900) hamburger.style.display = 'none'
    else hamburger.style.display = 'block'
}

window.onresize = check