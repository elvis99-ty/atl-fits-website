import './Testimonials.css'
import img1 from '../assets/img21.jpeg'
import img2 from '../assets/img23.jpeg'
import img3 from '../assets/img25.jpeg'
import img4 from '../assets/img26.jpeg'

function Testimonials() {
  return (
    <section className="testimonials">

      <p className="small-title">TESTIMONIALS</p>
      <h2>What Our Clients Say</h2>

      <div className="testimonials-row">

        <div className="testimonial">
          <img src={img1} alt="" />
          <p>"Absolutely amazing fit! I felt so confident wearing it."</p>
          <h4>— Folashade</h4>
        </div>

        <div className="testimonial">
          <img src={img2} alt="" />
          <p>"The attention to detail is unmatched. Truly top quality."</p>
          <h4>— Zainab</h4>
        </div>

        <div className="testimonial">
          <img src={img3} alt="" />
          <p>"My go-to designer now. Always delivers beyond expectations."</p>
          <h4>— Ikeoluwa</h4>
        </div>

        <div className="testimonial">
          <img src={img4} alt="" />
          <p>"Elegant, classy, and perfectly tailored. Highly recommend!"</p>
          <h4>— Dorcas</h4>
        </div>

      </div>

    </section>
  )
}

export default Testimonials