import Header from './../../components/Header';
import Card from './../../UI/Card';

import headerImage from '../../images/header_bg_4.jpg'
import {plans} from '../../data'

import './plans.css';

const Plans = () => {
  return (
   <>
    <Header title='Membership Plans' image={headerImage}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi mollitia sequi, sed sunt libero iste.</p>
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features})=> {
            return <Card key={id} className='plan'>
               <h3>{name}</h3>
               <small>{desc}</small>
               <h1>{`$${price}`}</h1><h2>/mo</h2>
               <h4>Features</h4>
               {
                features.map(({feature,available}, index) => {
                  return <p key={index}
                    className={!available ? 'disabled': ''}>
                    {feature}
                  </p>
                })
               }
               <button className='btn lg'>Choose Plan</button> 
            </Card>
          })
        }
      </div>
    </section>
   </>
  )
}

export default Plans
