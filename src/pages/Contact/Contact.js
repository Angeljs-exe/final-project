import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Service from "../../components/Services";
import Subcribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Subfooter from "../../components/Subfooter";

export default function Contact() {
    return (
        <div>
  <div className="wrap inner-header">
      <Header />
  </div>
  <div className="heading-page">
      <Heading />
  </div>
  <div className="services">
      <Service />
  </div>
  <div className="accordions">
    <Accordion />
  </div>
  <div className="subscribe-form">
      <Subcribe />
  </div>
    <div className="container">
     <Footer />
    </div>
  <div className="sub-footer">
      <Subfooter />
</div>
</div>


    )
}
