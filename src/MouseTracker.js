import {useState, useEffect} from 'react'

const UseMouseCoordinante = ()=> {

  const [MouseCoordinates,SetMouseCoordinates] =useState({x:null,y:null})

  const Updatemouseposition = e =>{SetMouseCoordinates({x:e.clientX,y:e.clientY})}

  useEffect(()=> {window.addEventListener("mousemove",Updatemouseposition)
  return ()=> {window.removeEventListener("mousemove",Updatemouseposition)}

  })

  return(MouseCoordinates)
} 

export default UseMouseCoordinante