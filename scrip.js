const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function() {
        document.querySelector('.adress-form').style.display = "none"
    })
    // xacnhan...................................

//slider...................................................
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')

let index = 0
rightbtn.addEventListener("click", function() {
    index = index + 1
    if (index > imgNuber.length - 1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})
leftbtn.addEventListener("click", function() {
        index = index - 1
        if (index <= 0) {
            index = imgNuber.length - 1
        }
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    })
    //..........slider2...........................................
const imgNuberli = document.querySelectorAll('.slider-content-left-bottom li')


imgNuberli.forEach(function(image, index) {
    image.addEventListener("click", function() {
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"

        image.classList.add("active")
    })
})

function removeactive() {
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
// ...............slider3.......................
function imgauto() {
    index = index + 1
    if (index > imgNuber.length - 1) {
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNuberli[index].classList.add("active")
        //console.log(index)
}
setInterval(imgauto, 4000)
    //...........................slider product......................//
const rightbtntow = document.querySelector('.fa-chevron-right-tow')
const leftbtntow = document.querySelector('.fa-chevron-left-tow')
const imgNubertow = document.querySelectorAll('.slider-product-one-content-items')
    // console.log(rightbtntow)
    // console.log(leftbtntow)
rightbtntow.addEventListener("click", function() {
    index = index + 1
    if (index > imgNubertow.length - 1) {
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
leftbtntow.addEventListener("click", function() {
    index = index - 1
    if (index <= 0) {
        index = imgNubertow.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})