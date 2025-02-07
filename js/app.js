












let data = ["Développeur web","Développeur d'applications","Web Designer","Graphiste"]

let span = document.getElementById("animate")
let root = document.querySelector(':root')
let initialDataIndex = 0
let writtingTime = 100
let delayTime = 2500
let clearingTime = 80
let caretBleaking = 700

writeText(initialDataIndex)

function writeText(index){
    let i = 0
    let interval = setInterval(() => {
        span.innerHTML += data[index][i]
        if (i == data[index].length - 1) {
            i = 0
            clearInterval(interval)
            setTimeout(clearText(), delayTime)
        } else {
            i++
        }
    }, writtingTime);
}

let dataIndex = initialDataIndex+1
function clearText(){
    let interval = setInterval(() => {
        let spanData = span.innerHTML
        if (spanData !== '') {
            span.innerHTML = spanData.substring(0, spanData.length-1)
        } else {
            clearInterval(interval)
            writeText(dataIndex);
            (dataIndex == data.length-1) ? dataIndex = 0 : dataIndex++
        }
    }, clearingTime);
}

setInterval(() => {
    let prop = getComputedStyle(root).getPropertyValue('--affiche')

    if (prop == 'none') {
        root.style.setProperty('--affiche', 'inline-block')
    } else {
        root.style.setProperty('--affiche', 'none')
    }
}, caretBleaking);