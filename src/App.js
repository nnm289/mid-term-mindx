
import "./App.css";
import React, { useState } from "react";

function App() {
 const [num2, SetNum2] = useState('');
 const [num1, SetNum1] = useState('');
 const [operator, setOperator] = useState();

 function InputNumber(n) {
   let input = n.target.value;
   if (num2 === '') {
     SetNum2(input);
   }

 }

 function Clear() {
   SetNum2('');
 }


 function Operation(n) {
   let operatorInput = n.target.value;
   setOperator(operatorInput);
   SetNum1(num2);
   SetNum2('');
 }

 function Calculate() {
   if (operator === "/") {
     SetNum2(parseFloat(num1) / parseFloat(num2));
   } else if (operator === "*") {
     SetNum2(parseFloat(num1) * parseFloat(num2));
   } else if (operator === "-") {
     SetNum2(parseFloat(num1) - parseFloat(num2));
   } else if (operator === "+") {
     SetNum2(parseFloat(num1) + parseFloat(num2));
   }
 }
    


  return (
    <div className="App">
      <h1 className="result">{num2}</h1>
      <div className="grid-container">
        <button className="mathSigns grid-item" onClick={Operation} value ={'+'}>+</button>
        <button className="mathSigns grid-item" onClick={Operation} value ={'-'}>-</button>
        <button className="mathSigns grid-item" onClick={Operation} value ={'*'}>x</button>
        <button className="mathSigns grid-item" onClick={Operation} value ={'/'}>÷</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={9}>9</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={8}>8</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={7}>7</button>
        <button className="equalSign grid-item" onClick={Calculate} value ={'='}>=</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={6}>6</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={5}>5</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={4}>4</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={3}>3</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={2}>2</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={1}>1</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={0}>0</button>
        <button className="numbers grid-item" onClick={InputNumber} value ={'.'}>.</button>
        <button className="numbers grid-item" onClick={Clear}>C</button>
      </div>
    </div>
  );
}

export default App;
