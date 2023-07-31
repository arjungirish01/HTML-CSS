
let res={
  win:0,
  loss:0,
  guess:0
};
let a;
let min=1;
let max=100;
let rand=parseInt(Math.floor(Math.random()*((max-min+1)+min)));
while(res.guess<10){
  console.log(res);
  a=parseInt(prompt("Guess the number 1-100"));
  if(a===rand){
    res.win++;
    confirm("correct");
    break;
  }
  else if(rand<a){
    confirm("guess is greater");
    res.loss++;
  }
  else{
    confirm("guess is lesser");
    res.loss++;
  }
  res.guess++;
}
