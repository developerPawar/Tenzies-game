# Tenzies-game
 React based game to implement and develop the concepts learnt.
 
 ***Short Pointers for a quick go through on the concepts used - 
 1. Built from scratch using react js
 2. Used Props concept
 3. Used useState() and .map() to map the data to Die component.
 4. Used Math.floor(Math.random() * (1 - Low + High)) + Low formula to generate random integer number for the die value
 5. Inside the state looped in the 10 array object with their unique ids using nanoid() function
 6. To void repetition of code, created a standalone function to generate random integer values for the Die, and passed it on wherever required.
 7. Styled the background color of die on selection using conditional rendering approach
 8. Passed a function within a function as a prop in the Die component to pass a parameter to the onClick function Check props.holdDice for reference.
 9. Used React.useEffect to sync the 2 internal states on change of the die values each time new die was generated.
 10. For the final end game logic checked if all die isHeld to be true and if first value in the dice array matches every die value (checked inside use effect) 
 11. To reset the game used if-else condition along with the state to 'tenzies' inside the rollDice function
 12. Used the 'react-confetti' imported it and rendered it using conditional rendering
 13. Also conditional rendering is being used to change the label of the button on winning the game to reset it to 'New game'.
 14. Nanoid and confetti needs to be npm'ed to import them. ;)
