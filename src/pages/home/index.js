import React , { useEffect } from 'react';
import Menu from '../../Components/Menu'
import BannerMain from '../../Components/BannerMain'
import Footer from '../../Components/Footer'
import Carousel from '../../Components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div  style={{ background: "#141414" }} >
      <Menu />

      <BannerMain 
        videoTitle="João e o pé de feijão"
        videoDescription='Vídeo sobre um garoto que em vez de vender a vaca da família acaba a triocando por "feijões mágicos" e então sua mãe fica decepcionada com ele...'
        url="https://www.youtube.com/watch?v=vSURhTku0D4&t=2s"
      />

<Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </div>
  );
}

export default Home;
