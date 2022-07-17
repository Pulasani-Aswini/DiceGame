var player1=document.getElementById("p1");
var player2=document.getElementById("p2");
var p1ran=Math.random()*6;
var p2ran=Math.random()*6;
p1ran=Math.floor(p1ran)+1;
p2ran=Math.floor(p2ran)+1;
function setdiece(x){
    if(x==1)
        return "images/dice1.png";
    else if(x==2)
        return "images/dice2.png";
    else if(x==3)
        return "images/dice3.png";
    else if(x==4)
        return "images/dice4.png";
    else if(x==5)
       return "images/dice5.png";
    else if(x==6)
       return "images/dice6.png";
}
player1.src=setdiece(p1ran);
player2.src=setdiece(p2ran);
if(p1ran>p2ran){
    document.querySelector("h1").innerHTML="🚩Player1 Wins!!";
}
else if(p1ran<p2ran)
{
    document.querySelector("h1").innerHTML="Player2 Wins!! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}