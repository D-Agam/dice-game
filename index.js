var x=Math.floor(Math.random()*6)+1;
var image="d"+x+".png";
document.querySelectorAll("img")[0].setAttribute("src",image);

var y=Math.floor(Math.random()*6)+1;
var image1="d"+y+".png";
document.querySelectorAll("img")[1].setAttribute("src",image1);
if(x>y)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(x<y)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}