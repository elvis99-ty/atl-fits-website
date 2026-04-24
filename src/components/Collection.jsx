import './Collection.css'
import { useState } from 'react'

import img1 from '../assets/img1.jpeg'
import img13 from '../assets/img14.jpeg'
import img8 from '../assets/img18.jpeg'
import img14 from '../assets/img13.jpeg'
import img11 from '../assets/img33.jpeg'

function Collections() {

  const [page, setPage] = useState(0)

  const collections = [
    [
      { img: img1, title: "Women Wear" },
      { img: img13, title: "Native Wear" },
      { img: img8, title: "Wedding" },
      { img: img14, title: "Evening Wear" },
      { img: img11, title: "Corporate" },
    ],
    [
      { img: img11, title: "Luxury Styles" },
      { img: img8, title: "Casual Wear" },
      { img: img13, title: "Traditional" },
      { img: img1, title: "Bridal" },
      { img: img14, title: "Office Wear" },
    ]
  ]

  return (
    <section className="collections" id="collections">

      <p className="small-title">OUR COLLECTIONS</p>
      <h2>Designed for Every Occasion</h2>

      <div className="collection-grid">

        {collections[page].map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>

            {/* 👉 Arrow on last card */}
            {index === collections[page].length - 1 && (
              <div 
                className="next-arrow"
                onClick={() => setPage((page + 1) % collections.length)}
              >
                →
              </div>
            )}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Collections