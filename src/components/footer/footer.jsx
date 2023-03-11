import './footer.css'; 
import React from "react";
import { ReactComponent as Telegram } from './img/telegram.svg';
import { ReactComponent as Instagram } from './img/instagram.svg';

function Footer(params) {
    return (
    <footer>
      <div className='footer'>
          <div className="footer__wrapper">
            <span className='copyright'><p>Contact us with:</p></span>
              <ul className='socials'>
                <li>
                  <a
                    className='socials__icon'
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Telegram className='socials__icon' />
                  </a>
                </li>
                <li>
                  <a
                    className='socials__icon'
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className='socials__icon' />
                  </a>
                </li>
              </ul>
              <span className='copyright'><p>@Made by Mary Sysolyatina</p></span>
          </div>
        </div>
    </footer>
    )
}

export default Footer;