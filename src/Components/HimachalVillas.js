import logoImage from '../Assets/Images/logo2.png'
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGear, faAddressBook ,faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Nav.css'
import '../Assets/CSS/Cards.css'

const HimachalVillas = () => {
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
                    <h2 class = "hotelscard">Top 5 Villas Suggested</h2>
                    <div className="wrapper">
                        <div className="booking-card-wrapper">
                            <div className="booking-card-image">
                                <img
                                    className="booking-card-image"
                                    src="https://vallarihotels.com/wp-content/uploads/2022/01/best-hotel-in-shimla-chalets-naldehra-by-vallari-hotels.jpg"
                                    style={{height:'5.5cm'}}
                                    alt="Booking Card"
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>The Chalet at Narkanda</h1>
                                    <p>A secluded villa nestled amidst apple orchards offering stunning views of the Himalayas. It features spacious rooms, a fireplace, and a private garden.</p>                                
                                    </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹12,500</span> per night*
                                            <div className="reviews">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
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
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/221756325.jpg?k=0baac5d1af437deebcdbc41c7f3ffdd218acc5c5a8cf01beddadb655cbb13fb3&o=&hp=1"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Riverstone Villa</h1>
                                    <p>A riverside villa with a blend of modern design and rustic charm. It offers a private deck, scenic views, and access to the river for a serene experience.</p>
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
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/399503118.jpg?k=d7d9e15e77bf99fa14090a5dbd1ad102ea66f1f47e0fb9f1d54f832d6ef26ac4&o=&hp=1"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Tirthan Riverside Villa</h1>
                                    <p>Situated along the Tirthan River, this villa provides a peaceful retreat surrounded by nature. It offers cozy rooms and a tranquil ambiance for relaxation.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹9,500</span> per night*
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
                                    src="https://www.indusurban.com/wp-content/uploads/2018/02/blossom_suite.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Apple Blossom Villa</h1>
                                    <p>A luxurious villa amidst apple orchards, providing a serene escape. It boasts spacious rooms, a garden, and panoramic views of the mountains.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹15,000</span> per night*
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
                                    src="https://b360nepal.com/public/storage/wp-content/uploads/2023/07/Dusit-Thani-Himalayan-Resort-Dhulikhel-30.jpg"
                                    alt="Booking Card"
                                    style={{height:'5.5cm'}}
                                />
                            </div>
                            <div className="booking-card-content">
                                <div className="booking-card-description">
                                    <h1>Himalayan Hideaway Villa</h1>
                                    <p>Offering a secluded stay in the midst of pine forests, this villa provides a cozy ambiance with modern amenities. It's an ideal spot for nature enthusiasts.</p>
                                </div>
                                <div className="booking-card-details">
                                    <div className="flex">
                                        <div>
                                            <span className="price">₹8,500</span> per night*
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
export default HimachalVillas;