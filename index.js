var readlinesync = require("readline-sync");


var yourName = readlinesync.question("what's Your Name?\n");
console.log("Hii",yourName,"Welcome to Rahul's Quiz");
score = 0;


function rahulQuiz(quetion, myAnswer){
    var yourAnswer = readlinesync.question(quetion+"Ans->");
    if(yourAnswer == myAnswer){
        score+=1;
        console.log("Right");
    }
    else{
      console.log("wrong. correct answer is: ",myAnswer);
    }
    console.log("Your score is: ",score);
    console.log("--------------------");
}



var questions = [{
  question :"1.What is Rahul's age?\n(20/ 21/ 22)\n",
  answer : '21'
},{
  question :'Where do Rahul Live\n(Nerul/Thane/Vashi)\n',
  answer : "Vashi"
},{
  question :"Rahul's College Name?\n(Agnel/ RAIT/ Tilak)\n",
  answer : "RAIT"
},{
  question : "Rahul's Fav character From GOT?\n(Tyrion / John Snow/ Robb Stark)\n",
  answer : "Tyrion"
},
{
  question : 'In which year of Engineering Rahul is?\n(Secon/ Third/ Final)\n',
  answer : "Final"
}
]

for(var i=0;i<questions.length;i++){
    rahulQuiz(questions[i].question,questions[i].answer);
}




