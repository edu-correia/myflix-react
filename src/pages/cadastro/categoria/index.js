import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';
import {Link} from 'react-router-dom';

function CadastroCategoria(){
    const [categorias, setCategorias] = useState([])
    
    const valoresIniciais = {
        nome: "Nome da Categoria",
        descricao: "Descrição da categoria",
        cor: "#000000"
    }

    const [valores, setValores] = useState(valoresIniciais);

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategorias([
            ...categorias,
            valores
        ])

        setValores({
            nome: '',
            descricao: '',
            color: '#000'
        });
    } 

    const setValor = (chave, valor) => {
        setValores({
            ...valores,
            [chave]: valor
        });
    }

    const handleChange = (event) => {
        setValor(
            event.target.name, 
            event.target.value
        );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>
                        Nome da Categoria:
                        <input
                        type="text"
                        name="nome"
                        value={valores.nome}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Nome da Categoria:
                        <textarea
                        type="text"
                        name="descricao"
                        value={valores.descricao}
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                        <input
                        type="color"
                        name="cor"
                        value={valores.cor}
                        onChange={handleChange}
                        />
                    </label>
                </div>

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