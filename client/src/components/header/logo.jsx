import React from 'react';
import AppLogo from "../../logo.png";

const Logo = () => {
    return (
        <figure className="column is-third">
            <img src={AppLogo} style={{maxWidth: 100}}></img>
        </figure>
      );
}
 
export default Logo;