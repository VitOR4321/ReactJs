import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'

export const CV = () => {
return(
    <section className='CV' id="skills">
        <Container>
            <Row>
                <Col>
                <h2>Curriculum Vitae</h2>
                <p>Third year IT student at Gdynia Maritime University looking for an IT job in the Tricity area. I am in full-time studies, and most interested in a half or 3/4 time job remotely , hybrid, or stationary in the Tricity area. I am a young, communicative, ambitious person looking to gain a lot of experience in the IT.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>About my</h3>
                <p>I am currently 22 years old and looking for my first commercial experience in the IT sector. I have a repository on the Github platform where I have all my projects saved. In the future I would like to become a Fullstack developer, so I am interested in working on the forntend as well as the backend. </p>
                <p>Currently, I am also the chairman of the university e-Business Study Circle in Gdynia where I organize the work of members in IT projects using <b>Agile</b> methodology, and organize events at the university.</p>
                <p>Check out our website: <a href='https://kneb.wznj.umg.edu.pl/'><b>KNEB</b></a></p>
                </Col>
                <Col>
                <h3>Technologies</h3>
                <p>Technologies I learned in university: </p>
                <ul>
                    <li>C#</li>
                    <li>Java</li>
                    <li>HTML and CSS</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>XML</li>
                    <li>JSON</li>
                    <li>Linux</li>
                    <li>Docker</li>
                </ul>
                <p>Technologies I learned in free time: </p>
                <ul>
                    <li>Bootstrap</li>
                    <li>AngularJS</li>
                    <li>ReactJS</li>
                    <li>Kotlin</li>
                    <li>Pyton</li>
                </ul>
                </Col>
                <Col>
                <h3>Frameworks</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Education</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 <h3>Excperience</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
        </Container>
    </section>
)
}