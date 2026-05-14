import React from 'react';

export type PortfolioItemProps = {
    altText?: string;
    imageNameWebP: string;
    modalId: string;
    onOpen: (modalId: string) => void;
    projectName: string;
};

const PortfolioItem = ({
    altText,
    imageNameWebP,
    modalId,
    onOpen,
    projectName,
}: PortfolioItemProps) => {
    return (
        <div className="col-sm-4 portfolio-item">
            <button
              type="button"
              className="portfolio-link"
              onClick={() => onOpen(modalId)}
              aria-haspopup="dialog"
              aria-controls={modalId}
              aria-label={`Open ${projectName} details`}
            >
                <span className="caption" aria-hidden="true">
                    <span className="caption-content">
                      <span className="portfolio-icon">+</span>
                    </span>
                </span>
                <img
                  src={imageNameWebP}
                  className="img-responsive"
                  alt={altText || projectName}
                  width="900"
                  height="650"
                  loading="lazy"
                  decoding="async"
                />
            </button>
            <h3 className="text-center">{projectName}</h3>
        </div>
    )
}

export default PortfolioItem;
