import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let rows :any=[["b1","b2","b3"],["b4","b5","b6"],["b7","b8","b9"]];
  const [isuser1, setisuser1] = useState(true)
  
  const [display, setdisplay] = useState([["","",""],["","",""],["","",""]])
  const handleClick = (e:MouseEvent,i,j)=>{
    let temp = [...display]
    if(isuser1&&display[i][j]==""){
      temp[i][j] = 'X'
      setdisplay(temp)
    }
    else{
      if(display[i][j]==""){
        temp[i][j] = 'O'
        setdisplay(temp)
      }
    }
  }
  useEffect(()=>{
    setisuser1(prev => !prev)
  },[display])
  const checkWinner = ()=>{
    if(display[0][0]==display[1][1]&&display[2][2]==display[1][1]){
      if(display[0][0]!="")
      alert(display[0][0]+" is the winner")
    }
    else if(display[0][2]==display[1][1]&&display[2][0]==display[1][1]){
      if(display[0][2]!="")
      alert(display[0][2]+" is the winner")
    }
    else{
      display.forEach((e)=>{
        if(e[0]==e[1]&&e[2]==e[1]){
          if(e[0]!="")
          alert(e[0]+" is the winner")
        }
      })
      for(let k =0;k<3;k++){
        if(display[0][k]==display[1][k]&&display[1][k]==display[2][k]){
          if(display[0][k]!="")
          alert(display[0][k]+" is the winner");
        }
      }
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="grid grid-cols-3 gap-1">
          {rows.map((element,i) => {
            return element.map((e,j)=>{
              return (
                <div onClick={(event)=>{handleClick(event,i,j), checkWinner()}} key={j} className="bg-blue-600 hover:bg-blue-800 transition-all duration-300 text-white text-2xl font-bold w-16 sm:w-32 h-16 sm:h-32 flex items-center justify-center rounded-md
                ">
              {display[i][j]}
            </div>)
            })
          })}
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded focus:outline-none"
          onClick={()=>{window.location.reload(); }}
        >
          Reset Game
        </button>
      </div>
    </>
  );
}

export default App;
