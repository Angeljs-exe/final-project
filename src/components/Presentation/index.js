import Fade from 'react-reveal/Fade';

export default function Presentation() {
    return (
        <Fade right>

        <div className="container">
        <div className="col-md-7 hidden-xs hidden-sm">
          <div className="left-image">
            <img src="img/template-image.png" alt />
          </div>
        </div>
        <div className="col-md-5 hidden-xs hidden-sm">
          <div className="right-content">
            <div className="author-image">
              <img src="img/template-author.png" alt />
            </div>
            <h4>Mauris tristique tempus dapibus. Nulla quis risus euismod, imperdiet nisl sed.</h4>
            <div className="blue-button">
              <a href="/">View More</a>
            </div>
          </div>
        </div>
        <div className="col-md-5 hidden-lg hidden-md">
          <div className="right-content">
            <div className="author-image">
              <img src="img/template-author.png" alt />
            </div>
            <h4>Mauris tristique tempus dapibus. Nulla quis risus euismod, imperdiet nisl sed.</h4>
            <div className="blue-button">
              <a href="/">View More</a>
            </div>
          </div>
        </div>
        <div className="col-md-7 hidden-lg hidden-md">
          <div className="left-image">
            <img src="img/template-image.png" alt />
          </div>
        </div>
      </div>

      </Fade>
    )
}
