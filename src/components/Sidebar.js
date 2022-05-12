import React from 'react';
import { logo } from '../assets';
import './style.css';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Sidebar = (props) => {
    return (
        <div>
            <div className='sider'>
                <a href='/'>
                    <img src={logo} className="img-logo-size" />
                </a>
                <nav>
                    <ul>
                        <li className='over-height'>
                            <a className={props.home ? 'coloring active' : "coloring"} href='/'>Home</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.profile ? 'coloring active' : "coloring"} href='/profile'>Profile</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.news ? 'coloring active' : "coloring"} href='#'>News</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.project ? 'coloring active' : "coloring"} href='#'>Our Projects</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.join ? 'coloring active' : "coloring"} href='#'>Join Us</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.invest ? 'coloring active' : "coloring"} href='#'>Investment</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.contact ? 'coloring active' : "coloring"} href='/contact'>Contact Us</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.faq ? 'coloring active' : "coloring"} href='#'>FAQ</a>
                        </li>
                        <li className='over-height'>
                            <a className="coloring-fa" href='#'>Social Media</a>
                            <div className='row'>
                                <div className='col-md-2'><FaInstagram className='coloring-fa' /></div>
                                <div className='col-md-2'><FaYoutube className='coloring-fa' /></div>
                                <div className='col-md-2'><FaWhatsapp className='coloring-fa' /></div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;