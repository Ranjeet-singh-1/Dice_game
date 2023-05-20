const handleClick=()=>{
Dice1 = Math.floor(Math.random() * 6) + 1 // to generate a random number from 1-6
Dice2 = Math.floor(Math.random() * 6) + 1

if (Dice1 > Dice2)
    document.querySelector('.output').innerHTML = '🚩 Player-1 Wins'
else if (Dice1 == Dice2)
    document.querySelector('.output').innerHTML = 'Draw'
else
    document.querySelector('.output').innerHTML = '🚩 Player-2 Wins'

document.querySelector('.image-1').attributes.src.value=`./images/dice${Dice1}.png`;
document.querySelector('.image-2').attributes.src.value=`./images/dice${Dice2}.png`;
}