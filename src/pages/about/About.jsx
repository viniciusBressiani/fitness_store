import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import storyImage from '../../images/about1.jpg'
import visionImage from '../../images/about2.jpg'
import missionImage from '../../images/about3.jpg'
import './about.css';

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo voluptatum aliquam magni veritatis ab excepturi voluptates nam molestiae suscipit.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
            <img src={storyImage} alt="Three Women with workout style" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero recusandae asperiores vel non illo quae facere enim! Pariatur non provident magnam voluptatum magni eos, nulla beatae sunt autem corrupti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima nemo libero saepe harum, aliquid molestiae beatae culpa quasi!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ea ipsa explicabo ab, quibusdam pariatur.</p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero recusandae asperiores vel non illo quae facere enim! Pariatur non provident magnam voluptatum magni eos, nulla beatae sunt autem corrupti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima nemo libero saepe harum, aliquid molestiae beatae culpa quasi!</p>
          
        </div>
        <div className="about__section-image">
            <img src={visionImage} alt="Three Women with workout style" />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
            <img src={missionImage} alt="Three Women with workout style" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos libero recusandae asperiores vel non illo quae facere enim! Pariatur non provident magnam voluptatum magni eos, nulla beatae sunt autem corrupti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima nemo libero saepe harum, aliquid molestiae beatae culpa quasi!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ea ipsa explicabo ab, quibusdam pariatur.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
