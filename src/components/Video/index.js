import Fade from 'react-reveal/Fade';

export default function Video() {
    return (
        <Fade right>

        <div className="container-fluid">
        <div className="col-md-4">
          <div className="text-content">
            <div className="inside-content">
              <h4>Brunch HTML Template is provided by Tooplate for free of charge. You can use it for your website. Thank you.</h4>
              <div className="white-border-button">
                <a href="/">View More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div id="video-container">
            <div className="video-overlay" />
            <div className="video-content">
              <div className="inner">
                <a href="http://youtube.com" target="_blank"><i className="fa fa-play" /></a>
              </div>
            </div>
            <video autoPlay loop muted>
              <source src="videos/highway-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      </Fade>
    )
}
