import React from 'react';

import profileWebP from '../img/profile.webp';
import profilePng from '../img/profile.png';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <picture>
                          <source type="image/webp" srcSet={profileWebP}/>
                          <source type="image/png" srcSet={profilePng}/>
                          <img className="img-responsive" src={profilePng} alt="avatar"/>
                        </picture>
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