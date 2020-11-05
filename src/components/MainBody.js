import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// page structure components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

// custom components
import PortfolioItem from '../components/PortfolioItem';
import PortfolioModal from '../components/PortfolioModal';
import ProjectIdeas from '../components/ProjectIdeas';
import ProjectIdeasModal from '../components/ProjectIdeasModal';
import Presentations from '../components/Presentations';
import PresentationsModal from '../components/PresentationsModal';

import lightPng from '../img/portfolio/light.png';
import lightWebP from '../img/portfolio/light.webp';
import micPng from '../img/portfolio/mic.png';
import micWebP from '../img/portfolio/mic.webp';

import {techItemList, languageItemList, mathItemList, miscItemList, MISC } from '../itemLists'

const MainBody = () => {

    const [showModal, setShowModal] = useState();
    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
    }, [showModal]);

    const handleOpenModal = (event) => {
        setShowModal(event);
    };

    const handleCloseModal = () => {
        setShowModal(null);
    };

    const handleToggleModal = () => setShowNavBar(!showNavBar)

    return (
        
    <div id="page-top" className="index">

        <NavBar onClick={handleToggleModal} show={showNavBar} /> 
        <Header />

        {/* <!-- Portfolio Grid Section --> */}
        <section id="technology">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Technology Education Focus</h3>
                        <hr className="star-primary"/>
                    </div>
                </div>
                <div className="row">
                    {techItemList.map((item, idx) => {
                        const { projectName } = item;
                        return (
                            <PortfolioItem
                              itemNumber={idx}
                              key={projectName}
                              onClick={handleOpenModal}
                              {...item}
                            />
                        )
                    })}
                </div>
            </div>
        </section>


        <section id="language">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Language Education Focus</h3>
                        <hr className="star-primary"/>
                    </div>
                </div>
                <div className="row">
                    {languageItemList.map((item, idx) => {
                        const { projectName } = item;
                        return (
                            <PortfolioItem
                              key={projectName}
                              itemNumber={idx}
                              onClick={handleOpenModal}
                              {...item}
                            />
                        )
                    })}
                </div>
            </div>
        </section>

        <section id="math">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Math Education Focus</h3>
                        <hr className="star-primary"/>
                    </div>
                </div>
                <div className="row">
                    {mathItemList.map((item, idx) => {
                        const { projectName } = item;
                        return (
                            <PortfolioItem
                              key={projectName}
                              itemNumber={idx}
                              onClick={handleOpenModal}
                              {...item}
                            />
                        )
                    })}
                </div>
            </div>
        </section>

        <section id="miscellaneous">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Miscellaneous</h3>
                        <hr className="star-primary"/>
                    </div>
                </div>
                <div className="row">
                    {miscItemList.map((item, idx) => {
                        const { projectName } = item;
                        return (
                            <PortfolioItem
                              key={projectName}
                              itemNumber={idx}
                              onClick={handleOpenModal}
                              {...item}
                            />
                        )
                    })}
                    <ProjectIdeas
                      itemNumber={miscItemList.length + 1}
                      onClick={handleOpenModal}
                      type={MISC}
                      imageNameWebP={lightWebP}
                      imageNamePng={lightPng}
                    />

                    <Presentations
                      itemNumber={miscItemList.length + 2}
                      onClick={handleOpenModal}
                      type={MISC}
                      imageNameWebP={micWebP}
                      imageNamePng={micPng}
                    />
                </div>
            </div>
        </section>

        <About />
        <Footer />

        {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) --> */}
        <div className={`scroll-top page-scroll ${showModal ? 'hide' : ''} visible-xs visible-sm`}>
            <a className="btn btn-primary" aria-label="scroll back to top" href="#page-top">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </div>

        {/* <!-- Portfolio Modals --> */}

        {techItemList.map((item, idx) => {
            const { projectName } = item;
            return (
                <PortfolioModal
                  key={projectName}
                  onClick={handleCloseModal}
                  itemNumber={idx}
                  show={showModal}
                  {...item}
                  />
            )
        })}

        {languageItemList.map((item, idx) => {
            const { projectName } = item;
            return (
                <PortfolioModal
                  key={projectName}
                  onClick={handleCloseModal}
                  itemNumber={idx}
                  show={showModal}
                  {...item}
                  />
            )
        })}
    

        {mathItemList.map((item, idx) => {
            const { projectName } = item;
            return (
                <PortfolioModal
                  key={projectName}
                  onClick={handleCloseModal}
                  itemNumber={idx}
                  show={showModal}
                  {...item}
                  />
            )
        })}

        {miscItemList.map((item, idx) => {
            const { projectName } = item;
            return (
                <PortfolioModal
                  key={projectName}
                  onClick={handleCloseModal}
                  itemNumber={idx}
                  show={showModal}
                  {...item}
                  />
            )
        })}
        <ProjectIdeasModal
          onClick={handleCloseModal}
          itemNumber={miscItemList.length + 1}
          imageNamePng={lightPng}
          imageNameWebP={lightWebP}
          show={showModal}
          type={MISC}
        />
        <PresentationsModal
            onClick={handleCloseModal}
            itemNumber={miscItemList.length + 2}
            imageNamePng={micPng}
            imageNameWebP={micWebP}
            show={showModal}
            type={MISC}
        />
    </div>
    )
}

export default MainBody;