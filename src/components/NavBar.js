import React from 'react';

const NavBar = ({ onClick, show }) => {
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header page-scroll">
                <button type="button" onClick={onClick} className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#page-top">Adam Leskis</a>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className={`collapse ${show ? 'in': ''} navbar-collapse`} id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="page-scroll" onClick={onClick}>
                        <a href="#technology">Technology focused</a>
                    </li>
                    <li className="page-scroll" onClick={onClick}>
                        <a href="#language">Language focused</a>
                    </li>
                    <li className="page-scroll" onClick={onClick}>
                        <a href="#math">Math focused</a>
                    </li>
                    <li className="page-scroll" onClick={onClick}>
                        <a href="#miscellaneous">Miscellaneous</a>
                    </li>
                    <li className="page-scroll" onClick={onClick}>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
    </nav>
    )
}

export default NavBar;