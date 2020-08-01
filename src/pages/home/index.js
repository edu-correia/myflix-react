import React, { useState, useEffect } from 'react';
import PageDefault from '../../Components/PageDefault'
import BannerMain from '../../Components/BannerMain'
import Carousel from '../../Components/Carousel';
import categoriasRepository from '../../repositories/categorias'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
  }, []);

  
  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.map((categoria, indice) => {
        console.log(categoria)
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Comece por aqui!"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      

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