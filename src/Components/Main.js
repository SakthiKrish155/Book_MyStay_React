import React from 'react';
import logoImage from '../Assets/Images/logo2.png'
import '../Assets/CSS/Dashboard.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Main = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height: '10cm',
        color: theme.palette.text.secondary,
    }));
    const [destination, setDestination] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (destination === 'himachal') {
            window.location.href = '/himachal';
        }
        else if (destination === 'agra') {
            window.location.href = '/agra';
        }
        else if (destination === 'bali') {
            window.location.href = '/bali';
        }
        else if (destination === 'paris') {
            window.location.href = '/paris';
        }
    };

    const handleInputChange = (event) => {
        setDestination(event.target.value.toLowerCase());
    };

    return (
        <>
            <div>
                <nav class="navbar">
                        <img src={logoImage} alt="logo" class="logo" />
                    <div class = "sqdiv">
                        <span class="sq">SojournQuest</span>
                    </div>
                    <ul class="nav-list">
                    <li class="signin"><Link to="/signin">SignIn</Link></li>
                    </ul>
                </nav>
            </div>
            <div class="image">
                <p class="t1">Embark on a journey to Serendipity</p>
                <p class="t2">"The whole world is different from yesterday"</p>
            </div>
            <div>
                <form class="form" onSubmit={handleSubmit}>
                    <input type='text'
                        className='input'
                        placeholder="🏠Heading to..."
                        onChange={handleInputChange}
                        value={destination}
                        required></input>
                    <input type="date" class='inputdate' placeholder="🗓️CheckIn Date??" required></input>
                    <input type="date" class='inputdate' placeholder="🗓️CheckOut Date??" required></input>
                    <button class = "buttonmain" type='submit'>Book Now</button>
                </form>
            </div>
            <p class='p'>Places to visit in INDIA</p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Card sx={{ maxWidth: 500, height: 360 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                        KARNATAKA
                                    </Typography>

                                </CardContent>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300cm"
                                        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/mysore-karnataka.jpg"
                                        alt="karnataka  "
                                    />

                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Card sx={{ maxWidth: 900, height: 360 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                        HIMACHAL PRADHESH
                                    </Typography>

                                </CardContent>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300cm"
                                        image="https://www.holidify.com/images/bgImages/KASOL.jpg"
                                        alt="himachal"
                                    />

                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Card sx={{ maxWidth: 900, height: 360 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                        GOA
                                    </Typography>

                                </CardContent>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300cm"
                                        image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Goa.jpg"
                                        alt="goa"
                                    />

                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item><Card sx={{ maxWidth: 900, height: 360 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                    MANALI
                                </Typography>

                            </CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300cm"
                                    image="https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Manali.jpg"
                                    alt="manali"
                                />

                            </CardActionArea>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item><Card sx={{ maxWidth: 900, height: 360 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                    JAIPUR
                                </Typography>

                            </CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300cm"
                                    image="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Jaipur-cover.jpg"
                                    alt="jaipur"
                                />

                            </CardActionArea>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item><Card sx={{ maxWidth: 900, height: 360 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                    AGRA
                                </Typography>

                            </CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300cm"
                                    image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D"
                                    alt="agra"
                                />

                            </CardActionArea>
                        </Card></Item>
                    </Grid>
                </Grid>
            </Box>
            <p class='pp'>Places to visit in the WORLD</p>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Card sx={{ maxWidth: 500, height: 360 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                        MALDIVES
                                    </Typography>

                                </CardContent>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300cm"
                                        image="https://imageio.forbes.com/specials-images/imageserve/651cd132bef05aec48af6375/maldives-top-bucket-list-trip/960x0.jpg?format=jpg&width=1440"
                                        alt="maldives"
                                    />

                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Card sx={{ maxWidth: 900, height: 360 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                        BALI
                                    </Typography>

                                </CardContent>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300cm"
                                        image="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg"
                                        alt="bali"
                                    />

                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>
                            <Card sx={{ maxWidth: 900, height: 360 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                        PARIS
                                    </Typography>

                                </CardContent>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300cm"
                                        image="https://wallpapers.com/images/hd/romantic-eiffel-paris-babqqvmcylchhb6i.jpg"
                                        alt="paris"
                                    />

                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item><Card sx={{ maxWidth: 900, height: 360 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                    JAPAN
                                </Typography>

                            </CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300cm"
                                    image="https://imageio.forbes.com/specials-images/imageserve/632d891161b9efabbc7d2c23/Japan-reopening-tourism/0x0.jpg?format=jpg&crop=2200,1232,x398,y0,safe&width=960"
                                    alt="japan"
                                />

                            </CardActionArea>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item><Card sx={{ maxWidth: 900, height: 360 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                    MACHU PICHU
                                </Typography>

                            </CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300cm"
                                    image="https://static.toiimg.com/photo/58047049.cms"
                                    alt="machu pichu"
                                />

                            </CardActionArea>
                        </Card></Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item><Card sx={{ maxWidth: 900, height: 360 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'monospace' }}>
                                    GREAT BARRIER REEF
                                </Typography>

                            </CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300cm"
                                    image="https://assets.cntraveller.in/photos/632da314969e60ec08d35e8a/16:9/w_1024%2Cc_limit/498283106"
                                    alt="great barrier reef"
                                />

                            </CardActionArea>
                        </Card></Item>
                    </Grid>
                </Grid>
            </Box>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-contact">
                        <p class="contact">Contact us at:</p>
                        <p class="contact">Email:sojournquest@email.com</p>
                        <p class="contact">Mobile:9863254142</p>
                    </div>
                    <div >
                        <p class="license">License</p>
                        <p class="license">Terms and Conditions</p>
                        <p class="license">Privacy Policy</p>
                        <p >Help</p>
                    </div>
                    <div className="footer-social">
                        <p class="social"> Follow us on social media:</p>
                        <div className="social-icons">
                            <a href="your-facebook-link">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="your-twitter-link">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="your-twitter-link">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="your-twitter-link">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="your-twitter-link">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Main;

