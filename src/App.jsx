import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './users'
import ToDo from './Todo'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

function App() {
  return (
    <>
    <h1>Vite + React </h1>
    <ToDo task = "Learn react : "></ToDo>
    
 <Suspense fallback={<h3>Loading.....</h3>}>
  <Users fetchUsers={fetchUsers}></Users>
 </Suspense>

    <Person></Person>
    <Sports></Sports>
    <Developer name ="Hriday" tec=" Python" ></Developer>
    <Developer name = "Rezvi" tec= " Java"></Developer>
    <Salami event="Roja Eid" amount="20"></Salami>
    <Salami event="Roja Eid" amount="50"></Salami>
    </>
  )
  
}

function Salami({event,amount}){
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      marginBottom: '5px',
      backgroundColor :'white',
      color: 'black',
    }} className='Universal'>
      <p>Salami For:{ event} </p>
      <p> Amount:{amount} </p>
    </div>
  )
}

function Person(){
let age = 22;
  return (
    <>
    <p>I am Hriday {age}</p>
    </>
  )
}
function Sports(){
  return (
    <div> 
      <h3>I love Crecket</h3>
    <p>Sports Component</p>
    </div>
  )
}
function Developer(props) {
  return(
    <div style={
      {
        border: '2px solid green',
        borderRadius: '20px',
        marginBottom: '5px',
        backgroundColor :'white',
        color: 'black',

      }}>
        <h3>Developer: {props.name}
        </h3>
        <p>Technology:{props.tec} </p>
      </div>
     
    
  )
}

export default App
