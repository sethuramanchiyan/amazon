import React from 'react';
import { Link } from 'react-router-dom';


export default function Mobile() {
  return (
    <div className='Mobile'>
        <div className="phone">
                <div className="pho">
                    <h3>Upto 60% offer</h3>
                    <p><b>12,000rs</b></p>
                    <p><strike>18,000rs</strike></p>
                    <img src="./image/Amazon/phone1.JPG" alt="phone1" />
                    <Link></Link>
                  
                </div>
                <div className="pho">
                    <h3>Upto 40% offer</h3>
                    <p><b>9,000rs</b></p>
                    <p><strike>13,000rs</strike></p>
                    <img src="./image/Amazon/phone2.JPG" alt="phone1" />
                    
                </div>
                <div className="pho">
                    <h3>Upto 50% offer</h3>
                    <p><b>10,000rs</b></p>
                    <p><strike>15,000rs</strike></p>
                    <img src="./image/Amazon/phone3.JPG" alt="phone1" />     
                </div>
            </div>
        
    </div>
  )
}
