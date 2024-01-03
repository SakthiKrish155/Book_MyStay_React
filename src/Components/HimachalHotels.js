import logoImage from '../Assets/Images/logo2.png'
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook ,faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Cards.css'

const HimachalHotel = () => {
    const handlebook = () => {
        window.location.href = '/form'
    }
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
                        <Dashboard />
                    </div>
                </div>
                <div class="cards">
                    <h2 class = "hotelscard">Top 5 Hotels Suggested</h2>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/449791235.jpg?k=207e3b45daddaa1d0d3871d99e9ced98fdb2c496356c73798399fab63a5c0fa3&o=&hp=1"
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Riverstone Retreat</h1>
                                    <p> Riverstone Retreat is set along a riverbank, offering serene surroundings and well-appointed rooms. Perfect for a peaceful getaway.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹6,000</span> per night*
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
                                            <button className="btn-primary" style={{ fontFamily: 'verdana' }} onClick={handlebook}>
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
                                    src="https://gos3.ibcdn.com/7725f902b44111edb8690a58a9feac02.jpg"
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Hotel Himalaya View</h1>
                                    <p>Nestled in the serene mountains, Hotel Himalaya View offers breathtaking views of the Himalayas. Its cozy rooms provide a comfortable stay for nature lovers.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹5,500</span> per night*
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
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/26/71/a5/c9/adrak-mountain-mist-forest.jpg"
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Mountain Mist Resort</h1>
                                    <p> Mountain Mist Resort is a tranquil retreat surrounded by pine forests. With spacious cottages and modern amenities, it's an ideal escape for relaxation.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹8000</span> per night*
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
                                    src="https://r1imghtlak.mmtcdn.com/ff024fcc889911eb98980242ac110003.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Valley Retreat Inn</h1>
                                    <p> Valley Retreat Inn offers a rustic experience amidst apple orchards. The traditional Himachali architecture and warm hospitality make it a charming stay.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹6,500</span> per night*
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
                                    src="https://hotel-snow-peak-retreat-manali.booked.net/data/Photos/OriginalPhoto/7540/754008/754008403/Snow-Peak-Retreat-Hotel-Manali-Exterior.JPEG"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Snow Peak Lodge</h1>
                                    <p>Snow Peak Lodge, located near skiing spots, provides a cozy ambiance with fireplaces and mountain views. It's a haven for adventure enthusiasts.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹10,000</span> per night*
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
export default HimachalHotel;