import config from '../config'

const URL_CATEGORY = `${config.URL_BACKEND}/categorias`

function getAllWithVideos() {
    return fetch(`${URL_CATEGORY}?embed=videos`)
        .then(async (response) => {
            if(response.ok){
                const res =  await response.json();
                return res;
            }

            throw new Error('Erro ao conectar ao servidor');
        })
}

export default {
    getAllWithVideos,
};