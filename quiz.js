// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create the questions
let questions = [
	{
		question : "What is the insignia of the Maelstrom?",
		imgSrc :"img/Q1.jpg",
		choiceA : "Obsidian Longboat",
		choiceB : "Yellow Jacket",
		choiceC : "Crimson Galleon",
		choiceD : "Cobalt Warship",
		correct : "A"
	},{
		question : "What is Papalymo's surname?",
		imgSrc :"img/Q2.png",
		choiceA : "Popolymo",
		choiceB : "Momolymo",
		choiceC : "Totolymo",
		choiceD : "Nopelymo",
		correct : "C"
	},{
		question : "If you exit Gridania from the Yellow Serpent Gate, where will you be?",
		imgSrc :"img/Q3.jpg",
		choiceA : "North Shroud",
		choiceB : "South Shroud",
		choiceC : "East Shroud",
		choiceD : "West Shroud",
		correct : "A"
	},{
		question : "What is the name of the tavern in the Upper Decks of Limsa Lominsa?",
		imgSrc :"img/Q4.png",
		choiceA : "The Lost Legion",
		choiceB : "The Dingy Deck",
		choiceC : "The Missing Member",
		choiceD : "The Ghostly Grill",
		correct : "C"
	},{
		question : "What is the name of the NPC that grants access to the Hall of the Novice?",
		imgSrc :"img/Q5.png",
		choiceA : "John Smith",
		choiceB : "The Smith",
		choiceC : "Will Smith",
		choiceD : "The Black Smith",
		correct : "B"
	},{
		question : "Which of these is NOT an Eorzean newspaper?",
		imgSrc :"img/Q6.jpg",
		choiceA : "The Mythril Eye",
		choiceB : "The Dalamud Daily",
		choiceC : "The Harbor Herald",
		choiceD : "The Raven",
		correct : "B"
	},{
		question : "The Ixal are affiliated with which of the Primals?",
		imgSrc :"img/Q7.jpg",
		choiceA : "Ifrit",
		choiceB : "Garuda",
		choiceC : "Leviathan",
		choiceD : "Titan",
		correct : "B"
	},{
		question : "Which of these city states is affiliated with the Gold Saucer?",
		imgSrc :"img/Q8.png",
		choiceA : "Ul'dah",
		choiceB : "Gridania",
		choiceC : "Limsa Lominsa",
		choiceD : "Ishgard",
		correct : "A"
	},{
		question : "Which of these housing areas is associated with Limsa Lominsa?",
		imgSrc :"img/Q9.jpg",
		choiceA : "The Goblet",
		choiceB : "The Lavender Beds",
		choiceC : "The Firmament",
		choiceD : "Mist",
		correct : "D"
	},{
		question : "Which of these characters is NOT a member of the Garlond Ironworks?",
		imgSrc :"img/Q10.jpg",
		choiceA : "Jessie",
		choiceB : "Wedge",
		choiceC : "Tifa",
		choiceD : "Biggs",
		correct : "C"
	},{
		question : " What is the name of the leader of the Adventurer's Guild in Mor Dhona?",
		imgSrc :"img/Q11.jpg",
		choiceA : "Slafborn Rhotweitzsyn",
		choiceB : "Mother Miounne",
		choiceC : "Baderon Tenfingers",
		choiceD : "Momodi Modi",
		correct : "A"
	},{
		question : "You can practive playing your job on which of these?",
		imgSrc :"img/Q12.jpg",
		choiceA : "Striking Tree",
		choiceB : "Striking Dummy",
		choiceC : "Striking Mummy",
		choiceD : "Striking Shield",
		correct : "B"
	},{
		question : "Who is the God of Levin?",
		imgSrc :"img/Q13.jpg",
		choiceA : "Ifrit",
		choiceB : "Titan",
		choiceC : "Ramuh",
		choiceD : "Garuda",
		correct : "C"
	},{
		question : "What is Y'shtola's surname?",
		imgSrc :"img/Q14.png",
		choiceA : "Hext",
		choiceB : "Warde",
		choiceC : "Rhul",
		choiceD : "Qesh",
		correct : "C"
	},{
		question : "When are you most likely to Mooch?",
		imgSrc :"img/Q15.jpg",
		choiceA : "While Fishing",
		choiceB : "In a Dungeon",
		choiceC : "While Crafting",
		choiceD : "On the Market Board",
		correct : "A"
	},{
		question : "If you exit Limsa Lominsa from the Zephyr Gate, where will you be?",
		imgSrc :"img/Q16.jpg",
		choiceA : "Upper La Noscea",
		choiceB : "Lower La Noscea",
		choiceC : "Western Thanalan",
		choiceD : "Middle La Noscea",
		correct : "D"
	},{
		question : "Who is assistant to Hildibrand, agent of inquiry, inspector extraordinaire?",
		imgSrc :"img/Q17.png",
		choiceA : "Lashu Makkapakka",
		choiceB : "Nashu Mhakaracca",
		choiceC : "Lotsa Hankypanky",
		choiceD : "Acho Tikkytakky",
		correct : "B"
	},{
		question : "What is the name of Archon Louisoix's staff?",
		imgSrc :"img/Q18.png",
		choiceA : "The Aurifex",
		choiceB : "Upsydaisy",
		choiceC : "Tupsimati",
		choiceD : "Okeydokey",
		correct : "C"
	},{
		question : "Which of these guilds is NOT found in Ul'dah?",
		imgSrc :"img/Q19.jpg",
		choiceA : "Gladiator's Guild",
		choiceB : "Miner's Guild",
		choiceC : "Thaumaturge's Guild",
		choiceD : "Culinarian's Guild",
		correct : "D"
	},{
		question : "What is the Crystal Tower more commonly known as?",
		imgSrc :"img/Q20.jpg",
		choiceA : "Syrcus Tower",
		choiceB : "Silver Tower",
		choiceC : "Circus Tower",
		choiceD : "Sylvan Tower",
		correct : "A"
	},{
		question : "What is the name of Eorzea's premier weaponsmith?",
		imgSrc :"img/Q21.jpg",
		choiceA : "Ardashir Balyk",
		choiceB : "Remon Smalle",
		choiceC : "Jalzahn Daemir",
		choiceD : "Gerolt Blackthorn",
		correct : "D"
	},{
		question : "What is the name of the ivory cathedral in the East Shroud?",
		imgSrc :"img/Q22.png",
		choiceA : "The Sanctum of the Seven",
		choiceB : "The Sanctum of the Ten",
		choiceC : "The Sanctum of the Twelve",
		choiceD : "The Sanctum of the Fourteen",
		correct : "C"
	},{
		question : "Which of these actions can be used by a Miner?",
		imgSrc :"img/Q23.jpg",
		choiceA : "Solid Reason",
		choiceB : "Observe",
		choiceC : "Brunt Force",
		choiceD : "Salvage",
		correct : "A"
	},{
		question : "Which of these is the primal vessel of the Dark Divinity known as Odin?",
		imgSrc :"img/Q24.jpg",
		choiceA : "Odin, the Primal",
		choiceB : "Sleipnir, the Horse",
		choiceC : "Tension, the Weather",
		choiceD : "Zantetsuken, the Sword",
		correct : "D"
	},{
		question : "Spriggans fall into which Bestiary classification?",
		imgSrc :"img/Q25.jpg",
		choiceA : "Beastkin",
		choiceB : "Soulkin",
		choiceC : "Vilekin",
		choiceD : "Elementals",
		correct : "B"
	},{
		question : "Mor Dhona lies along the shores of which of these?",
		imgSrc :"img/Q26.png",
		choiceA : "Silverskin Shores",
		choiceB : "Silverlake Tears",
		choiceC : "Silvertear Lake",
		choiceD : "Silversky Lake",
		correct : "C"
	},{
		question : "Which of these is NOT a military title within Garlean social hierarchy?",
		imgSrc :"img/Q27.jpg",
		choiceA : "Tol",
		choiceB : "Sas",
		choiceC : "Nan",
		choiceD : "Rem",
		correct : "C"
	},{
		question : "What does the abbreviation N.O.A.H. stand for?",
		imgSrc :"img/Q28.jpg",
		choiceA : "Neglected Objects of Ancient History",
		choiceB : "Nominated Observers of Artifacts Historical",
		choiceC : "Nominated Onlookers of Ancient History",
		choiceD : "Nineteen Owners of Allagan Hairstyles",
		correct : "B"
	},{
		question : "If you exit Ul'dah from the Gate of the Sultana, where will you be?",
		imgSrc :"img/Q29.png",
		choiceA : "Northern Thanalan",
		choiceB : "Southern Thanalan",
		choiceC : "Eastern Thanalan",
		choiceD : "Western Thanalan",
		correct : "D"
	},{
		question : "Which tribe of Miqo'te has ancestral ties to the Imperial bloodline of Allag?",
		imgSrc :"img/Q30.png",
		choiceA : "The G Tribe",
		choiceB : "The M People",
		choiceC : "The D Tribe",
		choiceD : "The Boo-Yaa Tribe",
		correct : "A"
	},{
		question : "What is the motto of the Crystal Braves?",
		imgSrc :"img/Q31.jpg",
		choiceA : "For Coin and Country",
		choiceB : "Wood's Will Be Done",
		choiceC : "For the Freedom of All",
		choiceD : "'Til Sea Swallows All",
		correct : "C"
	},{
		question : "Which of these actions can be used by a crafter?",
		imgSrc :"img/Q32.jpg",
		choiceA : "Preparation",
		choiceB : "Patience",
		choiceC : "Observe",
		choiceD : "Ageless Words",
		correct : "C"
	},{
		question : "Which of these Ascians was responsible for the fall of the Thirteenth?",
		imgSrc :"img/Q33.png",
		choiceA : "Nabriales",
		choiceB : "Igeyorhm",
		choiceC : "Lahabrea",
		choiceD : "Elidibus",
		correct : "B"
	},{
		question : "Which of these guilds would you find in Limsa Lominsa?",
		imgSrc :"img/Q34.jpg",
		choiceA : "Gladiator's Guild",
		choiceB : "Miner's Guild",
		choiceC : "Thaumaturge's Guild",
		choiceD : "Culinarian's Guild",
		correct : "D"
	},{
		question : "Who is the Father of Dragons?",
		imgSrc :"img/Q35.jpg",
		choiceA : "Bahamut",
		choiceB : "Midgardsormr",
		choiceC : "Hraesvelgr",
		choiceD : "Vrtra",
		correct : "B"
	},{
		question : "What is the name of the ruined Garlean airship in Mor Dhona?",
		imgSrc :"img/Q36.png",
		choiceA : "The Aegis",
		choiceB : "The Agrius",
		choiceC : "The Argo",
		choiceD : "The Gration",
		correct : "B"
	},{
		question : "What is the correct name of the Gold Saucer game?",
		imgSrc :"img/Q37.png",
		choiceA : "Lord of Vermillion",
		choiceB : "Lord of Vermicelli",
		choiceC : "Lord of Verminion",
		choiceD : "Lord of Verfire",
		correct : "C"
	},{
		question : "The GATE <em>Any Way the Wind Blows</em> is held in which area of the Gold Saucer?",
		imgSrc :"img/Q38.png",
		choiceA : "Event Square",
		choiceB : "Entrance Square",
		choiceC : "Round Square",
		choiceD : "Chocobo Square",
		correct : "A"
	},{
		question : "Within the Gold Saucer you can win the...",
		imgSrc :"img/Q39.jpg",
		choiceA : "Jackpot",
		choiceB : "Cactpot",
		choiceC : "Snackpot",
		choiceD : "Hackbot",
		correct : "B"
	},{
		question : "The Echo allows the individual which of these powers?",
		imgSrc :"img/Q40.jpg",
		choiceA : "The power to transcend words",
		choiceB : "The power to transcend worlds",
		choiceC : "The power to transcend time",
		choiceD : "All of the above",
		correct : "D"
	}
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 20s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnswer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
	quiz.style.display = "none";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
