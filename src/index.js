const nameValue = document.querySelector('.nameValue');
const phoneValue = document.querySelector('.phoneValue');
const priceValue = document.querySelector('.priceValue');
const btnInTable = document.querySelector('.btnInTable');
const searchInput = document.querySelector('.inputSearch')
const openSearch = document.querySelector('.open-search')
const divSearch = document.querySelector('.div-search')
btnInTable.addEventListener("click", () => {
    addTable();
});
let toggle = false;

let tableData = [];
let tableDataFiltered = [];
let autoId = 1;


const createRow = (data) => {
    const {phone, price, name, id} = data;
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${price}</td>
        <td class="fixBorder">
            <button class="button-remove">x</button>
        </td>
    `;
    const remove = row.querySelector('button');

    remove.addEventListener('click', () => {
        row.remove();
        tableData = tableData.filter((item) => item.id !== id);
    });
    return row;
}



const addTable = () => {
    const name = nameValue.value;
    const phone = phoneValue.value;
    const price = priceValue.value;

    nameValue.value = '';
    phoneValue.value = '';
    priceValue.value = '';

    createTableItem({name, phone, price});
};

const createTableItem = (data) => {
    const id = autoId++;
    tableData.push({...data, id});

    searchFn();
    render();
}

const lookInput = () => {
    searchFn()
    render()
}

let searchTimer = null

searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(lookInput, 500);
})


const searchFn = () => {
    const comparisonFn = (a, b) => b.toLowerCase().indexOf(a.toLowerCase()) !== -1;
    let data = searchInput.value;

    if (data.trim().length === 0) {
        tableDataFiltered = tableData;
        return;
    }

    tableDataFiltered = [];
    tableData.forEach((item) => {
        let check = false;
        ['name', 'phone'].forEach((key) => {
            if (comparisonFn(data, item[key])) {
                check = true
            }
        })
        if (check) {
            tableDataFiltered.push(item)
        }
    });
};

const render = () => {
    const table = document.querySelector('.table tbody');
    table.innerHTML = '';


    tableDataFiltered.forEach((item) => {
        table.appendChild(createRow(item));
    });
}

openSearch.addEventListener("click", () => {
    if (toggle === false) {
        searchInput.style.display = "block"
        toggle = true
        const backSearch = document.createElement("button");
        backSearch.innerHTML = `x`;
        backSearch.style.width = "25px";
        backSearch.style.height = "25px";
        backSearch.style.position = "relative";
        backSearch.style.left = "455px";
        backSearch.addEventListener('click', () => {
            openSearch.style.display = "block";
            searchInput.style.display = "none";
            backSearch.remove()
            toggle = false;
            searchInput.value = '';
            lookInput();
        });
        divSearch.appendChild(backSearch);
        openSearch.style.display = "none";
    } else {
        searchInput.style.display = "none";

    }
});
