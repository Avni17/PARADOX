import React from "react";
import icon from './images/logo.gif';
import './style.scss';
function Navbar() {
    function close() {
        var check = document.getElementById("menuclose");
        if (check.checked == true) {
            check.checked = false;
        }
    };

    return (

                <div id="menuToggle">

                    <input id="menuclose" type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li><a onClick={close} href="/login">Let's Track</a></li>
                        {/* <li><a onClick={close} href="/#about">About</a></li> */}
                    </ul>
                </div>


    );
}
export default Navbar;