import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <Fade left>
        <div>
             <div className="col-md-2 col-sm-6">
        <div className="footer-item">
          <h2>Latest Products</h2>
          <ul>
            <li><a href="/">-  Microdosing</a></li>
            <li><a href="/">-  Dreamcatcher</a></li>
            <li><a href="/">-  Chambray irony</a></li>
            <li><a href="/">-  Bitters leggings</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="footer-item">
          <h2>New Arrivals</h2>
          <ul>
            <li><a href="/">-  Park brunch</a></li>
            <li><a href="/">-  Shoreditch</a></li>
            <li><a href="/">-  Activated</a></li>
            <li><a href="/">-  Charcoales</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="footer-item">
          <h2>Top Rated 2018</h2>
          <ul>
            <li><a href="#">-  Messenger</a></li>
            <li><a href="#">-  Selvage</a></li>
            <li><a href="#">-  Chartreuse</a></li>
            <li><a href="#">-  Bushwick</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="footer-item">
          <h2>Recommended</h2>
          <ul>
            <li><a href="#">-  Coloring</a></li>
            <li><a href="#">-  Pinterest</a></li>
            <li><a href="#">-  Mumblecore</a></li>
            <li><a href="#">-  Mustache</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="footer-item">
          <h2>More About Us</h2>
          <p>Duis tristique, erat id tempus viverra, quam ante tempus massa, id pulvinar nisi lorem at metus. Aenean posuere risus tristique.</p>
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-rss" /></a></li>
            <li><a href="#"><i className="fa fa-behance" /></a></li>
          </ul>
        </div>
      </div>
        </div>
        </Fade>
    )
}
