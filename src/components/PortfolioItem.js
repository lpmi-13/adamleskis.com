import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const PortfolioItem = ({ itemNumber, imageNameWebP, imageNamePng, onClick, projectName, type }) => {
    return (
        <div className="col-sm-4 portfolio-item">
            <a href={`#${type}Modal${itemNumber + 1}`} className="portfolio-link" data-toggle="modal" onClick={() => onClick(`#${type}Modal${itemNumber + 1}`)}>
                <div className="caption">
                    <div className="caption-content">
                      <FontAwesomeIcon className="fa-3x" icon={faSearchPlus} />
                    </div>
                </div>
                <picture>
                    <source type="image/webp" srcSet={imageNameWebP}/>
                    <source type="image/png" srcSet={imageNamePng}/>
                    <img src={imageNamePng} className="img-responsive" alt={`${projectName}`} loading="lazy"/>
                </picture>
            </a>
            <h3 className="text-center">{projectName}</h3>
        </div>
    )
}

export default PortfolioItem;