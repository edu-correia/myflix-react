import { useState } from 'react';

function useForm(valoresIniciais){
    const [valores, setValores] = useState(valoresIniciais);

    const setValor = (chave, valor) => {
        setValores({
            ...valores,
            [chave]: valor
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValor(
            name, 
            value
        );
    }

    const clearForm = () => {
        setValores(valoresIniciais)
    }

    return {
        handleChange,
        valores,
        clearForm
    }
}

export default useForm;