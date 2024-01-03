// import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (

        <div className='dashboard-data'>
            <div className='category-wrapper'>
            <div className="category-container">
                    <div className="category-box">
                        <Link to="/himachalhotels" className="category-button">
                            <span className="category-title">Hotels</span>
                        </Link>
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-box">
                        <Link to="/himachalresorts" className="category-button">
                            <span className="category-title">Resorts</span>
                        </Link>
                    </div>
                </div>
                <div className="category-container">
                    <div className="category-box">
                        <Link to="/himachalvillas" className="category-button">
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

export default Dashboard;

// // import React, { useState } from 'react';
// // import { ChevronDownCircle } from 'lucide-react';

// // const Dashboard = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleDropdown = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="dropdown">
// //       <button onClick={toggleDropdown} className="dropdown-toggle">
// //       <ChevronDownCircle />

// //       </button>
// //       {isOpen && (
// //         <div className="dropdown-menu">
// //           {/* Dropdown menu items */}
// //           <li><Link to = '/resorts'>Resorts</Link></li>
// //           <li><Link to = '/villas'>Resorts</Link></li>
// //           <li><Link to = '/hotels'>Resorts</Link></li>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Dashboard;
