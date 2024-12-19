async function getQuestions() {
    try {
      const response = await fetch('http://localhost:8080/mocktest');
      const data = await response.json();
  
      const questionsContainer = document.getElementById('questions-container');
      data.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
          <h2>${index + 1}. ${question.questionText}</h2>
          <label><input type="radio" name="question${question.questionId}" value="${question.option1}"> ${question.option1}</label><br>
          <label><input type="radio" name="question${question.questionId}" value="${question.option2}"> ${question.option2}</label><br>
          <label><input type="radio" name="question${question.questionId}" value="${question.option3}"> ${question.option3}</label><br>

          <label><input type="radio" name="question${question.questionId}" value="${question.option4}"> ${question.option4}</label><br>
          `;
          questionsContainer.appendChild(questionElement);
        });
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }
    
    async function submitTest() {
      const responses = [];
      const questions = document.querySelectorAll('[name^="question"]');
      questions.forEach((questionElement) => {
        const questionId = questionElement.name.replace('question', '');
        const userAnswer = document.querySelector(`input[name="question${questionId}"]:checked`)?.value;
        if (userAnswer) {
          responses.push({ userId: 1, questionId: questionId, userAnswer: userAnswer });
        }
      });
    
      const response = await fetch('http://localhost:8080/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(responses),
      });
    
      const data = await response.json();
      alert('Your score is: ' + data);
    }
    
    // Load questions when the page loads
    window.onload = getQuestions;
    
      