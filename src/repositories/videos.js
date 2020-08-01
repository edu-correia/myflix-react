import config from '../config'

const URL_CATEGORY = `${config.URL_BACKEND}/categorias`

function create(objetoDoVideo) {
    return fetch(`${URL_CATEGORY}?embed=videos`, {
        method: 'POST',
        header: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (response) => {
            if(response.ok){
                const res =  await response.json();
                return res;
            }

            throw new Error('Erro ao conectar ao servidor');
        })
}

export default {
    create,
};