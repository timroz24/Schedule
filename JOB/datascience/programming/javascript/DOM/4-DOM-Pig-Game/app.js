/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var roundscore, scores, dice, activePlayer;


init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    dice = Math.floor(Math.random() * 6) + 1 ;
    if (dice!=1)
        roundScore += dice;
    else {roundScore = 0; 
          if (activePlayer===0)
              activePlayer=1;
          else activePlayer = 0;
         }
    
    document.getElementById('current-'+activePlayer).textContent = roundScore;
    
    
    console.log(dice);
    
});

function init()
{
    activePlayer = 0;
    roundScore = 0;
    scores = [0,0];
    dice = 0;
}