/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScore,activePlayer,gamePlaying,rollScore= 0,winScore,p1n,p2n,p1u1,p2u2;
init();
input();
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        rollScore = Math.floor(Math.random() * 6 +1);
            if((rollScore != p1u1 && activePlayer === 0) || (rollScore != p2u2 && activePlayer === 1)){
            document.querySelector('.btn-roll').style.display = 'none';
            roundScore += rollScore;
            document.querySelector('.dice').style.display = 'block';
            document.querySelector('.dice').style.height = '100px';
            myMove();
            document.querySelector('.dice').src = 'dice-' + rollScore + '.png';
            
        }else{
            change();
            myMove2();
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.dice').style.display = 'block';
            document.querySelector('.dice').style.height = '150px';
            document.querySelector('.dice').src = 'dice-' + rollScore + '.png';
            
            
            
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        score[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if(score[activePlayer] >= winScore){
            audio4();
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
            
            
        }else{
            change();
            audio3();
        }
    }
});
document.querySelector('.btn-new').addEventListener('click',function(){
    init();
    input();
    
});

function change(){
        document.getElementById('current-' + activePlayer).textContent = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        roundScore = 0;
}



function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('h2').style.display = 'block';
        document.getElementById('myForm').style.display = 'block';
    document.querySelector('.button').style.display = 'block';
    document.querySelector('.p1e').style.display = 'none';
        document.querySelector('.p2e').style.display = 'none';
    
    
}
function input(){
    document.querySelector('.button').addEventListener('click',function(){
    p1n = document.getElementById('p1').value;
    p1u1 = document.getElementById('p1u1').value;
    p2n = document.getElementById('p2').value;
        p2u2 = document.getElementById('p2u2').value;
    winScore = document.getElementById('ws').value;
        if((p1u1 <= 6 && p1u1 >= 1) && (p2u2 >= 1 && p2u2 <= 6)){
        document.querySelector('.dicep1').src = 'dice-' + p1u1 + '.png';
        document.querySelector('.dicep2').src = 'dice-' + p2u2 + '.png';
        document.getElementById('name-0').textContent = p1n;
    document.getElementById('name-1').textContent = p2n;
    document.querySelector('.winscore').textContent = 'Winning score:' + winScore;
    document.querySelector('.wrapper').style.display = 'block';
        document.querySelector('h2').style.display = 'none';
        document.getElementById('myForm').style.display = 'none';
        document.querySelector('.button').style.display = 'none';
        document.querySelector('.p1e').style.display = 'none';
        document.querySelector('.p2e').style.display = 'none';}
        else if(p2u2 >= 1 && p2u2 <= 6){
            document.querySelector('.p2e').style.display = 'none';
            document.querySelector('.p1e').style.display = 'block';
        }else if(p1u1 <= 6 && p1u1 >= 1){
            document.querySelector('.p1e').style.display = 'none';
            document.querySelector('.p2e').style.display = 'block';
            document.querySelector('.p2e').style.marginTop = '280px';
        }else{
            document.querySelector('.p1e').style.display = 'block';
            document.querySelector('.p2e').style.display = 'block';
            document.querySelector('.p2e').style.marginTop = '120px';
        }
        
});
}
function myMove() {
    audio();
    var elem = document.querySelector('.dice'); 
    var pos = 0;
    var id = setInterval(frame, 80);
    var id2 = setInterval(mytimer, 2000);
    var id3 = setInterval(mytimer2, 2500);
    function frame() {
        if (pos == rollScore) {
            pos = 0;
            clearInterval(id);
        } else {
            pos++; 
            elem.src = 'dice-' + pos + '.png';
        }
    }
    function mytimer() {
        if (pos == rollScore) {
            pos = 0;
            clearInterval(id2);
        } else {
            pos++; 
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    }
    function mytimer2(){
        document.querySelector('.btn-roll').style.display = 'block';
    }
    
}
function myMove2() {
    audio2();
    var elem = document.querySelector('.dice'); 
    var pos = 0;
    var id = setInterval(frame, 80);
    var id2 = setInterval(mytimer, 2000);
    var id3 = setInterval(mytimer2, 2500);
    function frame() {
        if (pos == rollScore) {
            pos = 0;
            clearInterval(id);
        } else {
            pos++; 
            elem.src = 'dice-' + pos + '.png';
        }
    }
    function mytimer() {
        if (pos == rollScore) {
            pos = 0;
            clearInterval(id2);
        } else {
            pos++; 
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    }
    function mytimer2(){
        document.querySelector('.btn-roll').style.display = 'block';
    }
}
function audio(){
    var x = document.getElementById('myaudio');
    x.play();
}
function audio2(){
    var x = document.getElementById('myaudio2');
    x.play();
}
function audio3(){
    var x = document.getElementById('myaudio3');
    x.play();
}
function audio4(){
    var x = document.getElementById('myaudio4');
    x.play();
}

