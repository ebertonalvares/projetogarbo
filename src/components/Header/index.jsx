import "./styles.css"
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    const location = useLocation()
    return (
        <header id="menu">
            <div className="header__logo">
                <a href="/">Logo</a>
            </div>
            <nav id="items-menu">
                <Link to={"/"} className="text-center">Home</Link>
                <Link to={{ pathname: location.pathname, hash: "#produtos" }} className="text-center">Categorias de Produtos</Link>
                <Link to={{ pathname: location.pathname, hash: "#sobre" }} className="text-center">Sobre Nós</Link>
                <Link to={{ pathname: location.pathname, hash: "#contato" }} className="text-center">Contato</Link>
            </nav>
            <div className="header__search">
                <input type="text" placeholder="Search..." />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="header__icons">
                <a href="/account">
                    <FontAwesomeIcon icon={faUser} />
                </a>
                <a href="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </a>
            </div>
        </header>

    )
}