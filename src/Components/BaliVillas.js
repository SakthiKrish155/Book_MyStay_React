import logoImage from '../Assets/Images/logo2.png'
import BaliDashboard from './BaliDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Cards.css'

const BaliVillas = () => {
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
                        <BaliDashboard />
                    </div>
                </div>
                <div class="cards">
                    <h2 class="hotelscard">Top 5 Villas Suggested</h2>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/214872045.jpg?k=0843e5ed5f91e2bd75c5aa311cf7b6877b6b2572a055c6969638ba022c34ddc3&o=&hp=1"
                                    alt="Booking Card"
                                    style={{ height: '5.5cm' }}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Villa Vedas</h1>
                                    <p> A contemporary beachfront villa featuring modern architecture, infinity pools, private beach access, and spacious living spaces overlooking the Indian Ocean.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹70,000</span> per night*
                                            <div className="reviews">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">280 reviews</span>
                                            </div>
                                        </div>
                                        <div className="right-align">
                                            <button className="btn-primary" style={{ fontFamily: 'verdana' }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="side-note">* Prices may vary depending on selected date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/69572584.jpg?k=6a3926f765b17f18a81acd88d7e9e0c747fe6d9da733c8a1a5a685947957b9d7&o=&hp=1"
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Villa Mana</h1>
                                    <p>A secluded riverside villa offering expansive gardens, a private pool, stylish interiors, entertainment areas, and panoramic views of rice fields and mountains.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹50,500</span> per night*
                                            <div className="reviews">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <span className="amount">120 reviews</span>
                                            </div>
                                        </div>
                                        <div className="right-align">
                                            <button className="btn-primary" style={{ fontFamily: 'verdana' }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="side-note">* Prices may vary depending on selected date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://aw-d.tripcdn.com/images/0582x12000cdpbc1400A0.jpg"
                                    alt="Booking Card"
                                    style={{ height: '5.5cm' }}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Villa Anugrah</h1>
                                    <p>An opulent cliffside villa with luxurious amenities, including a private cinema, infinity pool, gym, spa, and stunning views of the ocean.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹80,000</span> per night*
                                            <div className="reviews">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">90 reviews</span>
                                            </div>
                                        </div>
                                        <div className="right-align">
                                            <button className="btn-primary" style={{ fontFamily: 'verdana' }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="side-note">* Prices may vary depending on selected date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://q-xx.bstatic.com/xdata/images/hotel/max500/253353450.jpg?k=6e2712bd71b5c1a18481b58824bcc39fac3d12de950f60bbfe9bdbeef1807780&o="
                                    alt="Booking Card"
                                    style={{ height: '5.5cm' }}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Villa Sungai</h1>
                                    <p>An exclusive riverside retreat with lavish interiors, personalized service, private pools, tranquil gardens, and gourmet dining experiences.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹60,500</span> per night*
                                            <div className="reviews">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">150 reviews</span>
                                            </div>
                                        </div>
                                        <div className="right-align">
                                            <button className="btn-primary" style={{ fontFamily: 'verdana' }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="side-note">* Prices may vary depending on selected date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://oimages.elitehavens.com/images/gallery/mobile/Zelie/09-Villa%20Zelie%20-%20Master%20bedroom.jpg"
                                    alt="Booking Card"
                                    style={{ height: '5.5cm' }}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Villa Zelie</h1>
                                    <p>A colonial-style villa featuring lush gardens, antique furnishings, a swimming pool, and a peaceful ambiance, perfect for a relaxing getaway.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹40,000</span> per night*
                                            <div className="reviews">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">100 reviews</span>
                                            </div>
                                        </div>
                                        <div className="right-align">
                                            <button className="btn-primary" style={{ fontFamily: 'verdana' }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="side-note">* Prices may vary depending on selected date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BaliVillas;