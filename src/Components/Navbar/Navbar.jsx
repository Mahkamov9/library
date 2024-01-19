import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Images/logo(3).png"
import search from "../../Assets/Images/search-refraction(1).svg";
import close from "../../Assets/Images/x-circle(2).svg";
import noti from "../../Assets/Images/bell-01.svg";
import pro from "../../Assets/Images/17192581_1140324592744139_3381332769681077534_o 2.png";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="nav_box">
                    <Link> <img src={Logo} alt="Logo" /> </Link>
                    <div className='nav_input_box'>
                        <a className='search_btn' href="#"><img src={search} alt="aaa" /></a>
                        <input className='nav_input' type="text" name="sd" id="asd" />
                        <a className='close_btn' href="#"><img src={close} alt="x" /></a>
                    </div>
                </div>
                <div className="nav_box">
                    <a className='noti'><img src={noti} alt="" /></a>
                    <a className='proo'><img className='pro' src={pro} alt="" /></a>
                </div>
            </div>
        </>
    )
}
