import Bounce from 'react-reveal/Bounce';


export default function Header() {
    return (
        <Bounce top delay={500}>
<header id="header">
      <div className="container-fluid">
        <div className="col-md-12">
          <button id="primary-nav-button" type="button">Menu</button>
          <div className="logo">
            <a href="index.html"><img src="img/white-logo.png" alt="Brunch Template" /></a>
          </div>
          <nav id="primary-nav" className="dropdown cf">
            <ul className="dropdown menu">
              <li className="active"><a href="index.html">Main Features</a></li>
              <li><a href="/">Products</a>
                <ul className="sub-menu">
                  <li><a href="generic-page.html">Latest Products</a></li>
                  <li><a href="generic-page.html">New Arrivals</a></li>
                  <li><a href="generic-page.html">Top Rated 2019</a></li>
                  <li><a href="generic-page.html">Recommended</a></li>
                </ul>
              </li>
              <li><a href="generic-page.html">Shop</a></li>
              <li><a href="contact-page.html">Contact Us</a></li>
            </ul>
          </nav>{/* / #primary-nav */}
        </div>
      </div>
    </header>
    </Bounce>
    )
}
