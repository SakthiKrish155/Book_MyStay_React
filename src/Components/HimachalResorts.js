import logoImage from '../Assets/Images/logo2.png'
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook ,faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Cards.css'

const HimachalResorts = () => {
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
                    <h2 class = "hotelscard">Top 5 Resorts Suggested</h2>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v5305558510/Hotel/00040299/DCFR2439_IpUtvx.JPG"
                                    style={{height:'5.5cm'}}
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>The Himalayan Retreat</h1>
                                    <p>Tucked away in the lush valleys, The Himalayan Retreat offers a serene escape with luxurious cottages overlooking snow-capped peaks. The resort boasts modern amenities and spa facilities.</p>                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹7,500</span> per night*
                                            <div className="reviews">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">200 reviews</span>
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
                                    src="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1563880197/Hotel/Darjeeling/00087132/13738903_room_6_LKCVMc.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Pine Forest Haven Resort</h1>
                                    <p>Situated amidst dense pine forests, Pine Forest Haven Resort offers eco-friendly cottages blending modern comfort with nature's tranquility. Enjoy hiking trails and organic cuisine.</p>
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
                                            <FontAwesomeIcon icon={faStar} />
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
                                    src="https://www.hellocorbett.in/wp-content/uploads/2021/10/Mobile-3.jpg"
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Riverside Serenity Resort</h1>
                                    <p>Embraced by riverbanks, Riverside Serenity Resort provides a peaceful ambiance with river-facing rooms and outdoor activities like fishing and bonfires.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹8,500</span> per night*
                                            <div className="reviews">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">180 reviews</span>
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
                                    src="https://miro.medium.com/v2/resize:fit:1400/1*7-paLXi3VizCyAphyzDSVg.png"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Mountain Mist Oasis</h1>
                                    <p> Set in the lap of the mountains, Mountain Mist Oasis offers spacious suites with panoramic views. It's an ideal spot for adventure seekers with trekking and paragliding options.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹9,500</span> per night*
                                            <div className="reviews">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">170 reviews</span>
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
                                    src="https://img.coastalcottages.co.uk/properties/1161/valleyview-33647-17.jpg?width=833&height=525&mode=crop&anchor=bottomright&quality=65"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Valley View Haven</h1>
                                    <p>Overlooking picturesque valleys, Valley View Haven features traditional Himachali architecture blended with modern amenities. Relax in the gardens or explore nearby trails.</p>
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
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                                <span className="amount">160 reviews</span>
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
export default HimachalResorts;