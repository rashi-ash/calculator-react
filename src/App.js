import Button from './components/Button';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';
import { evaluate } from 'mathjs';
const App=()=> {
  const[text,setText]=useState("")
  const[result,setResult]=useState("")
  const addText=(val)=>{
    setText((text)=>[...text,val+ ""]);
  };
const calculateResult=()=>{
  const input=text.join("")
  setResult(evaluate(input));
};
  const resetInput=()=>{
    setText("");
    setResult("");
  };
  const buttonColor="#474E68"
  return (
    <div className="App">
    <div className='calc-wrapper'>
      <Input text={text} result={result}/>
      <div className=' row'>
      <Button symbol="7" handleClick={addText}/>
      <Button symbol="8" handleClick={addText}/> 
      <Button symbol="9" handleClick={addText}/>
      <Button symbol="/" color={buttonColor} handleClick={addText}/> 
      </div>
      <div className=' row'>
      <Button symbol="4" handleClick={addText}/>
      <Button symbol="5" handleClick={addText}/> 
      <Button symbol="6" handleClick={addText}/> 
      <Button symbol="*" color={buttonColor} handleClick={addText}/> 
      </div>
      <div className=' row'>
      <Button symbol="1" handleClick={addText}/> 
      <Button symbol="2" handleClick={addText}/> 
      <Button symbol="3" handleClick={addText}/> 
      <Button symbol="+" color={buttonColor} handleClick={addText}/> 
      </div>
      <div className=' row'>
      <Button symbol="0" handleClick={addText}/> 
      <Button symbol="." handleClick={addText}/> 
      <Button symbol="=" handleClick={calculateResult}/> 
      <Button symbol="-" color={buttonColor} handleClick={addText}/> 
      </div>
      <Button symbol="Clear" color="red" handleClick={resetInput}/> 
      </div> 
    </div>
  );
}

export default App;
