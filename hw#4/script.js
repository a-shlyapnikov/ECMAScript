const url = 'https://jsonplaceholder.typicode.com/users';
const usersList = document.querySelector('.user-container');
const removeBtn = document.querySelector('.remove-btn');

async function getData(url) {
    usersList.innerHTML = 'Loading...';
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('fetching error');
    }

}
const users = await getData(url);

function render(users) {
    if (!users.length) {
        usersList.innerHTML = 'Failed to load:('
    } else {
        usersList.innerHTML = users.map(toHTML).join('');
    }
}


render(users)

usersList.addEventListener('click', function (e) {
    if (e.target.dataset.index) {
        const index = parseInt(e.target.dataset.index);
        users.splice(index, 1);
        render(users);
    }

});

function toHTML(user) {
    return `
        <li class ="user">
            <span class="user__name">${user.name}</span>
            <button data-index="${users.indexOf(user)}"class="remove-btn">Удалить пользователья</button>
        </li>
    `
}