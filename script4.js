const movieDB = {
    movies: [
        "Logan",
        "Titanic",
        "Bəyin oğurlanması",
        "Xaç atası",
        "Avatar"
    ]
}

const reklam = document.querySelectorAll('.promo_adv img');
const array = document.querySelector('.promo_genre');
const yeniKino = document.querySelector('.promo_interactive-list');
const promo_interactive = document.querySelector('.promo_interactive-item')
const delete_Icon = document.querySelector('.delete custom-cursor-on-hover')
const promo_interactiveL = document.querySelectorAll('.promo_interactive-list')

reklam.forEach(sekil => {
    sekil.remove();
});

array.innerHTML = 'Drama';

yeniKino.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((kino, i) => {
    yeniKino.innerHTML += `
            <li class="promo_interactive-item">${i + 1}.${kino}
                <div class="delete"></div>
            </li>

   `
});


if (onclick(delete_Icon)) {
    promo_interactiveL.style.remove()
}