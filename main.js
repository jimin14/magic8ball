document.getElementById("btn").addEventListener("click", BtnClicked);

function BtnClicked() {

let randNum = Math.random();
    console.log(randNum);

let number = document.getElementById("question-in").value;
    if (randNum < 0.2) {
        document.getElementById("output1").innerHTML = "I don't think so";
      } else if (randNum < 0.4) { 
        document.getElementById("output1").innerHTML = "As I see it, yes.";
      } else if (randNum < 0.67){
        document.getElementById("output1").innerHTML ="Concentrate and ask again.";
      }else if (randNum < 0.84){
        document.getElementById("output1").innerHTML ="YES";
      } else{
            document.getElementById("output1").innerHTML ="Outlook not so good.";
       }

    
    
    let question = document.getElementById("question-in").value
    if (question == "") {
        document.getElementById("output1").innerHTML ="Please ask a question...";
    }else if (question == "should i text him" ) {
      document.getElementById("output1").innerHTML ="No bitch";
    } else if (question == "am i cute" ) {
      document.getElementById("output1").innerHTML ="HEll NAH";
    } else if (question == "should i text her" ) {
      document.getElementById("output1").innerHTML ="No bitch";
    } else if (question == "i like oliver" ) {
      document.getElementById("output1").innerHTML ="he is ugly"
  }
}