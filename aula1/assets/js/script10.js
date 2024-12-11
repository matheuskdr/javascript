/*
function addList() {
    const ul = document.querySelector('ul');
    let newLi = document.createElement('li');

    newLi.innerText = input.value;
    ul.appendChild(newLi);
    input.value = '';
}

const input = document.querySelector('input');
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addList()
    }
});
*/


const input = document.querySelector('input');
const ul = document.querySelector('ul');

function addList(event) {
    if (event.key === 'Enter') {
        let newLi = document.createElement('li');

        newLi.innerText = input.value;
        ul.appendChild(newLi);
        input.value = '';
    }
};

input.addEventListener('keydown', addList);

