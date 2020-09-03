import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';
import UseMouseCoordinante from './MouseTracker'



function App() {
  const Step =10

  const {x,y}= UseMouseCoordinante()
  const [Height,SetHeight] = useState(0)
  const [Width,SetWidth] = useState(4)

function SetCoor(xin,yin){
  console.log(xin,yin)
  SetHeight(yin);
  SetWidth(xin);
}

  useEffect(()=>{SetCoor(x,y)})

  function MoveUp(){
   SetHeight(Height-Step)
  } 
  function MoveDown(){
    SetHeight(Height+Step)
   }
   function MoveLeft(){
    SetWidth(Width-Step)
   }
   function MoveRight(){
    SetWidth(Width+Step)
   }
  
  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button 
      <button onClick={MoveUp}>👆 Move Up 👆</button>
      <button onClick={MoveDown}>👆 Move down 👆</button>
      <button onClick={MoveLeft}>👆 Move left 👆</button>
      <button onClick={MoveRight}>👆 Move right 👆</button>

      {/* move this box using inline styles */}
      {}
      <div className="box" style={{left:Width,top:Height}} />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
