import React from 'react';

type ScrollToTopProps = {
    showModal: string | null;
};

const ScrollToTop = ({ showModal }: ScrollToTopProps) => {
    return (
        <div className={`scroll-top page-scroll ${showModal ? 'hide' : ''} visible-xs visible-sm`}>
            <a className="btn btn-primary" aria-label="scroll back to top" href="#page-top">
                <span aria-hidden="true">^</span>
            </a>
         </div>
    )
}

export default ScrollToTop;
