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
    alert('Your score is: ' + data); // Show score to the user
  } catch (error) {
    console.error('Error submitting test:', error);
  }
}

// Load questions when the page loads
window.onload = getQuestions;
