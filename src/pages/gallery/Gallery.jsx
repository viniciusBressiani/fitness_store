import headerImage from '../../images/header_bg_3.jpg'

import './gallery.css'
import Header from './../../components/Header';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
    <Header title='Our Gallery' image={headerImage}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo saepe necessitatibus error sunt, rerum quibusdam repudiandae voluptas animi eaque blanditiis.</p>
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </> 
  )
}

export default Gallery
