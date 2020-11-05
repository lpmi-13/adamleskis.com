import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = ({ showModal }) => {
    return (
        // Scroll to Top Button (Only visible on small and extra-small screen sizes)
        <div className={`scroll-top page-scroll ${showModal ? 'hide' : ''} visible-xs visible-sm`}>
            <a className="btn btn-primary" aria-label="scroll back to top" href="#page-top">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
         </div>
    )
}

export default ScrollToTop;