
import React from "react"
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Github from "../images/github.png";
import Twitter from "../images/twitter.png";

export default function Footer() {
    return (
        <div className="footer-container">
                <img src={Twitter}/>
                <img src={Facebook}/>
                <img src={Instagram}/>
                <img src={Github}/>
        </div>
    );
}