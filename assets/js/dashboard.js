import Data from "./data.js"

const _titleFilter = document.getElementById('Title')
const _dateFilter = document.getElementById('Date')
const $containerItems = document.getElementById("Board")
const switchFilter = document.getElementById("Switch")
const btn__submit = document.getElementById('btn__submit')
const btn__update = document.getElementById('btn__update')
const combo = document.getElementById("SortBy");

switchFilter.addEventListener('click', () => selectfilter())
btn__submit.addEventListener('click', () => selectfilter())
btn__update.addEventListener('click', () => selectfilter())

const _data = Data.Search

function ordenarAsc(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
       return a[p_key] > b[p_key];
    });
}

function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}

function templateItems(data) {
  return `
    <div class="">
        <p>${data.Title}</p>
        <p>${data.Year}</p>
        <p>${data.Type}</p>
        <div class="container__poster"><img src=${data.Poster} class="board__poster" alt=""></div>
    </div>`
}

function createItems(items, container) {
  const itemsList = items.map((data) => {
    return templateItems(data);
  });
  //const HTMLString = productList
  container.innerHTML = itemsList;
}

function selectfilter() {
    const _title = textFilter(_data)
    const _date = dateFilter(_data) 
    console.log(_title.length)
    console.log(_date.length)
    if(_title.length > 0) return createItems(_title, $containerItems)
    if(_date.length > 0) return createItems(_date, $containerItems)
    var selected = combo.options[combo.selectedIndex].text;
    var _switch = switchFilter.checked

    _switch ? sortJSON(_data, selected, 'asc') : sortJSON(_data, selected, 'desc')

    createItems(_data, $containerItems)
}

function textFilter(dato) {
    const qwe = dato.filter(item => item.Title === _titleFilter.value)
    return qwe
}
function dateFilter(dato) {
    const qwe = dato.filter(item => item.Year === _dateFilter.value)
    return qwe
}

createItems(_data, $containerItems)