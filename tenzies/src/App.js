import React from "react";
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App(){

  const [dice,setDice]=React.useState(allNewDice())
  const[tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=>{
    const eachHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const checkedValue = dice.every(die => die.value === firstValue)

    if(eachHeld && checkedValue){
      setTenzies(true)
    }
  },[dice])
  // Generates array of 10 random integers from 1-6
  // runs for loop 10 times pushes each random number at last of array 
  // .floor is used for only getting integers, .random * (1 - lowest value +  highest val) + lowest val
  function generateNewDie(){
    return {
      value : Math.floor(Math.random() * (1 - 1 + 10)) + 1,
      isHeld: false,
      id: nanoid()
    }
  }
  function allNewDice(){
    const randNumArray = []
    for(let i=0;i<10;i++){
      randNumArray.push(generateNewDie())
    }
    return randNumArray;
  }
  function rollDice(){
    if(!tenzies){
      setDice(oldDice => oldDice.map(die =>{
        return die.isHeld ? die :  generateNewDie()
      }))
    }else{
      setTenzies(false)
      setDice(allNewDice())
    }
  }
  function holdDice(id){
    setDice(oldDice => oldDice.map(die =>{
        return die.id === id ? {...die, isHeld:!die.isHeld} : die
    }))
  }

  const diceElements = dice.map(die=>{
    return <Die value={die.value} key={die.id} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)}/>
  })
// Another method to generate array of 10 random numbers: 
//   function allNewDice() {
//     const newDice = []
//     for (let i = 0; i < 10; i++) {
//         newDice.push(Math.ceil(Math.random() * 6))
//     }
//     return newDice
// }
  console.log(allNewDice())
  return(
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-holder">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}