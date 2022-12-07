import headerImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';


import './contact.css';
import Header from './../../components/Header';

const Contact = () => {
  return (
    <>
    <Header image={headerImage} title="Get in Touch">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, eum? Obcaecati impedit tenetur ratione totam doloremque nemo itaque error quam.</p>
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:caio@caio.com" target="_black" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/facebook_name" target="_black" rel="noreferrer noopener"><BsMessenger /></a>
          <a href="https://wa.me/+554788888888" target="_black" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
