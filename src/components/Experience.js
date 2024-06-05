import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import LogiqueCode from "../assets/img/logiquecode.jpg";
import jpvl from "../assets/img/jpvl.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const jobs = [
    {
      title: "LogiqueCode LLP",
      position: "Software Developer Intern",
      imgUrl: LogiqueCode,
      tenure: "June 2024 - Present"
    },
    {
        title: "AWMS for Jaiprakash PV Ltd.",
        position: "Core Member - Development Team",
        imgUrl: jpvl,
        tenure: "January 2024 - May 2024"
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                
                      <Row className="exp-container wow zoomIn">
                        {
                          jobs.map((job, index) => {
                            return (
                              <ExperienceCard
                                key={index}
                                {...job}
                                />
                            )
                          })
                        }
                      </Row>
                    
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
