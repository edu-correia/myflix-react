import React, { useState, useEffect } from 'react';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField'
import {Link} from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias'

function CadastroCategoria(){
    const [categorias, setCategorias] = useState([])
    
    const valoresIniciais = {
        nome: "",
        descricao: "",
        cor: "#000000"
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategorias([
            ...categorias,
            valores
        ])

        clearForm();
    } 

    const {handleChange, valores, clearForm } = useForm(valoresIniciais);

    useEffect(() => {
        categoriasRepository.getAllWithVideos()
            .then((CategoriasComVideos) => {
                setCategorias(CategoriasComVideos)
            })
            .catch(err => console.log(err.message))
    }, []);

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={handleSubmit}>

                <FormField 
                    label="Nome da Categoria"
                    value={valores.nome}
                    onChange={handleChange}
                    type="text"
                    name="nome"
                />

                <FormField 
                    label="Descrição da Categoria"
                    value={valores.descricao}
                    onChange={handleChange}
                    type="textarea"
                    name="descricao"
                />

                <FormField 
                    label="Cor"
                    value={valores.cor}
                    onChange={handleChange}
                    type="color"
                    name="cor"
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={indice}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;