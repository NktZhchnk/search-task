const input = document.querySelector('.input')
const textField = document.querySelector('.text')
const counterSearch = document.querySelector('.counterSearch')
textField.innerHTML = `
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
as opposed to using 'Content here, content here', making it look like readable English.
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
Various versions have evolved over the years, sometimes by accident, sometimes on purpose
  `
counterSearch.innerHTML = ''
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



input.addEventListener('input', () => {
    const searchText = input.value
    const text = textField.innerText
    if(searchText.length === 0) {
        textField.innerHTML = text
        return
    }
    const mas = searchTextFull(text, searchText)
    console.log(mas)
    let position = 0;
    textField.innerHTML = '';
    mas.forEach((searchPosition)=>{
        textField.innerHTML += text.slice(position, searchPosition)
            + '<span class="span">' + text.slice(searchPosition, searchPosition + searchText.length) + '</span>'
        position = searchPosition + searchText.length;
    })
    textField.innerHTML += text.slice(position)
})

