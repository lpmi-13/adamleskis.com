import React from 'react';
import ModalFrame from './ModalFrame';

import devEdOpsWebP from '../img/talks/devedops.webp';
import jsOxfordWebP from '../img/talks/js-oxford.webp';
import srecon26WebP from '../img/talks/srecon26.webp';

type PresentationsModalProps = {
    modalId: string;
    onClose: () => void;
};

type Talk = {
    date: string;
    description: string;
    programmeURL?: string;
    thumbnailAltText: string;
    thumbnailWebP: string;
    title: string;
    venue: string;
    videoURL: string;
};

const talks: Talk[] = [
    {
        date: 'October 15, 2026',
        description: 'In this talk I show how I used AI to build three small tools for learning Linux performance, including a live telemetry view in Doom. The goal is to make hands-on learning easier without relying on AI to answer every question.',
        programmeURL: 'https://www.usenix.org/conference/srecon26emea/presentation/leskis',
        thumbnailAltText: 'YouTube preview card for Automating AI out of a Job: Vibing SRE Learning Materials at SREcon26 EMEA',
        thumbnailWebP: srecon26WebP,
        title: 'Automating AI out of a Job: Vibing SRE Learning Materials',
        venue: 'SREcon26 EMEA',
        videoURL: 'https://www.youtube.com/watch?v=SzEqq8gFBi0',
    },
    {
        date: 'March 19, 2024',
        description: "In this talk I apply the Three Ways of DevOps to learning DevOps itself. Most free resources are either input-based, like blogs, or hand you the complete solution, so learners rarely get to practise solving problems on their own. Faster flow means small, focused materials that don't need a big time commitment, faster feedback means automated checks while you're working through them, and continuous learning means sharing those materials as open-source repos and live web services for everyone to explore.",
        thumbnailAltText: 'YouTube preview card for DevEdOps, day 79 of 90DaysOfDevOps 2024',
        thumbnailWebP: devEdOpsWebP,
        title: 'DevEdOps',
        venue: '90DaysOfDevOps',
        videoURL: 'https://www.youtube.com/watch?v=5-Pa2odaGeg',
    },
    {
        date: 'May 18, 2016',
        description: 'In this talk I use the paradigm of cathedrals and bazaars to discuss the current shortcomings in language learning apps and how we can make them better. Essentially, what we currently have is a few smart things that try to do everything, whereas what we need going forward is a bunch of dumb things that each do one thing very well.',
        thumbnailAltText: 'YouTube preview card for How we can Engineer Language at JS Oxford',
        thumbnailWebP: jsOxfordWebP,
        title: 'Plenty of Free Parking for Ladas at the Bazaar: language learning apps as microservices',
        venue: 'JS Oxford',
        videoURL: 'https://www.youtube.com/watch?v=HkkX8_miRIc',
    },
];

const PresentationsModal = ({ modalId, onClose }: PresentationsModalProps) => {
    return (
        <ModalFrame modalId={modalId} onClose={onClose} title="Talks">
            <p className="project-description">This is the current list of presentations I've given related to web development, DevOps, and SRE education</p>
            <ul className="talk-list">
                {talks.map((talk) => (
                    <li key={talk.videoURL}>
                        <a className="talk-thumbnail" href={talk.videoURL}>
                            <img
                              src={talk.thumbnailWebP}
                              className="img-responsive"
                              alt={talk.thumbnailAltText}
                              width="1280"
                              height="720"
                              loading="lazy"
                              decoding="async"
                            />
                        </a>
                        <h3>{talk.title}</h3>
                        <p>{talk.description}</p>
                        <ul className="project-meta item-details">
                            <li>
                                <span className="meta-label">Date</span>
                                <strong>{talk.date}</strong>
                            </li>
                            <li>
                                <span className="meta-label">Venue</span>
                                <strong>{talk.venue}</strong>
                            </li>
                            <li className="web-link">
                                <span className="meta-label">Video</span>
                                <strong>
                                    <a className="meta-link" href={talk.videoURL}>{talk.videoURL}</a>
                                </strong>
                            </li>
                            {talk.programmeURL && (
                                <li className="web-link">
                                    <span className="meta-label">Programme</span>
                                    <strong>
                                        <a className="meta-link" href={talk.programmeURL}>{talk.programmeURL}</a>
                                    </strong>
                                </li>
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </ModalFrame>
    )
}

export default PresentationsModal;
