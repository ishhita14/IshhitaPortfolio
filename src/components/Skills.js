import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import bulb from "../assets/img/light-bulb.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My skillset includes programming languages and frameworks like C/C++, OOPs, HTML, CSS, JavaScript, ReactJS, SQL and Firebase. <br></br>Currently I am working on enhancing my knowledge in Git, DevOps and Cloud Technologies. Following are the skills wherein I am most confident.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={bulb} alt="Image" style={{height: 140, width: 150}}/>
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={bulb} alt="Image" style={{height: 140, width: 150}}/>
                                <h5>Data Structures and Algorithms</h5>
                            </div>
                            <div className="item">
                                <img src={bulb} alt="Image" style={{height: 140, width: 150}}/>
                                <h5>Object Oriented Programming</h5>
                            </div>
                            <div className="item">
                                <img src={bulb} alt="Image" style={{height: 140, width: 150}}/>
                                <h5>Frontend Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
