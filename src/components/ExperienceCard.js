import { Col } from "react-bootstrap";

export const ExperienceCard = ({ title, position, imgUrl, tenure }) => {
  

  return (
    <Col size={12} sm={6} md={4}>
      <div className="exp-box" >
        <img src={imgUrl} className="exp-img"/>
        <div className="exp-txt">
          <h5>{title}</h5>
          <p>{position}</p>
          <span>{tenure}</span>
        </div>
      </div>
    </Col>
  )
}
