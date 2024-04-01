const cardArray=[
   {
    name:'fries',
    img: 'images/french.png'
   } ,
   {
    name:'burger',
    img: 'images/burger.jpg'
   } ,
   {
    name:'hotdog',
    img: 'images/hotdog.png'
   } ,
   {
    name:'ice-cream',
    img: 'images/ice-cream.jpg'
   } ,
   {
    name:'milkshake',
    img: 'images/milkshake.png'
   } ,
   {
    name:'pizza',
    img: 'images/pizza.jpg'
   } ,
   {
    name:'fries',
    img: 'images/french.png'
   } ,
   {
    name:'burger',
    img: 'images/burger.jpg'
   } ,
   {
    name:'hotdog',
    img: 'images/hotdog.png'
   } ,
   {
    name:'ice-cream',
    img: 'images/ice-cream.jpg'
   } ,
   {
    name:'milkshake',
    img: 'images/milkshake.png'
   } ,
   {
    name:'pizza',
    img: 'images/pizza.jpg'
   } 

   
]
cardArray.sort(()=>0.5-Math.random())
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardChosen=[]
let cardChosenIds=[]
let cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
       const card= document.createElement('img');
  card.setAttribute('src','images/card.png')
  card.setAttribute('data-id',i);
  card.addEventListener('click',flipCard)
  gridDisplay.appendChild(card);
//   console.log(card,i);
    }
}
createBoard();


function checkMatch(){
  const cards=document.querySelectorAll('img')
  const optionOneId=cardChosenIds[0]
  const optionTwoId=cardChosenIds[1]
  console.log(cards)
  console.log('check for match');
  if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src','images/card.png')
    cards[optionOneId].setAttribute('src','images/card.png')
    alert('You have clicked the same image !')
  }
  else if( cardChosen[0] === cardChosen[1]){
   alert('You found a match');
   cards[optionOneId].setAttribute('src','images/blue.jpg')
   cards[optionTwoId].setAttribute('src','images/blue.jpg')
   cards[optionOneId].removeEventListener('click',flipCard)
   cards[optionTwoId].removeEventListener('click',flipCard);
   cardsWon.push(cardChosen)
  }else{
    cards[optionOneId].setAttribute('src','images/card.png')
    cards[optionTwoId].setAttribute('src','images/card.png')
    alert("Not a match try again!")

  }
cardChosen=[]
cardChosenIds=[]
resultDisplay.textContent=cardsWon.length
if(cardsWon.length === (cardArray.length/2)){
resultDisplay.textContent='congratulation all cards matched!'
showFireworks();
}


}

function flipCard(){
    console.log(cardArray)
  let cardId= this.getAttribute('data-id')
  // console.log(cardArray[cardId].name);
  cardChosen.push(cardArray[cardId].name)
  cardChosenIds.push(cardId)
// console.log("clicked",cardId);
this.setAttribute('src',cardArray[cardId].img)
console.log(cardChosen)

if(cardChosen.length === 2){
  setTimeout(checkMatch,500)
}

}
function showFireworks() {
  const fireworksContainer = document.getElementById('fireworks');
  fireworksContainer.innerHTML = '';
  const numFireworks = 30; // Number of fireworks to create
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // List of colors
  for (let i = 0; i < numFireworks; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Choose a random color
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    fireworksContainer.appendChild(firework);
  }
}
