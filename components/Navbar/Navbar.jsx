import "./navbar.scss"

function Navbar() {

  return (
    
    <>
      <header className="l-header" id="header">
          <nav className="nav bd-container">
              <a href="#" className="nav__logo">Gift It</a>

              <div className="nav__menu" id="nav-menu">
                  <ul className="nav__list">
                      <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                      <li className="nav__item"><a href="#share" className="nav__link">Share</a></li>
                      <li className="nav__item"><a href="#decoration" className="nav__link">Holidays</a></li>
                      <li className="nav__item"><a href="#emporium" className="nav__link">Emporium</a></li>

                      <li><i className='bx bx-toggle-left change-theme' id="theme-button"></i></li>
                  </ul>
              </div>

              <div className="nav__toggle" id="nav-toggle">
                  <i className='bx bx-grid-alt'></i>
              </div>
          </nav>
      </header>
    </>
  )
}

export default Navbar