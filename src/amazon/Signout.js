import React from 'react'

export default function Signout() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6 text-center'>
                <form action="" method="get">
                    <label htmlFor="text">Enter Username:</label><br />
                    <input type="text" placeholder='username' /><br />
                    <label htmlFor="text">Enter Password:</label><br />
                    <input type="password" placeholder='Password' /><br />
                    <input type="submit" value="submit"/>
                </form>
            </div>

        </div>

    </div>
  )
}
