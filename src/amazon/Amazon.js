import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import './amazon.css';
function Amazon()
{
    return(
        <div className="Amazon">
            <div className="nav">
                <i class="fa-solid fa-bars"></i>
                <input type="search" name="search" id="search" />               
                <Link to="/Dress">Dress</Link>
                <Link to="/Mobile">Mobile</Link>
                <Link to="/Electronics">Electronics</Link>
                <Link to="/Address">Shipping Address</Link>
                <Link to="/Signout">Signout</Link>
                <h5 className="mx-5 text-warning">Sethu E-Commerce</h5>
            </div>
            <div className="slide">
                <AliceCarousel autoPlay autoPlayInterval="3000">
                
                    <img src="./image/Amazon/watchhd.JPG" alt="" />
                    <img src="./image/Amazon/phonehd.JPG" alt="" />
                    <img src="./image/Amazon/laptophd.JPG" alt="" />
                    <img src="./image/Amazon/men2.JPG" alt="" />
                    <img src="./image/Amazon/tv.JPG" alt="" />
                    <img src="./image/Amazon/headphone.JPG" alt="" />
                </AliceCarousel>
            </div>
        <div className="container-fluid">
            <div className="phone row">
                <div className="pho col-lg-4">
                    <h3>Upto 60% offer</h3>
                    <p><b>12,000rs</b></p>
                    <p><strike>18,000rs</strike></p>
                    <img src="./image/Amazon/phone1.JPG" alt="phone1" />
                </div>
                <div className="pho col-lg-4">
                    <h3>Upto 40% offer</h3>
                    <p><b>9,000rs</b></p>
                    <p><strike>13,000rs</strike></p>
                    <img src="./image/Amazon/phone2.JPG" alt="phone1" />
                    
                </div>
                <div className="pho col-lg-4">
                    <h3>Upto 50% offer</h3>
                    <p><b>10,000rs</b></p>
                    <p><strike>15,000rs</strike></p>
                    <img src="./image/Amazon/phone3.JPG" alt="phone1" />     
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="phone row">
                <div className="pho col-lg-4">
                    <h3>Upto 20% offer</h3>
                    <p><b>1,800rs</b></p>
                    <p><strike>2,000rs</strike></p>
                    <img src="./image/Amazon/mencloth.JPG" alt="phone1" />
                </div>
                <div className="pho col-lg-4">
                    <h3>Upto 40% offer</h3>
                    <p><b>4,000rs</b></p>
                    <p><strike>6,000rs</strike></p>
                    <img src="./image/Amazon/men2.JPG" alt="phone1" />  
                </div>
                <div className="pho col-lg-4">
                    <h3>Upto 50% offer</h3>
                    <p><b>5,000rs</b></p>
                    <p><strike>10,000rs</strike></p>
                    <img src="./image/Amazon/men3.JPG" alt="phone1" />
                </div>
            </div>
        </div>
        <div className='container-fluid'>
        <div className='row phone'>
                    <div className='pho col-lg-4'>
                        <h3>Upto 10% offer</h3>
                        <p>40,000rs</p>
                        <p><strike>45,000rs</strike></p>
                        <img src="./image/Amazon/laptop.jpg" alt="" />
                    </div>
                    <div className='pho col-lg-4'>
                        <h3>Upto 15% offer</h3>
                        <p>60,000rs</p>
                        <p><strike>75,000rs</strike></p>
                        <img src="./image/Amazon/laptop2.jpg" alt="" />
                    </div>
                    <div className='pho col-lg-4'>
                        <h3>Upto 10% offer</h3>
                        <p>40,000rs</p>
                        <p><strike>45,000rs</strike></p>
                        <img src="./image/Amazon/laptophd.jpg" alt="" />
                    </div>
        </div>
    </div>
        <div className='container-fluid'>   
            <div className='row phone'>
                    <div className='pho col-lg-4'>
                        <h3>Upto 10% offer</h3>
                        <p>800rs</p>
                        <p><strike>1,000rs</strike></p>
                        <img src="./image/Amazon/earphone.jpg" alt="" />
                    </div>
                    <div className='pho col-lg-4'>
                        <h3>Upto 15% offer</h3>
                        <p>5,000rs</p>
                        <p><strike>5,500rs</strike></p>
                        <img src="./image/Amazon/earphone2.jpg" alt="" />
                    </div>
                    <div className='pho col-lg-4'>
                        <h3>Upto 10% offer</h3>
                        <p>1,000rs</p>
                        <p><strike>1,100rs</strike></p>
                        <img src="./image/Amazon/headphone.jpg" alt="" />
                    </div>
            </div>
        </div>
        <div className='container-fluid'>   
            <div className='row phone'>
                    <div className='pho col-lg-4'>
                        <h3>Upto 10% offer</h3>
                        <p>40,000rs</p>
                        <p><strike>45,000rs</strike></p>
                        <img src="./image/Amazon/tv.jpg" alt="" />
                    </div>
                    <div className='pho col-lg-4'>
                        <h3>Upto 15% offer</h3>
                        <p>60,000rs</p>
                        <p><strike>75,000rs</strike></p>
                        <img src="./image/Amazon/tv2.jpg" alt="" />
                    </div>
                    <div className='pho col-lg-4'>
                        <h3>Upto 10% offer</h3>
                        <p>40,000rs</p>
                        <p><strike>45,000rs</strike></p>
                        <img src="./image/Amazon/tv3.jpg" alt="" />
                    </div>
            </div>
        </div>
    </div>
    )
}
export default Amazon;