import React from "react";
import icon from './images/logo.gif';
import './style.scss';
function Navbar() {
    return (
        <nav className="header">
        <div class="contain">
            <div id="branding">
                <h1 class="webtitle"><img class="rotate" src={icon} width="70px" height="70px" margin="10px"/><span class="highlight"> Paradox</span> Project Tracking</h1>
            </div>
            <nav>
                <ul class="navul">
                    <li class="current">
                        <a href="/login" >Let's track</a>
                    </li>
                </ul>
            </nav>
        </div>
        </nav>
    );
}
export default Navbar;