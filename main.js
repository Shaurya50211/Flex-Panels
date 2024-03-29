const panels = document.querySelectorAll(".panel")

function toggleOpen() {
    this.classList.toggle('open')
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive))

function toggleOpenActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}