'use strict'

let root=document.getElementById("root");
let game=document.getElementById("start");
let points=document.getElementById('points');
var set=new Set();

function RandomNumber(){
  for(let i=1;set.size!=10;i++){
    set.add(Math.ceil(81 * Math.random()));
  }
  console.log(set);
}
RandomNumber();

//console.log('working');
var count=0;
var score=0;

for(let i=0;i<9;i++){

  let row=document.createElement("div");
  row.style.height="30px";
  row.style.width="300px"
  var gameover=false;
  var score=0;
  var win=false;
  for(let j=0;j<9;j++){
    let curr=i*9+j+1;
    let cell=document.createElement("div");
    cell.style.height="30px";
    cell.style.width="30px";
    //cell.style.padding="1px";
    cell.style.display="inline-block";
    cell.setAttribute("id",curr);
    cell.setAttribute("class","center");
    cell.style.border="1px solid black";
    let noContext = document.getElementById(curr);

    cell.addEventListener('contextmenu', e => {
      let index=document.getElementById(curr);
      index.style.background="yellow";
      e.preventDefault();
    });
    cell.addEventListener("click",()=>{
      //  RandomNumber();
      //  console.log(curr);
      if(set.has(curr) && win==false)
      {
        gameover=true;
        //  console.log("bomb clicked");
        let index=document.getElementById(curr);
        index.style.background="red";
        game.style.display="block";
        reveal();
      }
      else if(gameover==false && win==false){
        //  console.log(cell);
        cell.style.background="green";
        score++;
        //  cell.innerHTML=curr;
        if(score==71){
          win=true;
          gameWin();
          game.style.display="block";
        }
        points.innerHTML=score;
        calc(curr);

      }

    });
    row.appendChild(cell);//appending each coulmn to a specific row.
  }
  root.appendChild(row);//appending each created  row
}//Grid ends here

function gameWin(){
  document.getElementById('wingame').innerHTML="Congratulations you won!!";
}
function startGame(){
  location.reload();
}

function calc(curr){
  //  for(let i=0;i<9;i++){
  //  for(let j=0;j<9;j++){
  let count=0;
  let top=curr-9;
  if(set.has(top))
  count++;
  let bottom=curr+9;
  if(set.has(bottom))
  count++;
  let bottom_left=curr+8
  if(set.has(bottom_left) && curr%9!=1)
  count++;
  let bottom_right=curr+10
  if(set.has(bottom_right) && curr%9!=0)
  count++;
  let top_left=curr-10;
  if(set.has(top_left) && curr%9!=1)
  count++;
  let top_right=curr-8;
  if(set.has(top_right) && curr%9!=0)
  count++;
  let left=curr-1;
  if(set.has(left) && curr%9!=1)
  count++;
  let right=curr+1;
  if(set.has(right) && curr%9!=0)
  count++;
  let index=document.getElementById(curr);
  index.innerHTML=count;

  //}
  //  }
}
//revealing the bombs
function reveal(){
  for (let item of set.values()) {
    let obj=document.getElementById(item);
    obj.style.background="red";
  }
  gameoverFunc();
}
//Game over func
function gameoverFunc(){
  document.getElementById('gameover').innerHTML="Game Over!!";
}
//alert("game over!!")

//game func ends
