import React from 'react';
import Menu from '../../Components/Menu'
import BannerMain from '../../Components/BannerMain'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle="João e o pé de feijão"
        videoDescription='Vídeo sobre um garoto que em vez de vender a vaca da família acaba a triocando por "feijões mágicos" e então sua mãe fica decepcionada com ele...'
        url="https://www.youtube.com/watch?v=vSURhTku0D4&t=2s"
      />

      <Footer />

    </div>
  );
}

export default Home;
