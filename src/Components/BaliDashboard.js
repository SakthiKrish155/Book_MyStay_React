// import React from 'react';
import { Link } from 'react-router-dom';

const BaliDashboard = () => {
    return (

        <div className='dashboard-data'>
            <div className='category-wrapper'>
            <div className="category-container">
                    <div className="category-box">
                        <Link to="/balihotels" className="category-button">
                            <span className="category-title">Hotels</span>
                        </Link>
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-box">
                        <Link to="/baliresorts" className="category-button">
                            <span className="category-title">Resorts</span>
                        </Link>
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-box">
                        <Link to="/balivillas" className="category-button">
                            <span className="category-title">Villas</span>
                        </Link>
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-box">
                        <Link to="/Logout" className="category-button" id = "logout">
                            <span className="category-title">Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BaliDashboard;

