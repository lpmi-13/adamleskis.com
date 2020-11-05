import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

const Presentations = ({ itemNumber, imageNameWebP, imageNamePng, onClick, type }) => {
    return (
        <div className="col-sm-4 portfolio-item">
                    <a href={`#${type}Modal${itemNumber}`} className="portfolio-link" data-toggle="modal" onClick={() => onClick(`#${type}Modal${itemNumber}`)}>
                        <div className="caption">
                          <div className="caption-content">
                            <FontAwesomeIcon className="fa-3x" icon={faSearchPlus} />
                          </div>
                        </div>
                        <picture>
                          <source type="image/webp" srcSet={imageNameWebP} />
                          <source type="image/png" srcSet={imageNamePng} />
                          <img src={imageNamePng} className="img-responsive" alt="project ideas" loading="lazy" />
                        </picture>
                    </a>
                    <h5 className="text-center">presentations</h5>
                </div>
    )
}

export default Presentations;