import React from 'react';
import ModalFrame from './ModalFrame';

type PresentationsModalProps = {
    imageNameWebP: string;
    modalId: string;
    onClose: () => void;
};

const PresentationsModal = ({ imageNameWebP, modalId, onClose}: PresentationsModalProps) => {
    return (
        <ModalFrame modalId={modalId} onClose={onClose} title="Talks">
            <img
              src={imageNameWebP}
              className="img-responsive img-centered"
              alt="presentations"
              width="900"
              height="650"
              loading="lazy"
              decoding="async"
            />
            <p>This is the current list of presentations I've given related to web development</p>
            <ul className="list-inline item-details">
                <li><b>Plenty of Free Parking for Ladas at the Bazaar: language learning apps as microservices</b>
                </li><li>In this talk I use the paradigm of cathedrals and bazaars to discuss the current shortcomings in language learning apps and how we can make them better. Essentially, what we currently have is a few smart things that try to do everything, whereas what we need going forward is a bunch of dumb things that each do one thing very well.
                </li>
            </ul>
            <ul className="list-inline item-details">
                <li>Date:
                    <strong>May 18, 2016
                    </strong>
                </li>
                <li>Venue:
                    <strong>JS Oxford
                    </strong>
                </li>
                <li>Video:
                    <strong><a href="https://www.youtube.com/watch?v=HkkX8_miRIc">https://www.youtube.com/watch?v=HkkX8_miRIc</a>
                    </strong>
                </li>
            </ul>
        </ModalFrame>
    )
}

export default PresentationsModal;
