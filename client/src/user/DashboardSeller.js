import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav';
import {HomeOutlined} from '@ant-design/icons';


const DashboardSeller = () => {
    const {auth} = useSelector((state) => ({...state}));

    const handleClick = () => {
        
    }

    const connected = () => (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <h2>Your Hotels</h2>
                    </div>
                    <div className="col-md-2">
                        <Link to ="/hotels/new" className="btn btn-primary">+ Add New</Link>
                    </div>
                </div>
            </div>
    );

    const notConnected = () => (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="p-5 pointer">
                            <HomeOutlined className="h1"/>
                        <h4>Setup payouts to post hotel rooms</h4>
                        <p className="lead">
                            MERN partners will stripe to transfer earnings to your bank account
                        </p>
                        <button onClick={handleClick} className="btn btn-primary mb-3">Setup Payouts</button>
                        <p className="text-muted"><small>You'll be redirected to Stripe to complete the onboarding process</small></p>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
    );

    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <ConnectNav />
            </div>

            <div className="container-fluid p-4">
                <DashboardNav/>
            </div>

            {auth && auth.user2 && auth.user2.stripe_seller && auth.user2.stripe_seller.charges_enabled ? connected() : notConnected()}
            
            

            
        </>
    )
}

export default DashboardSeller;
