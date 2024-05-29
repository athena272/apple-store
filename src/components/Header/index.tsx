import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
    return (
        <Navbar container="md" color="dark" dark className="px-3">
            <Link href="/" passHref legacyBehavior>
                <a className="navbar-brand">
                    Início
                </a>
            </Link>
            <Nav className="flex-row" navbar>
                <li>
                    <Link href="/products" legacyBehavior>
                        <a className="nav-link me-4">
                            Produtos
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart" legacyBehavior>
                        <a className="nav-link">
                            Carrinho
                        </a>
                    </Link>
                </li>
            </Nav>
        </Navbar>
    )
}

export default Header