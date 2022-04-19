const baseURL = 'https://api.tvmaze.com/'

const endpoints = {
    shows: 'shows'
};

function getAllShows() {
    fetch(`${baseURL}${endpoints.shows}`, {
        method: 'GET'
    }).then((response) => {

        return response.json()
    }).then((data) => {
        const shows = document.querySelector('.shows')
        data.forEach(show => {
            const show_block = `
            <div class = "show_block">
                <div class="image">
                    <img src = "${show.image.medium}" alt=""/>
                </div>
                <h3>${show.name}</h3>
                <p>Рейтинг: ${show.rating.average}</p>
                <p>Язык: ${show.language}</p>
                <p>Жанр: ${show.genres}</p>
                <p>Длительность: ${show.runtime}</p>
            <button>
            <a href="${show.url}" 
            target="_blank"
            rel="noreferrer">
            More
            </a>
            </button>
            </div>
            `;
            shows.innerHTML += show_block;
            console.log(show);
        })
    })
}
getAllShows();
