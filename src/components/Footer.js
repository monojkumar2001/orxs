import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className="footer cpb-6 ">
        <div className="footer-wrapper">
          <div className="footer-social-media">
         
            <a href="https://twitter.com/_OrXs_/" target="_blank"><img src="images/twitter-2.svg" alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="images/discord-icon-2.svg" alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="images/facebook.svg" alt="" /></a>
            <a href="https://www.Instagram.com/_orxs/" target="_blank"><img src="images/instagram.svg" alt="" /></a>
          </div>
          <div className="footer-item-dis">
            <p>© ORXS Creation All Rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
