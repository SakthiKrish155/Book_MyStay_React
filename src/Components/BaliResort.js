import logoImage from '../Assets/Images/logo2.png'
import BaliDashboard from './BaliDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook ,faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Cards.css'

const BaliResorts = () => {
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
                        <li class="signinpage" id="profile"><Link to = "/profile"><FontAwesomeIcon icon={faUser} size='2x' color='beige' /></Link></li>
                            <li class="signinpage"><Link to = "/account"><FontAwesomeIcon icon={faAddressBook} size='2x' color='beige' /></Link></li>
                            <li class="signinpage"><Link to = "/setting"><FontAwesomeIcon icon={faGear} size='2x' color='beige' /></Link></li>
                        </div>
                    </nav>
                </div>
                <div>
                    <div class="dashboard">
                    <BaliDashboard />
                    </div>
                </div>
                <div class="cards">
                    <h2 class = "hotelscard">Top 5 Resorts Suggested</h2>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://www.hotel.de/de/media/image/d1/b9/68/AYANA_Resort_and_Spa_BALI-Bali-Standardzimmer-6-432526.jpg"
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>AYANA Resort</h1>
                                    <p>Overlooking the Indian Ocean, AYANA offers luxurious accommodations, private beaches, multiple pools, restaurants, and a renowned spa.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹18,000</span> per night*
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
                                    src="https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-12,7500-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/UBU/UBU_272_original.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Four Seasons Resort Bali at Sayan</h1>
                                    <p>Nestled in lush jungle near Ubud, this resort offers spacious villas with private pools, a riverfront spa, yoga sessions, and immersive cultural experiences.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹35,500</span> per night*
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
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/371100944.jpg?k=b7d755925c736dbdcd2cf41b59a8ebaa249b9dc20f5aa552bcd83fc8e644eb16&o=&hp=1"
                                    alt="Booking Card"
                                    style={{height:'5.4cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>COMO Uma Ubud</h1>
                                    <p>Located in Ubud, COMO Uma offers elegant rooms, panoramic valley views, wellness-focused amenities, yoga, and holistic spa treatments.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹20,000</span> per night*
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
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/426599637.jpg?k=2a6f48a8f890c19fddf730d0fc6d267cc87caf0af9e439ec156f47912d204dc4&o=&hp=1"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>The St. Regis Bali Resort</h1>
                                    <p> Situated in Nusa Dua, this beachfront resort features exquisite suites, a serene lagoon, a luxurious spa, and exceptional dining experiences.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹30,500</span> per night*
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
                                    src="https://www.viceroybali.com/wp-content/uploads/2021/11/Viceroy-Villa_Bed2.webp"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Viceroy Bali</h1>
                                    <p> Perched in the highlands near Ubud, Viceroy Bali offers luxurious villas with private pools, stunning river views, fine dining, and personalized service.
</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹50,000</span> per night*
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
export default BaliResorts;