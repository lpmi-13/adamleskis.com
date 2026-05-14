import React, { useEffect, useMemo, useState } from 'react';

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import About from '../components/About';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

import PortfolioItem from '../components/PortfolioItem';
import PortfolioModal from '../components/PortfolioModal';
import ProjectIdeasModal from '../components/ProjectIdeasModal';
import PresentationsModal from '../components/PresentationsModal';

import lightWebP from '../img/portfolio/light.webp';
import micWebP from '../img/portfolio/mic.webp';

import {
    techItemList,
    languageItemList,
    mathItemList,
    miscItemList,
    type PortfolioItemData,
} from '../itemLists';

const LANGUAGE = 'language' as const;
const MATH = 'math' as const;
const MISC = 'miscellaneous' as const;
const TECHNOLOGY = 'tech' as const;

type PortfolioType = typeof LANGUAGE | typeof MATH | typeof MISC | typeof TECHNOLOGY;
type SpecialType = 'presentations' | 'projectIdeas';

type PortfolioSection = {
    heading: string;
    id: string;
    items: PortfolioItemData[];
    type: PortfolioType;
};

type PortfolioEntry = PortfolioItemData & {
    itemNumber: number;
    modalId: string;
    type: PortfolioType;
};

type SpecialEntry = {
    altText?: string;
    imageNameWebP: string;
    modalId: string;
    projectName: string;
    type: SpecialType;
};

const getModalId = (type: PortfolioType, itemNumber: number) => `${type}Modal${itemNumber + 1}`;

const portfolioSections: PortfolioSection[] = [
    {
        heading: 'Technology Education Focus',
        id: 'technology',
        items: techItemList,
        type: TECHNOLOGY,
    },
    {
        heading: 'Language Education Focus',
        id: 'language',
        items: languageItemList,
        type: LANGUAGE,
    },
    {
        heading: 'Math Education Focus',
        id: 'math',
        items: mathItemList,
        type: MATH,
    },
    {
        heading: 'Miscellaneous',
        id: 'miscellaneous',
        items: miscItemList,
        type: MISC,
    },
];

const MainBody = () => {
    const [activeModalId, setActiveModalId] = useState<string | null>(null);
    const [showNavBar, setShowNavBar] = useState(false);

    const portfolioEntries = useMemo<PortfolioEntry[]>(() => (
        portfolioSections.flatMap((section) => (
            section.items.map((item, idx) => ({
                ...item,
                itemNumber: idx,
                modalId: getModalId(section.type, idx),
                type: section.type,
            }))
        ))
    ), []);

    const specialEntries = useMemo<SpecialEntry[]>(() => [
        {
            imageNameWebP: lightWebP,
            modalId: getModalId(MISC, miscItemList.length),
            projectName: 'project ideas',
            type: 'projectIdeas',
        },
        {
            altText: 'presentations',
            imageNameWebP: micWebP,
            modalId: getModalId(MISC, miscItemList.length + 1),
            projectName: 'presentations',
            type: 'presentations',
        },
    ], []);

    const activePortfolio = portfolioEntries.find(({ modalId }) => modalId === activeModalId);
    const activeSpecial = specialEntries.find(({ modalId }) => modalId === activeModalId);

    useEffect(() => {
        if (!activeModalId) {
            return undefined;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveModalId(null);
            }
        };

        document.body.classList.add('modal-open');
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.classList.remove('modal-open');
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeModalId]);

    const handleOpenModal = (modalId: string) => {
        setActiveModalId(modalId);
    };

    const handleCloseModal = () => {
        setActiveModalId(null);
    };

    const handleToggleNavBar = () => setShowNavBar((show) => !show);
    const handleNavigate = () => setShowNavBar(false);

    const renderPortfolioItem = (item: PortfolioEntry | SpecialEntry) => (
        <PortfolioItem
          key={item.modalId}
          onOpen={handleOpenModal}
          {...item}
        />
    );

    return (
    <div id="page-top" className="index">

        <NavBar
          onNavigate={handleNavigate}
          onToggle={handleToggleNavBar}
          show={showNavBar}
        />
        <Header />
        <main>

            {portfolioSections.map((section) => {
                const sectionEntries = portfolioEntries.filter(({ type }) => type === section.type);
                const sectionSpecialEntries = section.type === MISC ? specialEntries : [];

                return (
                    <section id={section.id} key={section.id}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2>{section.heading}</h2>
                                    <hr className="star-primary"/>
                                </div>
                            </div>
                            <div className="row">
                                {sectionEntries.map(renderPortfolioItem)}
                                {sectionSpecialEntries.map(renderPortfolioItem)}
                            </div>
                        </div>
                    </section>
                );
            })}
            <About />
            <ScrollToTop showModal={activeModalId} />
        </main>

        <Footer />

        {activePortfolio && (
            <PortfolioModal
              key={activePortfolio.modalId}
              onClose={handleCloseModal}
              {...activePortfolio}
            />
        )}
        {activeSpecial?.type === 'projectIdeas' && (
            <ProjectIdeasModal
              imageNameWebP={activeSpecial.imageNameWebP}
              modalId={activeSpecial.modalId}
              onClose={handleCloseModal}
            />
        )}
        {activeSpecial?.type === 'presentations' && (
            <PresentationsModal
              imageNameWebP={activeSpecial.imageNameWebP}
              modalId={activeSpecial.modalId}
              onClose={handleCloseModal}
            />
        )}
    </div>
    )
}

export default MainBody;
