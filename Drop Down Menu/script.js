const button = document.getElementById("button");
const content = document.getElementById("content");

button.addEventListener("click", function() {
    content.style.maxHeight = content.style.maxHeight === '0px' || content.style.maxHeight === '' ? '300px' : '0px';
})

window.addEventListener("click", (event) => {
    if (content.contains(event.target) && event.target != button) {
        if (content.style.maxHeight === '300px') {
            content.style.maxHeight = '0px';
        }
    }
})