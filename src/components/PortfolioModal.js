import React from 'react';

const PortfolioModal = ({
    date,
    description,
    imageNamePng,
    imageNameWebP,
    itemNumber,
    onClick,
    projectName,
    repoURL,
    focus,
    show,
    type
}) => {
    const computedId = `#${type}Modal${itemNumber + 1}`; 
    const shouldShow = show === computedId;
    return (
        <div className={`portfolio-modal  ${shouldShow ? 'show-modal' : ''} modal fade ${shouldShow ? 'in' : ''}`} id={computedId} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
            <div className="close-modal" onClick={onClick} data-dismiss="modal">
                <div className="lr">
                    <div className="rl">
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <div className="modal-body">
                            <h2>{projectName}</h2>
                            <hr className="star-primary"/>
                            <picture>
                              <source type="image/webp" srcSet={imageNameWebP}/>
                              <source type="image/png" srcSet={imageNamePng}/>
                              <img src={imageNamePng} className="img-responsive img-centered" alt={projectName} loading="lazy"/>
                            </picture>
                            <p>{description}</p>
                            <ul className="list-inline item-details">
                                <li>Date:
                                    <strong>
                                        {date}
                                    </strong>
                                </li>
                                <li>Focus:
                                    <strong>
                                        {focus}
                                    </strong>
                                </li>
                                <li>
                                  Github repositories:
                                    <strong><a href={repoURL}>{repoURL}</a>
                                    </strong>
                                </li>
                            </ul>
                            <button type="button" onClick={onClick} className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PortfolioModal;