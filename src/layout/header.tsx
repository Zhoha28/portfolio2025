import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { menuList } from "@utils/fackData/menuList";

type Props = {
    isFixed: boolean;
}

const scrollPaths = ["about", "resume", "portfolio"]; // paths that are scroll targets on homepage

const Header = ({ isFixed }: Props) => {
    const location = useLocation();

    return (
        <header className={`main-header menu-absolute ${isFixed ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        <div className="logo-outer">
                            <div className="logo"></div>
                        </div>

                        <div className="nav-outer">
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo my-15"></div>
                                    <button
                                        type="button"
                                        className="navbar-toggle me-4"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".navbar-collapse"
                                    >
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {menuList.map(({ id, label, path }) => {
                                            // Special handling for Home menu item
                                            if (path === "home") {
                                                if (location.pathname === "/") {
                                                    // On homepage: scroll smoothly to "home" section
                                                    return (
                                                        <li key={id}>
                                                            <ScrollLink
                                                                className="nav-link-click"
                                                                to="home"
                                                                smooth={true}
                                                                duration={500}
                                                                offset={-70} // optional offset for fixed header
                                                            >
                                                                {label}
                                                            </ScrollLink>
                                                        </li>
                                                    );
                                                } else {
                                                    // On other routes: navigate to homepage "/"
                                                    return (
                                                        <li key={id}>
                                                            <Link className="nav-link-click" to="/">
                                                                {label}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            }

                                            // For other menu items that scroll within homepage
                                            if (scrollPaths.includes(path) && location.pathname === "/") {
                                                return (
                                                    <li key={id}>
                                                        <ScrollLink
                                                            className="nav-link-click"
                                                            to={path}
                                                            smooth={true}
                                                            duration={500}
                                                            offset={-70}
                                                        >
                                                            {label}
                                                        </ScrollLink>
                                                    </li>
                                                );
                                            }

                                            // Otherwise, navigate to route path
                                            return (
                                                <li key={id}>
                                                    <Link className="nav-link-click" to={`/${path}`}>
                                                        {label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
