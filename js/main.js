const title = document.getElementById('title')
const textColor = document.getElementById('text-color')
const bgColor = document.getElementById('bg-color')
const accentColor = document.getElementById('accent-color')

title.addEventListener('input', updatePage)
textColor.addEventListener('input', updatePage)
bgColor.addEventListener('input', updatePage)
accentColor.addEventListener('input', updatePage)

function updatePage(){
    document.querySelector('h2').innerText = title.value
    document.querySelector('body').style.color = textColor.value
    document.querySelector('body').style.backgroundColor = bgColor.value
    document.querySelector('section').style.borderColor = accentColor.value
    document.getElementById('text-value').innerText = textColor.value
    document.getElementById('bg-value').innerText = bgColor.value
    document.getElementById('accent-value').innerText = accentColor.value
}


function init(){
    updatePage()
}

init()