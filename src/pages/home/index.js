import React, { useState, useEffect } from 'react';
import PageDefault from '../../Components/PageDefault'
import BannerMain from '../../Components/BannerMain'
//import Carousel from '../../Components/Carousel';
import categoriasRepository from '../../repositories/categorias'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
        .then((categoriasComVideos) => {
            console.log(categoriasComVideos)
            setDadosIniciais(categoriasComVideos);
            console.log(dadosIniciais);
        })
        .catch(err => console.log(err.message))
  }, []);

  
  return (
    <PageDefault>

      

    </PageDefault>
  );
}

export default Home;


/*
<BannerMain
        videoTitle={dadosIniciais[0].videos[0].titulo}
        url={dadosIniciais[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
*/