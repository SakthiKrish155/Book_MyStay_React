import logoImage from '../Assets/Images/logo2.png'
import BaliDashboard from './BaliDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook ,faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Cards.css'
import { Link } from 'react-router-dom';

const BaliHotels = () => {
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
                    <h2 class = "hotelscard">Top 5 Hotels Suggested</h2>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://cache.marriott.com/content/dam/marriott-renditions/DPSAK/dpsak-deluxe-4258-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
                                    alt="Booking Card"
                                    style={{height:'5.4cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>The Stones - Legian, Marriott Autograph Collection</h1>
                                    <p>Located in Legian Beach, this upscale hotel offers modern rooms, multiple pools, beachfront access, spa facilities, and a vibrant nightlife scene.
Location: Legian, Bali.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹8,800</span> per night*
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
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/391647725.jpg?k=0ef07bb933028f028c816a3db00f55756362dad3e185ae93aa5a6b06cc39f015&o=&hp=1"
                                    alt="Booking Card"
                                    style={{height:'5.4cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>InterContinental Bali Resort</h1>
                                    <p> Set amidst lush gardens in Jimbaran, this beachfront resort boasts Balinese-inspired rooms, a tranquil spa, multiple dining options, and a family-friendly atmosphere.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹11,000</span> per night*
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
                                    src="https://suitesmile.com/wp-content/uploads/2021/04/DSC02317cover.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.4cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Alila Seminyak</h1>
                                    <p>A stylish beachfront hotel in Seminyak, offering contemporary rooms, beach access, infinity pools, a rooftop bar, and proximity to trendy dining and shopping spots.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹14,700</span> per night*
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
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/16/f4/24/75/mulia-villas.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>The Mulia - Nusa Dua</h1>
                                    <p> A luxurious beachfront resort in Nusa Dua, featuring lavish suites, multiple pools including a beachfront infinity pool, exclusive beach access, and world-class dining.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹22,000</span> per night*
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
                                    src="https://cdn.webhotelier.net/photos/w=1920/padmaubud-prm/L1315323.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Padma Resort Ubud</h1>
                                    <p>Nestled in the hills of Ubud, this resort offers spacious rooms with valley views, a serene infinity pool, a wellness center, cultural activities, and lush surroundings.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹12,000</span> per night*
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
export default BaliHotels;