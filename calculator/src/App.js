import {useState,useEffect} from "react";
// komnedna do package npm i react-number-format
// naprawić problem z packegem poszukać w necie
import { NumericFormat } from 'react-number-format';

function App() {
  //state do wrzucania danych z klawiatury
  const [input,setInput] = useState("0");
  const [prestate,setPrestate] = useState("");
  const [curstate,setCurstate] = useState("");
  const [operator,setOperator] = useState("");
  //state sprawdza czy można wykonac operacje matematyczną
  const [total,setTotal] = useState(false);

  // funkcja do wprowadania wartości 
  const inputNum = (e) =>{
    // można tylko raz wstawić przecinek(kropke przy liczbach float)
    if(curstate.includes(".") && e.target.innerText === ".") return;
  
    if(total){
      setPrestate("");
    }

    curstate ? setCurstate((pre) => pre + e.target.innerText):setCurstate(e.target.innerText);
  
    setTotal(false);
  }
  // przy odpaleniu aplikacji wartość w polu wyświetalnia obliczeń wynosi 0

  useEffect(()=>{
    setInput("0");
  },[]);

  // zmiana przy kliknięciu liczby lub operatora
  useEffect(()=>{
    setInput(curstate);
  },[curstate]);

  // czyszczenie
const reset = () =>{
  setPrestate("")
  setCurstate("");
  setInput("0")
}

// wstawianie znaków do pola liczb
const operatorType = (e) =>{
  setTotal(false);
  setOperator(e.target.innerText);

  if(curstate === "")return
  if(prestate !== ""){
    equals();
  }
  else{
    setPrestate(curstate);
    setCurstate("");
  }
};

// sprawdzanie czy koniec operacji matematycznych
const equals = (e) =>{
  if(e?.target.innerText === "="){
    setTotal(true);
  }

// co ma zrobić jak będzie konkretny znak 
let calculator, div, mul;

switch(operator){
  case "/":
    div= parseFloat(prestate) / parseFloat(curstate);
  // sprawdza czy jest wartość decimal
    if(div % 1 !== 0){
      calculator = div.toFixed(3);
    }
    else{
      calculator = String(div);
    }
    break;
 case "*":
  mul = parseFloat(prestate) * parseFloat(curstate);
  if(mul % 1 !== 0){
    calculator = mul.toFixed(3);
  }
  else{
    calculator = String(mul);
  }
  break;
 case "+":
  calculator = String(parseFloat(prestate)+parseFloat(curstate));
  break;
 case "-":
  calculator = String(parseFloat(prestate)-parseFloat(curstate));
  break;
  default:
    return;
}
setInput("");
setPrestate(calculator);
setCurstate("");

}
  return (
    <>
    <div className="CalcOptions">
      <div className="LabelOne">
        <h3>Options</h3>
      </div>
      <div className="LabelTwo">
        <h3>Mode</h3>
      </div>
      <button>Standard</button>
      <button>Programmer</button>
      <button>Dark/White</button>
    </div>
    <div class="calculator">
        {/*<input type="text" class="screen" value=""/>*/}
        <div class="screen">{input !== "" || input === 0 ?(
          <NumericFormat
          value={input}
          displayType = {"text"}
          thousandSeparator={true}
          />
        ) : (
          <NumericFormat
          value={prestate}
          displayType={"text"}
          thousandSeparator = {true}
          />
        )}</div>

        <div class="buttons">
            <button type="button" class="operator btn btn-info" onClick={operatorType}>+</button>
            <button type="button" class="operator btn btn-info" onClick={operatorType}>-</button>
            <button type="button" class="operator btn btn-info" onClick={operatorType}>*</button>
            <button type="button" class="operator btn btn-info" onClick={operatorType}>/</button>

            <button type="button" value="7" class="operator btn btn-light" onClick={inputNum}>7</button>
            <button type="button" value="8" class="operator btn btn-light" onClick={inputNum}>8</button>
            <button type="button" value="9" class="operator btn btn-light" onClick={inputNum}>9</button>

            <button type="button" value="4" class="operator btn btn-light" onClick={inputNum}>4</button>
            <button type="button" value="5" class="operator btn btn-light" onClick={inputNum}>5</button>
            <button type="button" value="6" class="operator btn btn-light" onClick={inputNum}>6</button>

            <button type="button" value="1" class="operator btn btn-light" onClick={inputNum}>1</button>
            <button type="button" value="2" class="operator btn btn-light" onClick={inputNum}>2</button>
            <button type="button" value="3" class="operator btn btn-light" onClick={inputNum}>3</button>

            <button type="button" value="." class="operator btn btn-secondary" onClick={inputNum}>.</button>
            <button type="button" value="0" class="operator btn btn-light" onClick={inputNum}>0</button>
            <button type="button" class="operator btn btn-danger btn-sm" onClick={reset}>AC</button>

            <button type="button" class="equal-sign btn btn-light" onClick={equals}>=</button>
        </div>
    </div>
    </>
  );
}

export default App;


