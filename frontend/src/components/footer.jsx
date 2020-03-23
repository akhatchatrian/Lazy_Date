import React from "react";
import "../assets/stylesheets/footer.css";


export default () => (
    <footer className="footer">
        <div className="footer-left">

        </div>
        <div className="footer-right">
            <div className="author-box" >
                <a href="https://github.com/akhatchatrian">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <p>Arman Khatchatrian</p>
            </div>

            <div className="author-box" >
                <a href="https://github.com/ehecker">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <p>Ezra Hecker</p>
            </div>

            <div className="author-box" >
                <a href="https://github.com/ilyadubinski">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <p>Ilya Dubinski</p>
            </div>

            <div className="author-box" >
                <a href="https://github.com/echu18">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <p>Jamie Chu</p>
            </div>
        </div>
    </footer>
);