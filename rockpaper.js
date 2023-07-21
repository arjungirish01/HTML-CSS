
  let scoreElement=document.querySelector('.score');
  let score=JSON.parse(localStorage.getItem('score'))||{
    Win:0,
    Lost:0,
    Tie:0
  };
  scoreElement.innerHTML=`Win: ${score.Win} Lost: ${score.Lost} Tie: ${score.Tie}`;


  let isAuto=false;
  let autoId;
  function autoPlaying(){
  if(!isAuto){
    
    autoId=setInterval(function(){
      let player=computerMove();
      gamePlay(player);
    },1000);
    isAuto=true;
  }
  else{
    clearInterval(autoId);
    isAuto=false;
  }
}

  function computerMove(){
  let ran=Math.random();
  let move;
  if(ran>0&&ran<1/3){
    move='paper';
  }
  else if(ran>1/3&&ran<2/3){
    move='rock';
  }
  else{
    move='scissors';
  }
  return move;
}


  function gamePlay(player){
    let com=computerMove();
    let res='';
    if(player==='rock'){
      if(com==='rock'){
        score.Tie++;
        res='Tie';
      }
      else if(com==='paper'){
        score.Lost++;
        res='Lost';
      }
      else{
        score.Win++;
        res='Won';
      }
    }
    else if(player==='paper'){
      if(com==='rock'){
        score.Win++;
        res='Won';
      }
      else if(com==='paper'){
        score.Tie++;
        res='Tie';
      }
      else{
        score.Lost++;
        res='Lost';
      }
    }
    else{
      if(com==='rock'){
        score.Lost++;
        res='Lost';
      }
      else if(com==='paper'){
        score.Win++;
        res='Won';
      }
      else{
        score.Tie++;
        res='Tie';
      }
    }
    let html='';
    let moveElement=document.querySelector('.moves');
    html=`You: <img src="${player}-emoji.png" class="image">
          Computer: <img src="${com}-emoji.png" class="image">`;
    moveElement.innerHTML=html;
    localStorage.setItem('score',JSON.stringify(score));
    let resElement=document.querySelector('.result');
    resElement.innerHTML=res;
    updateScore();
  }

  function updateScore(){
    scoreElement.innerHTML=`Win: ${score.Win} Lost: ${score.Lost} Tie: ${score.Tie}`;
  }

  function buttonPlay(){
    let buttonplayElement=document.querySelector('.auto-Play');
    if(buttonplayElement.innerText==='Auto Play'){
        buttonplayElement.innerText='Stop';
        buttonplayElement.classList.add('autoPlay-button');
    }
    else{
      buttonplayElement.innerText='Auto Play';
      buttonplayElement.classList.remove('autoPlay-button');
    }
  }