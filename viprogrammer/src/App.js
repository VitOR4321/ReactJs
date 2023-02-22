import "./App.css";
import  {NavBar} from './components/NavBar';
import  {Banner} from './components/Banner';
import {CV} from './components/CV';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <CV />
        <Projects/>
        <Footer/>
      </div>
    );
  }
  
  export default App;
  