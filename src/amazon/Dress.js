import React from 'react'

export default function Dress() {
  return (
    <div>
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
    </div>
  )
}
