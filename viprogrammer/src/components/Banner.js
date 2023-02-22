import { useState, useEffect } from 'react'
import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import CircleFace from '../assets/img/PorftfolioImage.png'

// https://www.youtube.com/watch?v=hYv6BM2fWd8&t=162s
export const Banner = () =>{
    // state potrzebne do wyświetlenia nieregularnie napisów w tagu
    // start wypisania słowa
    const [loopNum, setLoopNum]= useState(0);
    // warunek czy cofać słowo
    const [isDeleting, setIsDeleting] = useState(false);
    // zmienna "temp" która zawierać będzie aktualny tekst
    const [text,setText] = useState('');
    // delta potrzebna do randomowego pokazania kolejnych liter i usuwania, inaczej interwał
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate =["Javascript", "ReactJS","HTML/CSS", "Bootstrap", "Csharp/ASP.NET", "Java/Spring", "PHP/Laravel", "SQL/Postgress", "Android Studio"];
    const period = 2000;

    // funkcja do wyświetlenia tekstu
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1);
        
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

  return (
    <section className='banner' id="home">
        <Container>
            <Row className="align-item-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Programmer Portfolio website</span>
                    <h1>{'Hi, my name\'s Wiktor '}</h1>
                    <h1><span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={CircleFace} alt='portfolio Wiktor'/>
                <h2>Wiktor Górski</h2>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
