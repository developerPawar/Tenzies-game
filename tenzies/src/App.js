import React from "react";
import Die from "./components/Die"
export default function App(){
  // Generates array of 10 random integers from 1-6
  // runs for loop 10 times pushes each random number at last of array 
  // .floor is used for only getting integers, .random * (1 - lowest value +  highest val) + lowest val
  function allNewDice(){
    const randNumArray = []
    for(let i=0;i<10;i++){
      randNumArray.push(Math.floor(Math.random() * (1 - 1 + 10)) + 1 )
    }
    return randNumArray;
  }
  const [dice,setDice]=React.useState(allNewDice())
  const diceElements = dice.map(die=>{
    return <Die value={die} />
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
      <div className="die-holder">
        {diceElements}
      </div>
    </main>
  )
}