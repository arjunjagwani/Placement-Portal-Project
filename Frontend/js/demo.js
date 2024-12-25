// async function getQuestions() {
//     try {
//       const response = await fetch('http://localhost:8080/mocktest');
//       const data = await response.json();
  
//       const questionsContainer = document.getElementById('questions-container');
//       data.forEach((question, index) => {
//         const questionElement = document.createElement('div');
//         questionElement.innerHTML = `
//           <h2 name="ques">${index + 1}. ${question.questionText}</h2>
//           <label><input type="radio" name="question${question.id}" value="${question.option1}"> ${question.option1}</label><br>
//           <label><input type="radio" name="question${question.id}" value="${question.option2}"> ${question.option2}</label><br>
//           <label><input type="radio" name="question${question.id}" value="${question.option3}"> ${question.option3}</label><br>

//           <label><input type="radio" name="question${question.id}" value="${question.option4}"> ${question.option4}</label><br>
//           `;
//           questionsContainer.appendChild(questionElement);
//         });
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     }
    
//     async function submitTest() {
//       const responses = [];
//       // const questions = document.querySelectorAll('[name="ques"]');
//       const questions = document.querySelectorAll('[name="ques"]');
//       questions.forEach((questionElement) => {
//         const quesName= questionElement.getAttribute('name');
//         // const questionId = questionElement.name.replace('^question','');
//         const questionId =  quesName.replace('question', '');
//         const userAnswer = document.querySelector(`input[name="question${questionId}"]:checked`)?.value;
//         if (userAnswer) {
//           responses.push({ userId: 1, questionId: questionId, userAnswer: userAnswer });
//         }
//       });
    
//       const response = await fetch('http://localhost:8080/responses', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(responses),
//       });
    
//       const data = await response.json();
//       alert('Your score is: ' + data);
//     }
    
//     // Load questions when the page loads
//     window.onload = getQuestions;
    
      
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;

// Function to start the timer
function startTimer() {
  const timerElement = document.getElementById('timer');

  timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Update the timer display
    timerElement.textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      alert('Time is up! Your test will be submitted automatically.');
      submitTest(); // Automatically submit the test when time is up
    }
  }, 1000);
}


// Fetch and display questions
async function getQuestions() {
  try {
    const response = await fetch('http://localhost:8080/mocktest'); // API endpoint
    const data = await response.json(); // Parse JSON response

    const questionsContainer = document.getElementById('questions-container');
    data.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `
        <h2 data-id="${question.id}">${index + 1}. ${question.questionText}</h2>
        <label><input type="radio" name="question${question.id}" value="${question.option1}"> ${question.option1}</label><br>
        <label><input type="radio" name="question${question.id}" value="${question.option2}"> ${question.option2}</label><br>
        <label><input type="radio" name="question${question.id}" value="${question.option3}"> ${question.option3}</label><br>
        <label><input type="radio" name="question${question.id}" value="${question.option4}"> ${question.option4}</label><br>
      `;
      questionsContainer.appendChild(questionElement);
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

// Submit user responses
async function submitTest() {
  clearInterval(timerInterval); // Stop the timer when the test is submitted
  const responses = [];
  const questions = document.querySelectorAll('h2[data-id]'); // Select all questions with `data-id`

  questions.forEach((questionElement) => {
    const questionId = questionElement.getAttribute('data-id'); // Extract `data-id`
    const userAnswer = document.querySelector(`input[name="question${questionId}"]:checked`)?.value; // Get selected option
    if (userAnswer) {
      responses.push({ userId: 1, questionId: questionId, userAnswer: userAnswer });
    }
  });

  try {
    const response = await fetch('http://localhost:8080/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responses),
    });

    const data = await response.json();
    localStorage.setItem("mockTestScore", data);
    window.location.href = "score.html";
    alert('Your score is: ' + data); // Show score to the user
  } catch (error) {
    console.error('Error submitting test:', error);
  }
}

// Load questions and start the timer when the page loads
window.onload = function() {
  getQuestions();
  startTimer();
};

