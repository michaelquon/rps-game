var playerChoice = 0;
var compChoice = Math.random();

if(compChoice < 0.34){
    compChoice="Rock";
}
else if(compChoice <= 0.67){
    compChoice="Paper";

}else{
    compChoice="Scissor";
}
