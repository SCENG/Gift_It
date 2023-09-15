import Modal from "@/components/Modal/Modal"
import "./page.scss"

export default function Home() {
  return (
    <main className="l-main">
      {/* HOME */}
      <section className="home" id="home">
          <div className="home__container bd-container bd-grid">
              <div className="home__img">
                  <img src="img/home.png" alt=""/>
              </div>

              <div className="home__data">
                  <h1 className="home__title">Share a Gift</h1>
                  <p className="home__description">
                    In these cherished moments, extend your kindness by sharing a
                    heartfelt gift with someone who may be facing life&apos;s challenges,
                    such as an orphan. Your thoughtful gesture has the power to bring a ray
                    of sunshine into their world, letting them know they are cared for and
                    not alone. Your act of kindness transcends the boundaries of circumstance,
                    creating a connection that warms hearts and inspires hope. Together, let&apos;s
                    make this season a time of spreading joy and love, lighting up the lives of
                    those who need it most.
                  </p>
                  {/* <a href="#" className="button">Get Started</a> */}
              </div>   
          </div>
      </section>

      {/* SHARE */}
      <section className="share section bd-container" id="share">
          <div className="share__container bd-grid">
              <div className="share__data">
                  <h2 className="section-title-center">The Gift You Give</h2>
                  <p className="share__description">
                    The gift you buy from Us goes straight to an orphanage,
                    redering help to the less previlleged. So shop away for
                    someone in need or you can gift money that will help them in more ways than one.
                  </p>
                  <a href="#decoration" className="button">Buy a Gift</a>
              </div>

              <div className="share__img">
                  <img src="img/shared.png" alt=""/>
              </div>
          </div>
      </section>

      {/* HOLIDAY GIFTS */}
      <section className="decoration section bd-container" id="decoration">
          <h2 className="section-title">Holiday Specials  <br/> Buy Someone a Holiday Gift</h2>
          <div className="decoration__container bd-grid">
              <div className="decoration__data">
                  <img src="img/new_year.png" alt="" className="decoration__img"/>
                  <h3 className="decoration__title">New Years</h3>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>

              <div className="decoration__data">
                  <img src="img/valentines.png" alt="" className="decoration__img"/>
                  <h3 className="decoration__title">Valentines</h3>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>

              <div className="decoration__data">
                  <img src="img/easther.png" alt="" className="decoration__img"/>
                  <h3 className="decoration__title">Easter</h3>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>

              <div className="decoration__data">
                  <img src="img/christmas.png" alt="" className="decoration__img"/>
                  <h3 className="decoration__title">Christmas</h3>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>
          </div>
      </section>

      {/* EMPORIUM SHOPPING */}
      <section className="emporium section bd-container" id="emporium">
          <h2 className="section-title">Essentials Emporium</h2>

          <div className="emporium__container bd-grid">
              <div className="emporium__content">
                  <img src="img/books1.png" alt="" className="emporium__img"/>
                  <h3 className="emporium__title">BOOKS</h3>
                  <span className="emporium__category">Education</span>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>

              <div className="emporium__content">
                  <img src="img/food.png" alt="" className="emporium__img"/>
                  <h3 className="emporium__title">FOOD</h3>
                  <span className="emporium__category">emporium</span>
                  <a href="#" className="button button-link">Go Shopping</a>
                  
              </div>

              <div className="emporium__content">
                  <img src="img/toys.png" alt="" className="emporium__img"/>
                  <h3 className="emporium__title">TOYS</h3>
                  <span className="emporium__category">Children</span>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>

              <div className="emporium__content">
                  <img src="img/clothing.png" alt="" className="emporium__img"/>
                  <h3 className="emporium__title">CLOTHES</h3>
                  <span className="emporium__category">Clothings</span>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>

              <div className="emporium__content">
                  <img src="img/bedding.png" alt="" className="emporium__img"/>
                  <h3 className="emporium__title">BEDDINGS</h3>
                  <span className="emporium__category">Bedding</span>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>
              <div className="emporium__content">
                  <img src="img/surprisse.png" alt="" className="emporium__img"/>
                  <h3 className="emporium__title">Surprise gift</h3>
                  <span className="emporium__category">Surprises</span>
                  <a href="#" className="button button-link">Go Shopping</a>
              </div>
          </div>
      </section>

      {/* MONEY GIFTS */}
      <section className="send section">
          <div className="send__container bd-container bd-grid">
              <div className="send__content">
                  <h2 className="section-title-center send__title">Gift Them Money</h2>
                  <p className="send__description">
                    In lieu of material gifts, consider offering a monetary contribution
                    with a heartfelt message outlining its intended use. This way, you can
                    make a meaningful impact, whether it&apos;s by supporting a student&apos;s educational
                    journey or providing for the specific needs of a girl child. Your generosity
                    paves the way for brighter futures and reinforces the values of education and empowerment.
                  </p>

                  <Modal/>

              </div>

              <div className="send__img">
                  <img src="img/money.png" alt=""/>
              </div>
          </div>
      </section>
    </main>
  )
}
