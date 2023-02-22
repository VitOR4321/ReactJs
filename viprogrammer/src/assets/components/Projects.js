import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () => {

    const projectsReact=[
        {
            // zrobić tak że title będzie linkiem do repo
            // dodać parametr do linka np link: "link do repo"
            title: "Calculator",
            description: "opis",
            imgUrl: projImg1,
        },
        {
            title: "ToDoList",
            description: "opis",
            imgUrl: projImg1,
        },
        {
            title: "Vpaint portfolio",
            description: "opis",
            imgUrl: projImg1,
        },
        {
            title: "Vprog portfolio",
            description: "opis",
            imgUrl: projImg1,
        },
    ]
        const projectsJavascript=[
            {
                title: "Calculator",
                description: "",
                imgUrl: projImg2,
            },
            {
                title: "ToDoList",
                description: "",
                imgUrl: projImg2,
            },
            {
                title: "Vpaint portfolio",
                description: "",
                imgUrl: projImg2,
            },
            {
                title: "Vprog portfolio",
                description: "",
                imgUrl: projImg2,
            },
    ]

    const projectsCsharp=[
        {
            title: "Calculator",
            description: "",
            imgUrl: projImg3,
        },
        {
            title: "ToDoList",
            description: "",
            imgUrl: projImg3,
        },
        {
            title: "Vpaint portfolio",
            description: "",
            imgUrl: projImg3,
        },
        {
            title: "Vprog portfolio",
            description: "",
            imgUrl: projImg3,
        },
]
const projectsJava=[
    {
        title: "Calculator",
        description: "",
        imgUrl: "",
    },
    {
        title: "ToDoList",
        description: "",
        imgUrl: "",
    },
    {
        title: "Vpaint portfolio",
        description: "",
        imgUrl: "",
    },
    {
        title: "Vprog portfolio",
        description: "",
        imgUrl: "",
    },
]
const projectsPHP=[
    {
        title: "Calculator",
        description: "",
        imgUrl: "",
    },
    {
        title: "ToDoList",
        description: "",
        imgUrl: "",
    },
    {
        title: "Vpaint portfolio",
        description: "",
        imgUrl: "",
    },
    {
        title: "Vprog portfolio",
        description: "",
        imgUrl: "",
    },
]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Tab.Container id="projects-tab" defaultActiveKey="React">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="React">React</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Javascript">Javascript</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Csharp">C#</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Java">Java</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="PHP">PHP</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <br></br>
                        <Tab.Content>
                            <Tab.Pane eventKey="React">
                                <Row>
                                    {
                                        projectsReact.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Javascript">
                                <Row>
                                    {
                                        projectsJavascript.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Csharp">
                                <Row>
                                    {
                                        projectsCsharp.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Java">
                                <Row>
                                    {
                                        projectsJava.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="PHP">
                                <Row>
                                    {
                                        projectsPHP.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}