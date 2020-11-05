import React from 'react';

const PresentationsModal = ({ type, onClick, itemNumber, imageNameWebP, imageNamePng, show}) => {
    const computedId = `#${type}Modal${itemNumber}`; 
    const shouldShow = show === computedId
    return (
        <div className={`portfolio-modal modal ${shouldShow ? 'show-modal' : ''} fade ${shouldShow ? 'in' : ''}`} id={computedId} tabIndex="-1" role="dialog" aria-hidden="true" >
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
                            <h2>Talks</h2>
                            <hr className="star-primary" />
                            <picture>
                              <source type="image/webp" srcSet={imageNameWebP} />
                              <source type="image/png" srcSet={imageNamePng} />
                              <img src={imageNamePng} className="img-responsive img-centered" alt="presentations" loading="lazy" />
                            </picture>
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
                            <button type="button" onClick={onClick} className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PresentationsModal;