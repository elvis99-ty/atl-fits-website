import './ReadyWear.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ReadyWear() {

  const [selectedImage, setSelectedImage] = useState(null)

  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)


  // FETCH PUBLISHED PRODUCTS
  const fetchProducts = async () => {

    try {

      const response = await axios.get(
        'http://localhost:5000/api/products'
      )

      setProducts(response.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }


  useEffect(() => {

    fetchProducts()

  }, [])


  return (

    <section className="readywear" id="readywear">

      <p className="small-title">
        READY-TO-WEAR
      </p>

      <h2>
        Exclusive Pieces Available Now
      </h2>


      {/* LOADING */}
      {
        loading && (

          <div className="loading-state">

            <p>Loading Collection...</p>

          </div>

        )
      }


      {/* EMPTY STATE */}
      {
        !loading && products.length === 0 && (

          <div className="empty-state">

            <h3>No Published Products Yet</h3>

            <p>
              New luxury styles coming soon.
            </p>

          </div>

        )
      }


      <div className="readywear-grid">

        {
          products.map((product) => {

            const message =
              `Hello ATL FITS, I'm interested in the ${product.name} (${product.size}). Is it still available?`

            const whatsappLink =
              `https://wa.me/2348134263249?text=${encodeURIComponent(message)}`

            return (

              <div
                className="ready-card"
                key={product._id}
              >

                {/* IMAGE */}
                <div
                  className="ready-image"
                  onClick={() =>
                    setSelectedImage(product.image)
                  }
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span
                    className={
                      product.available
                        ? "badge available"
                        : "badge sold"
                    }
                  >

                    {
                      product.available
                        ? "Available"
                        : "Sold Out"
                    }

                  </span>

                </div>


                {/* CONTENT */}
                <div className="ready-content">

                  <h3>{product.name}</h3>

                  <h4>
                    ₦{product.price}
                  </h4>

                  <p>
                    <strong>Size:</strong>
                    {' '}
                    {product.size}
                  </p>

                  <p>
                    <strong>Color:</strong>
                    {' '}
                    {product.color}
                  </p>

                  <p>
                    <strong>Fabric:</strong>
                    {' '}
                    {product.fabric}
                  </p>

                  <p className="description">
                    {product.description}
                  </p>


                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      `order-btn ${
                        !product.available
                          ? "disabled"
                          : ""
                      }`
                    }
                  >

                    {
                      product.available
                        ? "Order on WhatsApp"
                        : "Unavailable"
                    }

                  </a>

                </div>

              </div>

            )

          })
        }

      </div>


      {/* LIGHTBOX */}
      {
        selectedImage && (

          <div
            className="lightbox"
            onClick={() =>
              setSelectedImage(null)
            }
          >

            <span className="close-lightbox">
              ×
            </span>

            <img
              src={selectedImage}
              alt="Expanded"
              className="lightbox-img"
            />

          </div>

        )
      }

    </section>
  )
}

export default ReadyWear