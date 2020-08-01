import React from 'react';
import PageDefault from '../../../Components/PageDefault';
import {Link, useHistory } from 'react-router-dom';
import FormField from '../../../Components/FormField'
import useForm from '../../../hooks/useForm';
import Button from '../../../Components/Button'
import videosRepository from '../../../repositories/videos'

function CadastroVideo(){
    const history = useHistory();
    const { handleChange , valores} = useForm({
        nome: '',
        url: '',
        categoria: ''
    });
    return(
        <PageDefault>
            <h1>Cadastro de Vídeos</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    videosRepository.create({
                        titulo: valores.nome,
                        url: valores.url,
                        categoriaId: 1,
                    })
                    .then(() => {
                        history.push('/');
                    })
                }}             
            >

            <FormField 
                label="Título do Vídeo"
                value={valores.nome}
                onChange={handleChange}
                type="text"
                name="nome"
            />

            <FormField 
                label="Url do Vídeo"
                value={valores.url}
                onChange={handleChange}
                type="text"
                name="url"
            />

            <FormField 
                label="Nome da Categoria"
                value={valores.categoria}
                onChange={handleChange}
                type="text"
                name="categoria"
            />

            <Button type="submit">
                Cadastrar
            </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;