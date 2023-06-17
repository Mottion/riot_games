import { useState } from 'react'
import { Header,OurStory,Portfolio,Contact,News,FooterComponent } from './App.js'

function App() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [imageIndex, setImageIndex] = useState(2);

  return (
    <>
      <Header>
        <img
          src="/headerBackgroundImg.jpg" 
          alt="headerbackgroundImg" 
          className='headerbackgroundImg'
        />
        <div className="wrapper">
          <nav>
            <a href="/">
              <img src="headerLogo.png" alt="headerLogo" className='headerLogo' />
            </a>
            <div 
              className={isMobileMenu? "mobileMenu desktopMenu": "desktopMenu"}
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            >
              <div className="exit">X</div>
              <a className='moveLink' href="#ourStory">NOSSA HISTORIA</a>
              <a className='moveLink' href="#portfolio">PORTIFÓLIO</a>
              <a className='moveLink' href="#contact">FALE CONOSCO</a>
              <a className='moveLink' href="#news">NOTICIAS</a>
              <button>SAIBA MAIS</button>
            </div>
            <i 
              className="fa-solid fa-bars menuIcon" 
              onClick={() => setIsMobileMenu(!isMobileMenu)}
            ></i>
          </nav>
          <div className="headerContent">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/99NiAOtOIgI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h2>Somos Rioters</h2>
            <p>Fundada em 2006, a Riot games é uma empresa que atual na area de jogos, musicas, E-Sports e muito mais! Mantendo como base a mesma visão que a vez ser tão grande quanto é hoje: ser a empresa que mais escuta e trabalha pelos seus jogadores.</p>
          </div>
        </div>
      </Header>
      <OurStory id='ourStory'>
          <h1>Nossa História</h1>
          <div className="storyContent">
            <div className="imageWrapper">
              <img className={imageIndex == 1 && "active"} src="Los_angeles.jpg" alt="estudio da riot" />
              <img className={imageIndex == 2 && "active"} src="Riot_games.png" alt="estudio da riot" />
              <img className={imageIndex == 3 && "active"} src="Marc_Merrill.jpg" alt="estudio da riot" />
              <img className={imageIndex == 4 && "active"} src="Brandon_Beck.jpg" alt="estudio da riot" />
              <img className={imageIndex == 5 && "active"} src="League_of_Legends.jpg" alt="estudio da riot" />
              <img className={imageIndex == 6 && "active"} src="Tencent.jpg" alt="estudio da riot" />
            </div>
            <p>
            Dado seu inicio na cidade de <span onClick={() => setImageIndex(1)}>Los Angeles - Califórnia</span>, a <span onClick={() => setImageIndex(2)}>Riot Games</span> foi fundada pela paixão de dois desenvolvedores: <span onClick={() => setImageIndex(3)}>Marc Merrill</span> e <span onClick={() => setImageIndex(4)}>Brandon Beck</span> no ano de 2006. Dado o inicio das atividades da empresa, seu primeiro jogo: <span onClick={() => setImageIndex(5)}>League of Legends</span> foi foi lançado de fato apenas no ano de 2008, mas apenas ganhou notoriedade de fato em meados de 2009. Em 2015 a empresa foi adquirida por outra desenvolvedora: <span onClick={() => setImageIndex(6)}>Tencent</span>, e deste então expande suas fronteiras com novos jogos, mantendo as mesmas visões, missões e valores: A melhor experiencia do jogador, excelência, humildade e prosperidade. Saindo assim de uma empresa de apenas 2 colaboradores, pra uma das maiores impresas da industria que conta com mais de 4500 funcionários.
            </p>
          </div>
      </OurStory>
      <Portfolio id='portfolio'>
        <h3>Nossos Jogos</h3>
        <div className="gamesWrapper">
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="Game1.jpg" alt="" />
            <a href="https://www.leagueoflegends.com/pt-br/">
              <img className='textImg' src="Game1Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="Game2.jpg" alt="" />
            <a href="https://playvalorant.com/pt-br/">
              <img className='textImg' src="Game2Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="Game3.jpg" alt="" />
            <a href="https://teamfighttactics.leagueoflegends.com/pt-br/">
              <img className='textImg' src="Game3Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="Game4.jpg" alt="" />
            <a href="https://wildrift.leagueoflegends.com/pt-br/">
              <img className='textImg' src="Game4Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="Game5.png" alt="" />
            <a href="https://playruneterra.com/pt-br/">
              <img className='textImg' src="Game5Text.png" alt="" />
            </a>
          </div>     
        </div>
        <h3>Esportes</h3>
        <div className="imgCard">
          <img className='backgroundImg' src="E_sportes.png" alt="" />
          <a href="https://lolesports.com/">
            <img className='textImg' src="E_sportesText.png" alt="" />
          </a>
        </div>
        <div className="imgCard">
          <img className='backgroundImg' src="E_sportes2.png" alt="" />
          <a href="https://valorantesports.com/">
            <img className='textImg' src="E_sportes2Text.png" alt="" />
          </a>
        </div>
        <h3>Entreterimento</h3>
        <div className="imgCard">
          <img className='backgroundImg' src="Entreteriment.png" alt="" />
          <a href="https://arcane.com/pt-br/">
            <img className='textImg' src="EntreterimentText.png" alt="" />
          </a>
        </div>
        <div className="imgCard">
          <img className='backgroundImg' src="Entreteriment2.png" alt="" />
          <a href="https://www.youtube.com/c/riotgamesmusic">
            <img className='textImg' src="Entreteriment2Text.png" alt="" />
          </a>
        </div>
        <h3>Riot Forge</h3>
        <div className="gamesWrapper">
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="riotForge1.jpg" alt="" />
            <a href="https://www.themageseeker.com/pt-br/">
              <img className='textImg' src="riotForge1Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="riotForge2.jpg" alt="" />
            <a href="https://www.ruinedking.com/pt-br/">
              <img className='textImg' src="riotForge2Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="riotForge3.jpg" alt="" />
            <a href="https://www.hextechmayhem.com/pt-br/">
              <img className='textImg' src="riotForge3Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="riotForge4.jpg" alt="" />
            <a href="https://convrgencegame.com/pt-br/">
              <img className='textImg' src="riotForge4Text.png" alt="" />
            </a>
          </div>        
          <div className="imgCard miniCard">
            <img className='backgroundImg' src="riotForge5.jpg" alt="" />
            <a href="https://www.songofnunu.com/">
              <img className='textImg' src="riotForge5Text.png" alt="" />
            </a>
          </div>     
        </div>
      </Portfolio>
      <Contact id='contact'>
        <img src="/contactBackgroundImg.jpg" alt="" />
        <div className="textWrapper">
          <h2>Contato</h2>
          <p>   Nosso diferencial é sempre escutar oque nossos jogadores pensam! E não só nossos jogadores, mas tambem toda a nossa equipe! Estamos sempre em contato com você através do Twitter, Discord e Youtube, enquanto escutamos oque você tem a dizer através de várias enquetes e pesquisas de satisfação. Apesar do grande fluxo de mensagens e centrais espalhadas pelo mundo, não ignoramos a importancia da comunicação para executar com competência e qualidade os objetivos das nossas equipes. Conforme crescemos e nos tornamos uma equipa ainda maior de Rioters, espere por novas formas mais intuitivas e de facil acesso para entrar em contato! Afinal sua opinião é muito importante para nós.</p>
        </div>
      </Contact>
      <News id='news'>
        <h2>Notícias</h2>
        <a href="https://www.riotgames.com/pt-br/not%C3%ADcias/celebrating-pride-community-artists-pt-br">
          <div className="newsCard">
              <img src="news1.png" alt="notica" />
              <div className="newsContent">
                <h4 href="" className="title">Comemorando o Mês do Orgulho com a comunidade. </h4>
                <p className="description">O Mês do Orgulho voltou! E a Riot ta com tudo para celebrar esse mês com você, com varios emotes, icones e titulos novos, exclusivos, e o melhor de tudo: gratuitos!</p>
              </div>
          </div>
        </a>
        <a href="https://www.riotgames.com/pt-br/not%C3%ADcias/discord-riot-games-emotes-pt-br">
          <div className="newsCard">
            <img src="news2.png" alt="notica" />
            <div className="newsContent">
              <h4 href="" className="title">Presente de aniversário do Discord: novos emotes. </h4>
              <p className="description">Tem presente chegando! Para comemorar o aniversario do Discord, a Riot Games está lançando novos emotes para o discord. Afinal, quanto mais melhor!</p>
            </div>
          </div>
        </a>
        <a href='https://www.riotgames.com/pt-br/not%C3%ADcias' className='moreInfos'>Mais Notícias</a>
      </News>
      <FooterComponent>
        <a href='https://discord.gg/runeterra-br'>Discord</a>
        <a href='https://www.facebook.com/RiotGames/'>Facebook</a>
        <a href='https://www.youtube.com/riotgames'>Youtube</a>
        <a href='https://twitter.com/riotgames'>Twitter</a>
        <p>© 2023 Riot Games, Inc. Todos os direitos reservados.</p>
      </FooterComponent>
    </>
  )
}

export default App
