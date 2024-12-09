let currentQuestionIndex = 0;

function showQuestion(index) {
	const questions = 
		document.querySelectorAll('.flex.flex-col');
	questions.forEach((question, i) => {
		question.style.display = i === index ? 'flex' : 'none';
	});
}

function nextQuestion() {
	currentQuestionIndex = 
		
			Math.min(currentQuestionIndex + 1, 9);
	showQuestion(currentQuestionIndex);
}

function prevQuestion() {
	currentQuestionIndex = 
		
			Math.max(currentQuestionIndex - 1, 0);
	showQuestion(currentQuestionIndex);
}

function getSelectedOption(questionId) {
	const selectedOption = 
		
			document.querySelector(`input[name=${questionId}]:checked`);
	return selectedOption ? selectedOption.value : null;
}

function submitQuiz() {
	document.getElementById('goodbutton').classList.add('hidden')
	document.getElementById('badbutton').classList.add('hidden')
	const answers = {
		q1: getSelectedOption('q1'),
		q2: getSelectedOption('q2'),
		q3: getSelectedOption('q3'),
		q4: getSelectedOption('q4'),
		q5: getSelectedOption('q5'),
	};

	let score = 0;
	if (answers.q1 === 'b') {
		score += 20;
	}
	if (answers.q2 === 'd') {
		score += 20;
	}
	if (answers.q3 === 'a') {
		score += 20;
	}
	if (answers.q4 === 'd') {
		score += 20;
	}
	if (answers.q5 === 'c') {
		score += 20;
	}

	const resultSection = document.getElementById('result');
	resultSection.classList.remove('hidden');

	const scoreElement = document.getElementById('score');
	scoreElement.textContent = 
		`Score: ${score}/100`; 

	const feedbackElement = 
		document.getElementById('feedback');
	if (score >= 70) {
		document.getElementById('goodbutton').classList.remove('hidden')
		feedbackElement.textContent = 
			'Great Work!';
	} else {
		document.getElementById('badbutton').classList.remove('hidden')
		feedbackElement.textContent = 	
			'Make sure to review the document and they try again';
	}
}
