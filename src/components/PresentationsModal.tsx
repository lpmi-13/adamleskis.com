import React from 'react';
import ModalFrame from './ModalFrame';

type PresentationsModalProps = {
    altText: string;
    imageNameWebP: string;
    modalId: string;
    onClose: () => void;
};

const PresentationsModal = ({ altText, imageNameWebP, modalId, onClose}: PresentationsModalProps) => {
    return (
        <ModalFrame modalId={modalId} onClose={onClose} title="Talks">
            <img
              src={imageNameWebP}
              className="img-responsive img-centered"
              alt={altText}
              width="900"
              height="650"
              loading="lazy"
              decoding="async"
            />
            <p className="project-description">This is the current list of presentations I've given related to web development</p>
            <ul className="detail-list">
                <li>
                    <strong>Plenty of Free Parking for Ladas at the Bazaar: language learning apps as microservices</strong>
                    In this talk I use the paradigm of cathedrals and bazaars to discuss the current shortcomings in language learning apps and how we can make them better. Essentially, what we currently have is a few smart things that try to do everything, whereas what we need going forward is a bunch of dumb things that each do one thing very well.
                </li>
            </ul>
            <ul className="project-meta item-details">
                <li>
                    <span className="meta-label">Date</span>
                    <strong>May 18, 2016</strong>
                </li>
                <li>
                    <span className="meta-label">Venue</span>
                    <strong>JS Oxford</strong>
                </li>
                <li className="web-link">
                    <span className="meta-label">Video</span>
                    <strong>
                        <a className="meta-link" href="https://www.youtube.com/watch?v=HkkX8_miRIc">https://www.youtube.com/watch?v=HkkX8_miRIc</a>
                    </strong>
                </li>
            </ul>
        </ModalFrame>
    )
}

export default PresentationsModal;
