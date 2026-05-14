import React from 'react';

type NavBarProps = {
    onNavigate: () => void;
    onToggle: () => void;
    show: boolean;
};

const NavBar = ({ onNavigate, onToggle, show }: NavBarProps) => {
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button
                  type="button"
                  onClick={onToggle}
                  className="navbar-toggle"
                  aria-controls="site-navigation"
                  aria-expanded={show}
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#page-top">Adam Leskis</a>
            </div>

            <div className={`collapse ${show ? 'in': ''} navbar-collapse`} id="site-navigation">
                <ul className="nav navbar-nav navbar-right">
                    <li className="page-scroll">
                        <a href="#technology" onClick={onNavigate}>Technology focused</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#language" onClick={onNavigate}>Language focused</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#math" onClick={onNavigate}>Math focused</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#miscellaneous" onClick={onNavigate}>Miscellaneous</a>
                    </li>
                    <li className="page-scroll">
                        <a href="#about" onClick={onNavigate}>About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;
