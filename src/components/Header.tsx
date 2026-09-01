import React from 'react';

import profileWebP from '../img/profile.webp';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img
                          className="img-responsive"
                          src={profileWebP}
                          alt="Cartoon portrait of Adam Leskis wearing a yellow hard hat and striped tie"
                          width="256"
                          height="256"
                          decoding="async"
                          fetchPriority="high"
                        />
                        <div className="intro-text">
                            <h1 className="name">Adam Leskis</h1>
                            <hr className="star-light"/>
                            <span className="skills">Software Engineer & Learning Materials Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
