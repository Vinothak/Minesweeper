<html>
<head>
<title>Matti Game</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container">
<div>
<p class="text-center"><button class="btn bg-primary text-white" onClick="refreshPage()">New Game</button></p>

</div>
<div class="row" id='matti' style="margin-top:50px">

</div>
<h1 id='gameover' >
</div>
<script>
var count=0;
  var set=new Set();

function RandomNumber(){

  for(i=1;set.size!=10;i++){
    set.add(Math.ceil(81 * Math.random()));
  }
  for (let item of set.values()) {
  console.log(item);
}
}
RandomNumber();
mattifun();

function mattifun()
{
var innereportion="";
for(var j=1,k=1;j<=27;j++)
{
innereportion+="<div class='col-4'>";
innereportion+="<div class='row'>";
for(var i=1;i<=3;i++,k++)
{
  var num=k;
innereportion+="<div id='"+k+"' class='col-4 card' style='border:1px solid black' onclick='gamefun(this,"+k+")'><p class='text-center m-0' style='padding:36px'></p></div>";
}
innereportion+="</div></div>";
}
document.getElementById("matti").innerHTML=innereportion;
  //  obj.style.background="red";
}

function gamefun(obj,num)
{
  //console.log(obj);
    if(set.has(num)){
      console.log("enterd into it")
    //  document.getElementById('1');
      obj.style.background="red";
      reveal();
      gameoverFunc();
    }
    else{
      calc(num);
      obj.style.background="green";

      document.getElementById('gameover').innerHTML="Keep Rocking!!";
      count++;
      if(count==71)
        document.getElementById('gameover').innerHTML="Congratulations you won!!";
    }

}
function calc(curr){
  let count1=0;

if(set.has(curr+1))
count1++;
if(set.has(curr-1))
count1++;
if(set.has(curr-8))
count1++;
if(set.has(curr-9))
count1++;
if(set.has(curr-10))
count1++;
if(set.has(curr+8))
count1++;
if(set.has(curr+9))
count1++;
if(set.has(curr+10))
count1++;
  document.getElementById(curr).innerHTML=count1;
}
function gameoverFunc(){
  document.getElementById('gameover').innerHTML="Game Over!!";
  alert("game over!!")
  reveal();
}
function refreshPage(){
  for(i=1;i<=81;i++){
    var obj=document.getElementById(i);
    obj.style.background="white";
    count=0;
      document.getElementById('gameover').innerHTML="Start Game!!";
  }
}
function reveal(){
  for (let item of set.values()) {
    console.log(item);
  var obj=document.getElementById(item);
  console.log(obj);
    obj.style.background="red";
}
//alert("game over!!")
}

</script>
</body>
</html>
