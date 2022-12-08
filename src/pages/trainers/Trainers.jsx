import Header from './../../components/Header';
import Trainer from '../../components/Trainer';
import headerImage from '../../images/header_bg_5.jpg';

import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import { trainers } from './../../data';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

import './trainers.css';

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={headerImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus atque, cum voluptatibus assumenda sequi ad.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
             return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/> , link: socials[0]},
                  {icon: <AiOutlineTwitter/> , link: socials[1]},
                  {icon: <FaFacebook/> , link: socials[2]},
                  {icon: <FaLinkedin/> , link: socials[3]}
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
