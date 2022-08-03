import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="left col l4 offset-l2 s12">
                    <li><img className="navbar-img" src="./img/img.png"/></li>
                    <li><a className="hover-underline"  href="!#">Catalog</a></li>
                    <li><a className="hover-underline" href="!#">Club of cosmetologists</a></li>
                    <li><a className="hover-underline" href="!#">Certificates</a></li>
                    <li><a className="hover-underline" href="!#">Shipping and payment</a></li>
                    <li><a className="hover-underline" href="!#">Contacts</a></li>
                    <li><a className="hover-underline" href="!#">Blog</a></li>
                </ul>
                <ul className="right col l4 offset-l2 s12">
                    <li><img className="icon-img"  src="./img/search-icon.png"/></li>
                    <li><img className="icon-img" src="./img/heart-icon.png"/></li>
                    <li><img className="icon-img" src="./img/shopping-icon.png"/></li>
                    <li><img className="icon-img" src="./img/user-icon.png"/></li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar
