    import logoImage from '../Assets/Images/logo2.png'
    import { Link } from 'react-router-dom';
    import Dashboard from './Dashboard';
    import { useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faUser, faGear, faAddressBook } from '@fortawesome/free-solid-svg-icons';
    import '../Assets/CSS/Form.css'
    import '../Assets/CSS/Nav.css'
    import '../Assets/CSS/Carousal-1.css'

    const Form = () => {

        const [selectedOption, setSelectedOption] = useState(''); // State to hold the selected option

    // Function to handle changes in the dropdown
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value); // Update the selected option
    };


        return (
            <>
                <div class="main">
                    <div class="navbarpage">
                        <nav class="navbarpage">
                            <img src={logoImage} alt="logo" class="logo" />
                            <div class="sqdivpage">
                                <span class="sq">SojournQuest</span>
                            </div>
                            <div class="nav-listpage">
                                <li class="signinpage" id="profile"><Link to="/profile"><FontAwesomeIcon icon={faUser} size='2x' color='beige' /></Link></li>
                                <li class="signinpage"><Link to="/account"><FontAwesomeIcon icon={faAddressBook} size='2x' color='beige' /></Link></li>
                                <li class="signinpage"><Link to="/setting"><FontAwesomeIcon icon={faGear} size='2x' color='beige' /></Link></li>
                            </div>
                        </nav>
                    </div>
                    <div>
                        <div class="dashboard">
                            <Dashboard />
                        </div>
                    </div>
                </div>
                <div class="forms">
                    <form class="quick-reservation">

                        <div class="container">
                            <header class="quick-reservation__header">
                                <h2 class="title">
                                    New Quick Reservation
                                </h2>
                                <div class="close-icon">
                                    <span></span>
                                    <span></span>
                                </div>
                            </header>

                            <div class="quick-reservation__form">
                                <section class="form__content">
                                    <div class="row-wrapper">
                                        <div class="ele adults">
                                            <label for="adults">Adults</label>
                                            <select name="adults" id="adults" value={selectedOption} onChange={handleDropdownChange}>
                                                <option value="hide">Adults</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                        </div>
                                        <div class="ele children">
                                            <label for="children">Children</label>
                                            <select name="children" id="children">
                                                <option value="hide">Children</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                        </div>
                                        <div class="ele rate-type">
                                            <label for="rateType">Rate Type</label>
                                            <select name="rateType" id="rateType">
                                                <option value="hide">Rate Type</option>
                                                <option value="">Rack Rate</option>
                                                <option value="">Rack Rate</option>
                                                <option value="">Rack Rate</option>
                                            </select>
                                        </div>
                                        <div class="ele rooms">
                                            <label for="Rooms">Rooms</label>
                                            <select name="rooms" id="Rooms">
                                                <option value="hide">Rooms</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row-wrapper">
                                        <div class="ele adults">
                                            <label for="title">Title</label>
                                            <select name="title" id="title">
                                                <option value="hide">Title</option>
                                                <option value="">Mr.</option>
                                                <option value="">Mrs.</option>
                                            </select>
                                        </div>
                                        <div class="ele first-name">
                                            <label for="firstName">First Name</label>
                                            <input type="text" value="" placeholder="First Name" id="firstName"/>
                                        </div>
                                        <div class="ele last-name">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" value="" placeholder="Last Name" id="lastName"/>
                                        </div>
                                    </div>
                                    <div class="row-wrapper">
                                        <div class="ele email-address">
                                            <label for="emailAddress">Email Address</label>
                                            <input type="email" value="" placeholder="Enter Email" id="emailAddress"/>
                                        </div>
                                        <div class="ele phone-number">
                                            <label for="phoneNumber">Phone Number</label>
                                            <input type="text" value="" placeholder="Enter Phone Number" id="phoneNumber"/>
                                        </div>

                                    </div>

                                    <div class="row-wrapper more-options">

                                        <label for="single" class="radio">
                                            <input type="radio" name="plan" id="single" class="hidden" />
                                            <span class="label"></span>Single
                                        </label>

                                        <label for="group" class="radio">
                                            <input type="radio" name="plan" id="group" class="hidden" />
                                            <span class="label"></span>Group
                                        </label>

                                        <label for="business" class="radio">
                                            <input type="radio" name="plan" id="business" class="hidden" />
                                            <span class="label"></span>Business
                                        </label>

                                    </div>

                                </section>
                            </div>

                            <div class="reservation-info">
                                <div class="ele data">
                                    <h4 class="data__head">Room Type</h4>
                                    <p class="data__description">Deluxe</p>
                                </div>
                                <div class="ele data">
                                    <h4 class="data__head">Duration</h4>
                                    <p class="data__description">Dec 22 - Dec 30</p>
                                </div>
                                <div class="ele data">
                                    <h4 class="data__head">Price</h4>
                                    <p class="data__description">₹1000/night<br/> Total ₹4000</p>
                                </div>
                            </div>

                            <footer class="form__footer">
                                <div class="footer-wrapper">
                                    <input type="submit" value="Tempt Reserve" class=""/>
                                        <input type="submit" value="Reserve" class=""/>
                                            <input type="button" value="Check-In" class=""/>
                                            </div>
                                        </footer>
                                </div>

                            </form>

                            <p class="after" style={{display: 'none', color: '#777'}}>Reload the browser window everytime you close the reservation form to show up again.</p>            </div>
                    </>
                    );
    };

                    export default Form;
