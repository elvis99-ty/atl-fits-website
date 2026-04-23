import './Collection.css'
import img1 from '../assets/img1.jpeg'
import img13 from '../assets/img14.jpeg'
import img8 from '../assets/img18.jpeg'
import img14 from '../assets/img13.jpeg'
import img11 from '../assets/img33.jpeg'

function Collections() {
  return (
    <section className="collections" id='collections'>

      <p className="small-title">OUR COLLECTIONS</p>
      <h2>Designed for Every Occasion</h2>

      <div className="collection-grid">

        <div className="card">
          <img src={img1} alt="" />
          <p>Women Wear</p>
        </div>

        <div className="card">
          <img src={img13} alt="" />
          <p>Native Wear</p>
        </div>

        <div className="card">
          <img src={img8} alt="" />
          <p>Wedding</p>
        </div>

        <div className="card">
          <img src={img14} alt="" />
          <p>Evening Wear</p>
        </div>

        <div className="card">
          <img src={img11} alt="" />
          <p>Corporate</p>
        </div>

      </div>

      <button className="view-btn">View All Collections →</button>

    </section>
  )
}

export default Collections