// JavaScript Console Quiz Game
const quizQuestions = [
    {
        question: "Which planet rotates clockwise?",
        answer: "venus"
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "h2o"
    },
    {
        question: "How many bones are in the adult human body?",
        answer: "206"
    },
    {
        question: "Which bear is native only to Arctic regions?",
        answer: "polar bear"
    },
    {
        question: "What does URL stand for?",
        answer: "uniform resource locator"
    }
];

let score = 0;
let totalQuestions = quizQuestions.length;

for (let i = 0; i < totalQuestions; i++) {
    const userAnswer = prompt(`Question ${i + 1}/${totalQuestions}: ${quizQuestions[i].question}`);
    
    if (userAnswer) {
        const cleanAnswer = userAnswer.toLowerCase().trim();
        const correctAnswer = quizQuestions[i].answer;
        
        if (cleanAnswer === correctAnswer) {
            score++;
            alert("✅ Correct! Well done!");
        } else {
            alert(`❌ Incorrect. The correct answer was: "${correctAnswer}"`);
        }
    } else {
        alert("❌ Skipped question. Moving on...");
    }
}

// Final Score Display
const percentage = Math.round((score / totalQuestions) * 100);
alert(`Quiz Complete!\nYour score: ${score}/${totalQuestions} (${percentage}%)\n${percentage >= 80 ? "🎉 Excellent!" : percentage >= 60 ? "👍 Good job!" : "📚 Keep practicing!"}`);
