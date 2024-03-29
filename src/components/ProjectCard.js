import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imageURL }) => {
    return (
        <Col sm={ 6 } md={ 4 }>
            <div className="proj-imgbx" onClick={ () => console.log("Click") }>
                <img src={ imageURL } alt="Project" />
                <div className="proj-txtx">
                    <h4>{ title }</h4>
                    <span>{ description }</span>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;
