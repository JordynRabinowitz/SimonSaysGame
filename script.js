
function playSound(color){
  let newSound = new Audio(`sounds/${color}.mp3`);
  newSound.play();
}

$("#start").click(function(){
  $("#lose").text("");
  resetS();
  addColor();
  playSequence();
})

$("#green").click(function(){
  $("#green").addClass("animated");
  setTimeout(function(){
  $("#green").removeClass("animated");}, 100);
  playSound("green");
  checkColor("green");
})
$("#red").click(function(){
  $("#red").addClass("animated");
  setTimeout(function(){
  $("#red").removeClass("animated");}, 100);
  playSound("red");
  checkColor("red");
})
$("#yellow").click(function(){
  $("#yellow").addClass("animated");
  setTimeout(function(){
  $("#yellow").removeClass("animated");}, 100);
  playSound("yellow");
  checkColor("yellow");
})
$("#blue").click(function(){
  $("#blue").addClass("animated");
  setTimeout(function(){
  $("#blue").removeClass("animated");}, 100);
  playSound("blue");
  checkColor("blue");
})

function animate(segment){
  $(segment).addClass("animated");
  setTimeout(function(){
  $(segment).removeClass("animated");}, 100);
}
//add to sequence
function addColor(){
let num = Math.floor(Math.random() * 4) + 1;
if(num == 1){sequence.push("green");}
if(num == 2){sequence.push("red");}
if(num == 3){sequence.push("blue");}
if(num == 4){sequence.push("yellow");}
}


// sequence

let sequence = [];
let count = 0;
function playSequence(){
  if (count < sequence.length){
    let color = sequence[count];
    let segment = `#${color}`;
    playSound(color);
    animate(segment);
    count+=1;
    setTimeout(function(){
      playSequence();}, 500)
    }
  else{count = 0;}
  }
let numright = 0;
function checkColor(clicked){
  if(clicked == sequence[count]){
    count+=1;
    numright+=1;
  }
  else if(clicked != sequence[count]){
    let no = "wrong"
    playSound(no);
    resetS();
    $("#lose").text(`You lost, and got ${numright} right.`);
    $("#lose").css("color", "black");
    $("#lose").css("text-align", "center");
  }
  if(count == sequence.length){
    addColor();
    count = 0;
    setTimeout(function(){
      playSequence();}, 500)
    }
  }

function resetS(){
  sequence = []; 
  count = 0;
}