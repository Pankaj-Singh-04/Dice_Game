var random_number1=Math.random();
random_number1=Math.floor((random_number1*6)+1);
// alert(random_number1);
var image1_src="images/"+"dice"+random_number1+".png";

document.querySelector("img.img1").setAttribute("src",image1_src);

var random_number2=Math.random();
random_number2=Math.floor((random_number2*6)+1);
// alert(random_number2);
var image2_src="images/"+"dice"+random_number2+".png";

document.querySelector("img.img2").setAttribute("src",image2_src);

if(random_number1>random_number2){
    document.querySelector("h1").innerHTML= "🚩 Play 1 Wins!";
}
else if(random_number1<random_number2){
    document.querySelector("h1").innerHTML= "Play 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!!";
}