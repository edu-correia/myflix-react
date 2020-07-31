import config from '../config'

const URL_CATEGORY = `${config.URL_BACKEND}/categorias?embed=videos`

function getAllWithVideos() {
    return fetch(URL_CATEGORY)
        .then(async (response) => {
            const res =  await response.json();
            return res;
        })
}

export default {
    getAllWithVideos,
};