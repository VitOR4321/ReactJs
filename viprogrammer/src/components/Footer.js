import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logoVipaint.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center text-center">
                    <Col sm={4}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end">
                        <h2>Feel free to catch contact</h2>
                        <h3>Email Contact: wgorskiii@op.pl</h3>
                        <h3>Phone Contact: +48 793 535 913</h3>
                    </Col>
                    <Col sm={4} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href=""><img src={navIcon1} alt="Linkedin"/></a>
                        <a href="https://github.com/VitOR4321"><img src={navIcon5} alt="GitHub"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}