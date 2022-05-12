import React from 'react';
import { logo } from '../assets';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = (props) => {
    return (
        <div className="footer-height">
            <div className='footer-pad'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={logo} className="footer-img"/>
                    </div>
                    <div className='col-md-3'>
                        <p className='footer-address'>
                            Kantor Pusat :<br/>
                            Jl. Warakas Gg.8, Warakas<br/>
                            Tanjung Priok, Jakarta Utara.<br/>
                            14370<br/>
                            Telp : 021-53742555<br/>
                            Fax : 021-53742555<br/>
                            info@midlandproperti.com
                        </p>
                    </div>
                    <div className='col-md-2'>
                        <p>
                            Mau Jual/Beli Properti ?
                        </p>
                        <button className='btn btn-success w-100'>
                            <span className='item'><FaWhatsapp/> Klik disini</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;