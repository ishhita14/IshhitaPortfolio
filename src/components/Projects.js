import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "",
      description: "A live project carried out under the mentorship of Dr. Neeraj Jain, Asst. Professor at JIIT Noida, to ensure proper maintenance and organisation of Vishnuprayag Hydropower Plant operated by JPVL. This project uses API and IOT technology to sense, monitor and store the weather conditions at Mana village of Uttarakhand. ",
      imgUrl: projImg1,
      url: "https://automatic-weather-monitoring-system.netlify.app/"
    },
    {
      title: "",
      description: "A MERN Stack website developed in a team of 4 members as part of the Minor project in 3rd year. This project uses ReactJS for frontend and MongoDB for database.",
      imgUrl: projImg2,
      url: "https://sadhana-minor.vercel.app/"
    },
    {
      title: "",
      description: "A dynamic, interactive game made majorly using JavaScript that works on user’s input from keyboard. This project displays advanced programming and analytical skills which has led to such seamless gameplay.",
      imgUrl: projImg3,
      url :"https://mini-table-tennis-by-ishhita.vercel.app/"
    },
    {
      title: "",
      description: "The project utilizes HTML to structure the different sections of the page, CSS to style and layout the elements, and JavaScript to add interactivity and dynamic features. This project is my attempt to demonstrate my proficiency in HTML, CSS, and JavaScript, as well as my ability to replicate the visual and interactive aspects of a popular web application. One of my personal favourites :)",
      imgUrl: projImg4,
      url: "https://spotify-dummy-page.vercel.app/"
    },
    {
      title: "Speed Route",
      description: "DSA",
      imgUrl: projImg5,
      url:""
    },
    {
      title: "OOPS Project",
      description: "DSA, OOPS",
      imgUrl: projImg6,
      url : ""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>During the course of my development journey, I have worked on several projects. These are some of my personal favourites. Stay tuned for upcoming projects because development never stops! :&#41;</p>
                
                  
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
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
