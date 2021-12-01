import Fade from 'react-reveal/Fade';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Image() {
  
  const [features, setFeatures] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3004/features").then(res => setFeatures(res.data))
  }, [])

    return (
        <Fade left>
<div className="container">
      <div className="col-md-8 col-md-offset-2">
        <div className="right-image">
          <div className="row">
            <div className="col-md-6">
             {
               features.map((item)=>{

                 return(
                   <div>
                  <h2 className="hidden-sm hidden-xs">{item.title}</h2>
                  <span>{item.subTitle}</span>
                  <p>Morbi quam dui, scelerisque cursus nisl et, placerat congue mi. Proin odio massa, tempor id odio eget, mollis molestie dui. Cras elementum mollis nisi, dapibus sagittis leo pretium nec.</p> <br />
                  <p>Aenean lobortis magna purus, quis blandit eros dictum at. Fusce gravida ligula non neque tempor congue. Vivamus efficitur eget nulla vel lacinia.</p>
                 </div>
                 )
               })
             }
             
              <div className="blue-border-button">
                <a href="/">View More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image">
                <img src="img/right-image-post.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div className="left-image">
          <div className="row">
            <div className="col-md-6">
              <div className="image">
                <img src="img/left-image-post.png" alt />
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="hidden-sm hidden-xs">Aliquam luctus convallis <br />tortor in cursus</h2>
              <h2 className="hidden-lg hidden-md">Aliquam luctus convallis tortor in cursus</h2>
              <span>Lorem ipsum dolor sit amet</span>
              <p>Nulla elementum, purus at cursus sollicitudin, dolor est fermentum justo, vel iaculis nibh lectus non elit. Cras bibendum felis tincidunt mauris tincidunt facilisis. Aenean porttitor lectus quis nulla laoreet, eget pulvinar leo ultricies.</p> <br /> 
              <p>Mauris tristique tempus dapibus. Nulla quis risus euismod, imperdiet nisl sed, mattis magna. Nunc sed malesuada purus. Quisque urna nunc, lacinia vel ipsum tristique, finibus sollicitudin massa.</p>
              <div className="blue-border-button">
                <a href="/">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
    )
}
