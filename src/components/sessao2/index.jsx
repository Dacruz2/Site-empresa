import './index.scss'


export default function Home(){

return(
<div className="container">
      <header className="header">
        <div className="logo">
          <img src="../assets/image/logo.png" alt="Logo" />
        </div>
        
        <div className="social">
          <img src="../assets/image/insta.png" alt="" />
          <img src="../assets/image/zap.png" alt="" />
        </div>
      </header>
      <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Encomendar</a></li>
          </ul>
        </nav>
      <main className="main">
        <div className="content">
          <img src="../assets/image/fundo.png" alt="Ilustração" />
        </div>
      </main>
    </div>



)



}