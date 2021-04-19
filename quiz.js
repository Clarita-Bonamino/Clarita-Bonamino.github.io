const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Q1. Clarita Bonamino is currently:",
        answers: 
        {
            a: "A rofessional rock climber",
            b: "A PhD student",
            c: "A sales engineer",
            d: "Unemployed and looking for a job"
        },
        correctAnswer: "b"
    },

    {
        question: "Q2. Clarita has a background in:",
        answers:
        {
            a: "Engineering",
            b: "Education",
            c: "Sports and Exercise Science",
            d: "Nutrition"
        },
        correctAnswer: "a"
    },

    {
        question: "Q3. What is Clarita's mother tongue?",
        answers:
        {
            a: "English",
            b: "Spanish",
            c: "French",
            d: "Italian"
        },
        correctAnswer: "d"
    },

    {
        question: "Q4. What institution is Clarita currently working at?",
        answers:
        {
            a: "None, she is currently unemployed",
            b: "Queensland University of Technology",
            c: "She is being sponsored by Scarpa Sheos and E9",
            d: "Ametek Land"
        },
        correctAnswer: "b"
    }
]; 
        

function buildQuiz(){

    

    // variable to store the HTML output
  
    const output = [];
  
    
  
    for(i=0; i<quizQuestions.length; i++)
    {
      // store list of answer choices
      const answers = [];
  
      // for each available answer to this question add an HTML radio button
      for(letter in quizQuestions[i].answers)
        {
            answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter]
            + '</label>'
            );
        }
       
       // add this question and its answers to the output
       output.push(
         '<div class="question">' + quizQuestions[i].question + '</div>'
         + '<div class="answers">' + answers.join('') + '</div>'
         );
      }
  
       // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

function showResults()
{
    // Gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // Keep track of user's answers
    var numCorrect = 0;       

    // For each question...

    for(i=0; i<quizQuestions.length; i++)
    {
        // Find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
        // If answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer)
        {
            // Add to the number of correct answers
            numCorrect++;

            // Color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }

        // If answer is wrong or blank
         else
         {
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    if (numCorrect === 0)
      {
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
      }

    if (numCorrect === 1) 
      { 
        resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
      }

    if (numCorrect === 2) 
      { 
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
      }

    if (numCorrect === 3) 
      { 
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
      }

    if (numCorrect === 4) 
      { 
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
      }
}

// Load quiz
buildQuiz();

submitButton.onclick = function()
{
    showResults();
}