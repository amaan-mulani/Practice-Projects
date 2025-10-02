
//Dice randomizer for Player 1
let randomNumber1=Math.floor(Math.random()*6)+1; //Radnom Number between 1-6
console.log(randomNumber1)

let randomNumberDice="dice" + randomNumber1 +".png"; //Concat for getting dice1-6.png

let randomImageSource1="Images/" + randomNumberDice; //Concating for the whole source path

let image1=document.querySelectorAll("img")[0]; //variable storing player 1's dice

image1.setAttribute("src",randomImageSource1); //setting source to image

//Dice radomizer for Player 2
let randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

let randomNumberDice2="dice" + randomNumber2 + ".png";

let randomImageSource2="Images/" + randomNumberDice2;

let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//Displaying who wins
if(randomNumber1>randomNumber2)
{
    document.getElementById("winner").innerHTML="Player 1 Wins 🎉";
}
else if(randomNumber2>randomNumber1){
    document.getElementById("winner").innerHTML="Player 2 Wins 🎊";
}
else{
        document.getElementById("winner").innerHTML="Draw 😅";

}


