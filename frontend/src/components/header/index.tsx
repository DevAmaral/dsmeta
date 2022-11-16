import logo from '../../assets/img/header.svg'
import './styles.css'

function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>Densenvolvido por <a href="https://www.instagram.com/sr.carlosamaral"/>Carlos Amaral</p>
        </div>
        </header>
    )
}

export default Header