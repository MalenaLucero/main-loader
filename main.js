const words = ['Learn', 'Remember', 'Understand', 'Explore']

window.onload = () => {
    initialize();
}; 

const initialize = () => {
    const wordSlot = document.getElementById('wordSlot')
    let delayToAppear = 0;
    let delayToDisappear = 1000;
    const increase = delayToDisappear * 2;
    words.forEach((word, index) => {
        if(index === 0){
            wordSlot.classList.add('visible')
            wordSlot.innerText = word
            makeNonVisible(wordSlot, delayToDisappear)
        } else if(index === words.length - 1){
            delayToAppear += increase
            makeVisible(wordSlot, word, delayToAppear)
        } else{
            delayToAppear += increase
            makeVisible(wordSlot, word, delayToAppear)
            delayToDisappear += increase
            makeNonVisible(wordSlot, delayToDisappear)
        }
    })
}

const makeVisible = (element, word, delay) => {
    setTimeout(() => {
        element.classList.replace('non-visible', 'visible')
        element.innerText = word
    }, delay)
}

const makeNonVisible = (element, delay) => {
    setTimeout(() => {
        element.classList.replace('visible', 'non-visible')
    }, delay)
}

