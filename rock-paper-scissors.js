let score=JSON.parse(localStorage.getItem('score'));
      if(!score){
        score={
          win:0,
          lost:0,
          tie:0
        };
      }
      updateElement();
      function computerMove(){
        let randNum=Math.random();
        if(randNum>0 && randNum<1/3)
            return 'rock';
        else if(randNum >1/3 && randNum <2/3)
            return 'paper';
        else
          return 'scissors';
      }

      function game(comMove,playerMove){
        let res;
        if(playerMove===`rock`){
          if(comMove===`rock`){
            score.tie++;
            res='Tied';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
          else if(comMove===`scissors`){
            score.win++;
            res='Won';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
          else{
            score.lost++;
            res='Lost';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
        }

        else if(playerMove===`scissors`){
          if(comMove===`rock`){
            score.lost++;
            res='Lost';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
          else if(comMove===`scissors`){
            score.tie++;
            res='Tied';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
          else{
            score.win++;
            res='Won';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
        }

        else{
          if(comMove===`rock`){
            score.win++;
            res='Won';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
          else if(comMove===`scissors`){
            score.lost++;
            res='Lost';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
          else{
            score.tie++;
            res='Tied';
            //console.log(alert(`Computer:${comMove} Tie Game\n Win:${score.win} Lost:${score.lost} Tie:${score.tie}`));
          }
        }
        localStorage.setItem('score',JSON.stringify(score)); //localStorage can only store string
        updateElement();
        document.querySelector('.moves').innerHTML=`You
      <img src="${playerMove}-emoji.png" class="img-button">
      Computer
      <img src="${comMove}-emoji.png" class="img-button">`;
        document.querySelector('.status').innerHTML=`You ${res}`;
      }
      
      function updateElement(){
        document.querySelector('.scoreUpdate').innerHTML=`Win:${score.win} Lost:${score.lost} Tie:${score.tie}`;
      }
