//show how many cards each player has and how many left in the deck ADDD 2 to winning count...not just 1!
//player wins when they have all cards in deck
//show additional cards and give winner cards during war
//have war button show up when cards are the same
//allow user to choose multiple decks with conditional so they don't choose too many (over 5 return "that's crazy!")





//Get the deck
let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', getFetch)

let count1 = 0
let count2 = 0

function getFetch(){
  
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let val1 = Number(cardValue(data.cards[0].value))
        let val2 = Number(cardValue(data.cards[1].value))
        document.querySelector('#howManyCardsLeft').innerText = data.remaining
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        if(val1 > val2){
          document.querySelector('h3').innerText = 'Player 1 WON!'
          document.querySelector('#cards1').innerText = ++count1
        }else if(val1 < val2){
          document.querySelector('h3').innerText = 'Player 2 WON!'
          document.querySelector('#cards2').innerHTML = ++count2
        }else{
          document.querySelector('h3').innerText = 'WAR!'
        }
      

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function cardValue(val){
  if(val === "ACE"){
    return 14
  }else if (val === "KING"){
    return 13
  }else if(val === "QUEEN"){
    return 12
  }else if(val === "JACK"){
    return 11
  }else{
    return val
  }
}