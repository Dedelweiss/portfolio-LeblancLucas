import './index.scss'
import Loader from 'react-loaders'

const Projects = () => {
  return (
    <>
      <div className="container projects-page pt-8 pb-8 px-24 ">
        <div class="grid grid-cols-2 gap-24">
          <div class="card rounded-3xl overflow-hidden image-full shadow-lg">
            <figure>
              <img src={require('../../assets/images/projects/Roumanie.png')} alt="Romania" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card rounded-3xl overflow-hidden image-full shadow-lg">
            <figure>
              <img src={require('../../assets/images/projects/voitureAutonome.jpg')} alt="Romania" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Projects
