const title = document.getElementById('title')
const textColor = document.getElementById('text-color')
const bgColor = document.getElementById('bg-color')
const accentColor = document.getElementById('accent-color')
const accentColor2 = document.getElementById('accent-color2')


title.addEventListener('input', updatePage)
textColor.addEventListener('input', updatePage)
bgColor.addEventListener('input', updatePage)
accentColor.addEventListener('input', updatePage)
accentColor2.addEventListener('input', updatePage)


function updatePage(){
    document.querySelector('h2').innerText = title.value
    document.querySelector('body').style.color = textColor.value
    document.querySelector('body').style.backgroundColor = bgColor.value
    document.querySelector('.accent').style.borderColor = accentColor.value
    document.querySelector('.accent2').style.borderColor = accentColor2.value
    document.getElementById('text-value').innerText = textColor.value
    document.getElementById('bg-value').innerText = bgColor.value
    document.getElementById('accent-value').innerText = accentColor.value
    document.getElementById('accent-value2').innerText = accentColor2.value

}


function init(){
    updatePage()
}

init()