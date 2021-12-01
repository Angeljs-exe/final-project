import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Subfooter from "../components/Subfooter";
import Video from "../components/Video";
import Image from "../components/Image";

export default function Homepage() {
    return (
<div>
  <div className="wrap">
    <Header />
  </div>
  <div className="banner">
    <Banner />
  </div>
  <div className="template-presentation">
    <Presentation />
  </div>
  <div className="left-right-image">
    <Image />
  </div>
  <div className="video">
   <Video />
  </div>
  <footer>
    <div className="container">
     <Footer />
    </div>
  </footer>
  <div className="sub-footer">
    <Subfooter />
    </div>
    </div>

    )
}
