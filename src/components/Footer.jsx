import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import {FaLinkedin, FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai';



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link className="logo" to='/'>
                    <img src={Logo} alt="Logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, itaque nulla numquam aspernatur voluptatem dignissimos.</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target='blanck' rel='noreferrer noopener'><FaLinkedin /></a>
                    <a href="https://facebook.com/" target='blanck' rel='noreferrer noopener'><FaFacebook /></a>
                    <a href="https://twitter.com/" target='blanck' rel='noreferrer noopener'><AiOutlineTwitter /></a>
                    <a href="https://instagram.com/" target='blanck' rel='noreferrer noopener'><AiFillInstagram /></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/'>Blog</Link>
                <Link to='/'>Case Studies</Link>
                <Link to='/'>Events</Link>
                <Link to='/'>Communities</Link>
                <Link to='/'>FAQS</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/'>Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 ViniciusBressiani &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
