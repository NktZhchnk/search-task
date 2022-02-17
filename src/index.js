// const temp = document.querySelector('.temp')
// const ul = document.querySelector('.ul')
// const div = document.getElementById('div')
//
// import './weatherData'
// // const tempRounding = (data)=>{
// //     let tempFloor = temp.textContent = data.main.temp;
// //     Math.round(tempFloor)
//
// const getWeather = () => {
//     return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=47.49&lon=35.11&units=metric&exclude=minutely&appid=055482ee48aad4c8958c811cd83af106')
//         //https://api.openweathermap.org/data/2.5/weather?id=687676&units=metric&appid=055482ee48aad4c8958c811cd83af106
//         .then(function (resp) {
//             return resp.json()
//         })
//         .catch(function () {
//             console.log('FUCK ERROR')
//         })
//
// };
//
// const proceedWeather = async () => {
//     const data = await getWeather()
//     let tempFloor = data.daily[0].temp.day; // 1.345
//     let tempRounding = Math.round(tempFloor); // 1
//     let dayUp = data.daily.flat()  // {} - 8 {} {} {} {}\
//     let mas = [];
//     const dayTemp = () => {
//         for (let day of dayUp) {
//            day = day.temp.day
//             mas.push(day)
//             console.log(mas)
//         }
//     }
// dayTemp()
//     const createCard = (card) => {
//         const cardElement = document.createElement('div');
//         cardElement.className = 'card';
//         cardElement.innerHTML = `
//     <div>hello</div>`
//         return cardElement;
//     }
//
//
//     mas.forEach((card) => {
//         const cardElem = createCard(card)
//         div.appendChild(cardElem)
//         console.log(card)
//     })
//
//    // console.log(dayUp)
//     //console.log(day.temp.day)
//     // console.log(dayUp);
//     // console.log(data);
//
//     // document.querySelector('.nameCity').textContent = data.name;
//     // temp.textContent = tempRounding + '°';
// }
//
// proceedWeather()
//
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const textField = document.querySelector('.text')
let searchText = '';

textField.innerHTML = `
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
as opposed to using 'Content here, content here', making it look like readable English.
Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
Various versions have evolved over the years, sometimes by accident, sometimes on purpose
  `

let text2 = textField.innerText;
const searchTextFull = (text, search) => {
    let mas = [];
    let lastPosition = 0;
    while (true) {
        const textPosition = text.indexOf(search, lastPosition)
        if (textPosition === -1) break;
        lastPosition = textPosition + search.length
        mas.push(textPosition)
    }
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

