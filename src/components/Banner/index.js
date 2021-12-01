import Fade from 'react-reveal/Fade';

export default function Banner() {
    return (
        <Fade left>
        <div className="container-fluid">
        <div className="col-md-5 col-sm-5 col-xs-12">
          <div className="left-content">
            <div className="inside-content">
              <h4>Front-End Web Development. HTML to React</h4>
              <div className="white-border-button">
                <a href="/">View More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-12">
          <div className="center-image">
            <div className="inside-content">
              <img src="img/center-image.png" alt />
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-5 col-xs-12">
          <div className="right-content">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <p>“Phasellus in nulla non ante tempor maximus. Mauris bibendum augue vel neque maximus, eget venenatis neque condimentum. Quisque suscipit porta finibus. Mauris volutpat commodo mattis.”</p>
              </div>
              <div className="item">
                <p>“Vestibulum posuere iaculis diam, in faucibus urna. Duis nisl tellus, gravida in lacinia consequat, aliquet ac ligula. Etiam bibendum ligula a nunc malesuada, non congue tortor porttitor.”</p>
              </div>
              <div className="item">
                <p>“Nullam sit amet sapien libero. Nulla arcu elit, auctor a odio nec, ultrices ultricies felis. Quisque pretium tempor odio, ut consectetur lectus semper a.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    )
}
