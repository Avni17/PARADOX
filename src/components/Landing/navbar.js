import React from "react";
import icon from './images/icon.png';
import './style.css';
function Navbar() {
    return (
        <nav className="header">
        <div class="contain">
            <div id="branding">
                <h1><img class="rotate" src={icon} width="50px" height="50px" /><span class="highlight"> Paradox</span> Project Tracking</h1>
            </div>
            <nav>
                <ul>
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