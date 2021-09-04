import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
    const active = window.location.pathname;
    return (
        <ul className="nav nav-tabs">
         <li className="nav-item ">
            <Link className={`nav-link ${active === "/dashboard" && "active"}`} to="/dashboard"><h4>Your Bookings</h4></Link>
         </li>
         <li>
             <Link className={`nav-link ${active === "/dashboard/seller" && "active"}`} to="/dashboard/seller"><h4>Your Hotels</h4></Link>
         </li>
            
        </ul>
    )
}

export default DashboardNav;
