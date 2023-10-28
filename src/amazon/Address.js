
import React from "react";
import "./Address.css";
function Address()
{
    return(
        <div>
            <form action="" method="get" className="lh-lg">
                <label htmlFor="">Enter Your Name:</label>
                <input type="text" placeholder="Type name here" /><br />
                <label htmlFor="">Enter Your Mobile number:</label>
                <input type="number" placeholder="Mobile number here" /><br />
                <label htmlFor="">Alternate Mobile Number:</label>
                <input type="number" placeholder="Alternate mobile" /><br />
                <label htmlFor="">Enter Your Gmail:</label>
                <input type="email" placeholder="Type Email" /><br />
                <label for="">Enter your Temporary address:</label>
                <input type="address" placeholder="address here"/><br />
                <label for="">Enter your Permanent address:</label>
                <input type="address" placeholder="address here"/><br />
                <label for="">Enter your Landmark:</label>
                <input type="address" placeholder="(like theatre,koil near your home)"/><br />
                <input type="submit" value="submit" />
            </form>
        </div>
)
}
export default Address;