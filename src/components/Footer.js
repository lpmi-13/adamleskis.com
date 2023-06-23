import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

const copyRight =
    "Copyright " +
    String.fromCharCode(0x00a9) +
    " Adam Leskis " +
    new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Location</h3>
                            <p>Dundee, UK</p>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Around the Web</h3>
                            <a
                                href="https://micromaterialsblog.wordpress.com"
                                aria-label="link to my blog"
                                className="btn-social btn-outline"
                            >
                                <FontAwesomeIcon icon={faWordpress} />
                            </a>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Get in touch</h3>
                            <p>
                                Feel free to contact me at leskis@gmail.com, and
                                have a browse through my{" "}
                                <a
                                    href="https://github.com/lpmi-13"
                                    className="text-link"
                                >
                                    Github profile
                                </a>
                                . I'd be very happy to collaborate on any
                                projects you might be interested in, and pull
                                requests welcome!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div id="copyright" className="col-lg-12">
                            {copyRight}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
