import React, { useEffect, useState } from 'react';

// page structure components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import About from '../components/About';
import ScrollToTop from '../components/ScrollToTop';
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

import {techItemList, languageItemList, mathItemList, miscItemList } from '../itemLists'

const LANGUAGE = 'language';
const MATH = 'math';
const MISC = 'miscellaneous';
const TECHNOLOGY = 'tech';

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
        <main>

            <section id="technology">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Technology Education Focus</h2>
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
                                  type={TECHNOLOGY}
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
                            <h2>Language Education Focus</h2>
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
                                  type={LANGUAGE}
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
                            <h2>Math Education Focus</h2>
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
                                  type={MATH}
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
                            <h2>Miscellaneous</h2>
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
                                  type={MISC}
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
            <ScrollToTop showModal={showModal} />   
        </main>

        <Footer />


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