var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);

var randomImageSource1="images/dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource1);

var randomImageSource2="images/dice"+randomNumber2+".png";

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);


var winner=document.querySelector("h1");
if (randomNumber1>randomNumber2)
{
    winner.innerHTML="🚩Player 1 wins";
}
else if(randomNumber1==randomNumber2)
{
    winner.innerHTML="Draw";
}
else{
    winner.innerHTML="Player 2 wins 🚩";
}