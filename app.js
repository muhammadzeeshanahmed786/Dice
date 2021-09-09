
var mainDice = document.getElementById("show-items")
var genNumbers = Math.ceil(Math.random() * 6);
console.log(genNumbers)
var dice1 = ` 
<div class="container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div id="special"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`


var dice2 = `
<div class="container">
            <div></div>
            <div></div>
            <div id="special"></div>
            <div></div>
            <div></div>
            <div></div>
            <div id="special"></div>
            <div></div>
            <div></div>
        </div>`




var dice3 = `<div class="container">
<div></div>
<div></div>
<div id="special"></div>
<div></div>
<div id="special"></div>
<div></div>
<div id="special"></div>
<div></div>
<div></div>
</div>`


var dice4 = `
<div class="container">
            <div id="special"></div>
            <div></div>
            <div id="special"></div>
            <div></div>
            <div></div>
            <div></div>
            <div id="special"></div>
            <div></div>
            <div id="special"></div>
        </div>`


var dice5 = `<div class="container">
       <div id="special"></div>
       <div></div>
       <div id="special"></div>
       <div></div>
       <div id="special"></div>
       <div></div>
       <div id="special"></div>
       <div></div>
       <div id="special"></div>
   </div>`

var dice6 = `
   <div class="container">
       <div id="special"></div>
       <div id="special"></div>
       <div id="special"></div>
       <div></div>
       <div></div>
       <div></div>
       <div id="special"></div>
       <div id="special"></div>
       <div id="special"></div>
   </div>`




if (genNumbers == 1) {
    mainDice.innerHTML=dice1;
}
else if (genNumbers ==2) {
    mainDice.innerHTML=dice2;
}
else if (genNumbers ==3) {
    mainDice.innerHTML=dice3;
}
else if (genNumbers ==4) {
    mainDice.innerHTML=dice4;
}
else if (genNumbers ==5) {
    mainDice.innerHTML=dice5;
}
else if (genNumbers ==6) {
    mainDice.innerHTML=dice6;
}



