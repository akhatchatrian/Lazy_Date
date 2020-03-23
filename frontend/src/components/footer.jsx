import React from "react";
import "../assets/stylesheets/footer.css";


export default () => (
    <footer className="footer">
        <div className="footer-left">

        </div>
        <div className="footer-right">
            <a href="https://github.com/akhatchatrian">
                <div className="author-box" >
                    <i className="fab fa-github fa-2x"></i>
                    <p>Arman Khatchatrian</p>
                </div>
            </a>

            <a href="https://github.com/ehecker">
                <div className="author-box" >
                    <i className="fab fa-github fa-2x"></i>
                    <p>Ezra Hecker</p>
                </div>
            </a>

            <a href="https://github.com/ilyadubinski">
                <div className="author-box" >
                    <i className="fab fa-github fa-2x"></i>
                    <p>Ilya Dubinski</p>
                </div>
            </a>

            <a href="https://github.com/echu18">
                <div className="author-box" >
                    <i className="fab fa-github fa-2x"></i>
                    <p>Jamie Chu</p>
                </div>
            </a>
        </div>
    </footer>
);