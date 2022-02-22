const searchInitial = (input, textField, counterSearch) => {
    textField.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    counterSearch.innerHTML = 0
    const searchTextFull = (text, search) => {
        let mas = [];
        let lastPosition = 0;
        while (true) {
            const textPosition = text.indexOf(search, lastPosition)
            if (textPosition === -1) break;
            lastPosition = textPosition + search.length
            mas.push(textPosition)
        }
        counterSearch.innerHTML = mas.length
        return mas;
    };

    input.addEventListener('input', ()=>{
        const searchText = input.value
        const text = textField.innerText
        if (searchText.length === 0) {
            counterSearch.innerHTML = 0
            textField.innerHTML = text
            return
        }
        const mas = searchTextFull(text, searchText)
        console.log(mas)
        let position = 0;
        textField.innerHTML = '';
        mas.forEach((searchPosition) => {
            textField.innerHTML += text.slice(position, searchPosition)
                + '<span class="searched-fragment">' + text.slice(searchPosition, searchPosition + searchText.length) + '</span>'
            position = searchPosition + searchText.length;
        })
        textField.innerHTML += text.slice(position)
    })
}


searchInitial(document.querySelector('.search-input'), document.querySelector('.text'), document.querySelector('.search-counter'))

const droppedMenuRedact = (redact, textField, buttonsMenu, cancel, accept) => {
    const footer = document.querySelector('.footer')
    const input = document.querySelector('.textarea-redact')
    const styleRedact = () => {
        buttonsMenu.style.display = "block";
        redact.style.display = "none";
        footer.style.border = "none";
        textField.style.display = "none";
        input.style.display = "block"
    }
    let tempValue = input.value = textField.textContent
    redact.addEventListener('click', () => {
        styleRedact()
    })

    const hideButtons = () => {
        buttonsMenu.style.display = "none";
        redact.style.display = "block";
        textField.style.border = "none";
        textField.style.display = "block";
        input.style.display = "none";
        footer.style.border = "1px solid rgba(0, 0, 0, 0.4)";
    }
    cancel.addEventListener('click', () => {
        hideButtons()
        textField.innerText = textField.textContent
        input.value = textField.textContent
    })
    accept.addEventListener('click', () => {
        hideButtons()
        textField.innerText = document.querySelector('.textarea-redact').value
    })
}
droppedMenuRedact(document.querySelector('.btn-dropped-menu'), document.querySelector('.text'), document.querySelector('.buttons-menu'), document.querySelector('.btn-cancel'), document.querySelector('.btn-accept'));