let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll(".dog-image")
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.transform = "scaleY(-1) scaleX(-1)"
}


let dogName = document.querySelectorAll(".dog-name")
for(let x = 0; x < dogName.length; x++){
    dogName[x].style.textAlign = "left"
}

let footer = document.querySelector(".footer")
footer.style.color = "green"

