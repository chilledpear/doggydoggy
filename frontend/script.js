// Array of 30 quick lessons
const lessons = [
  {
    question: 'Translate: "Bonjour, comment ça va?"',
    speech: '🔊 Bonjour, comment ça va?',
    options: ["Hello, how are you?", "Goodbye", "Please", "Excuse me"],
    answer: "Hello, how are you?"
  },
  {
    question: 'Translate: "Merci beaucoup."',
    speech: '🔊 Merci beaucoup.',
    options: ["Thank you very much.", "You're welcome", "I love you", "Good morning"],
    answer: "Thank you very much."
  },
  {
    question: 'Translate: "Au revoir."',
    speech: '🔊 Au revoir.',
    options: ["Goodbye", "Hello", "See you later", "Good night"],
    answer: "Goodbye"
  },
  {
    question: 'Translate: "S\'il vous plaît."',
    speech: '🔊 S\'il vous plaît.',
    options: ["Please", "Thank you", "Excuse me", "Sorry"],
    answer: "Please"
  },
  {
    question: 'Translate: "Excusez-moi."',
    speech: '🔊 Excusez-moi.',
    options: ["Excuse me", "I'm sorry", "Hello", "Goodbye"],
    answer: "Excuse me"
  },
  {
    question: 'Translate: "Je m\'appelle Marie."',
    speech: '🔊 Je m\'appelle Marie.',
    options: ["My name is Marie.", "I am 20 years old.", "I love reading.", "I live in Paris."],
    answer: "My name is Marie."
  },
  {
    question: 'Translate: "Comment t\'appelles-tu?"',
    speech: '🔊 Comment t\'appelles-tu?',
    options: ["What is your name?", "How are you?", "Where are you from?", "What do you do?"],
    answer: "What is your name?"
  },
  {
    question: 'Translate: "J\'habite à Paris."',
    speech: '🔊 J\'habite à Paris.',
    options: ["I live in Paris.", "I live in London.", "I live in New York.", "I live in Rome."],
    answer: "I live in Paris."
  },
  {
    question: 'Translate: "Je ne comprends pas."',
    speech: '🔊 Je ne comprends pas.',
    options: ["I don't understand.", "I understand.", "I speak slowly.", "I know."],
    answer: "I don't understand."
  },
  {
    question: 'Translate: "Parlez-vous anglais?"',
    speech: '🔊 Parlez-vous anglais?',
    options: ["Do you speak English?", "Do you speak French?", "Do you speak Spanish?", "Do you speak German?"],
    answer: "Do you speak English?"
  },
  {
    question: 'Translate: "Où sont les toilettes?"',
    speech: '🔊 Où sont les toilettes?',
    options: ["Where is the bathroom?", "Where is the train station?", "Where is the restaurant?", "Where is the hotel?"],
    answer: "Where is the bathroom?"
  },
  {
    question: 'Translate: "J\'ai faim."',
    speech: '🔊 J\'ai faim.',
    options: ["I'm hungry.", "I'm thirsty.", "I'm tired.", "I'm happy."],
    answer: "I'm hungry."
  },
  {
    question: 'Translate: "J\'ai soif."',
    speech: '🔊 J\'ai soif.',
    options: ["I'm thirsty.", "I'm hungry.", "I'm tired.", "I'm bored."],
    answer: "I'm thirsty."
  },
  {
    question: 'Translate: "Bonne journée!"',
    speech: '🔊 Bonne journée!',
    options: ["Have a good day!", "Good night!", "See you tomorrow!", "Hello!"],
    answer: "Have a good day!"
  },
  {
    question: 'Translate: "Bonne nuit!"',
    speech: '🔊 Bonne nuit!',
    options: ["Good night!", "Good morning!", "See you later!", "Thank you!"],
    answer: "Good night!"
  },
  {
    question: 'Translate: "À bientôt."',
    speech: '🔊 À bientôt.',
    options: ["See you soon.", "Goodbye.", "Hello.", "Thank you."],
    answer: "See you soon."
  },
  {
    question: 'Translate: "Félicitations!"',
    speech: '🔊 Félicitations!',
    options: ["Congratulations!", "I'm sorry.", "Good luck!", "Welcome!"],
    answer: "Congratulations!"
  },
  {
    question: 'Translate: "Je t\'aime."',
    speech: '🔊 Je t\'aime.',
    options: ["I love you.", "I miss you.", "I hate you.", "I'm busy."],
    answer: "I love you."
  },
  {
    question: 'Translate: "Où est la gare?"',
    speech: '🔊 Où est la gare?',
    options: ["Where is the train station?", "Where is the bank?", "Where is the museum?", "Where is the library?"],
    answer: "Where is the train station?"
  },
  {
    question: 'Translate: "Combien ça coûte?"',
    speech: '🔊 Combien ça coûte?',
    options: ["How much does it cost?", "What time is it?", "Where is the store?", "How many are there?"],
    answer: "How much does it cost?"
  },
  {
    question: 'Translate: "Je voudrais un café."',
    speech: '🔊 Je voudrais un café.',
    options: ["I would like a coffee.", "I would like tea.", "I would like water.", "I would like juice."],
    answer: "I would like a coffee."
  },
  {
    question: 'Translate: "Pouvez-vous m\'aider?"',
    speech: '🔊 Pouvez-vous m\'aider?',
    options: ["Can you help me?", "Where is the bathroom?", "What is your name?", "How old are you?"],
    answer: "Can you help me?"
  },
  {
    question: 'Translate: "J\'ai perdu mon chemin."',
    speech: '🔊 J\'ai perdu mon chemin.',
    options: ["I lost my way.", "I am happy.", "I am lost.", "I am fine."],
    answer: "I lost my way."
  },
  {
    question: 'Translate: "Je suis fatigué."',
    speech: '🔊 Je suis fatigué.',
    options: ["I am tired.", "I am hungry.", "I am happy.", "I am excited."],
    answer: "I am tired."
  },
  {
    question: 'Translate: "Quelle heure est-il?"',
    speech: '🔊 Quelle heure est-il?',
    options: ["What time is it?", "How much is it?", "Where is it?", "Why is it?"],
    answer: "What time is it?"
  },
  {
    question: 'Translate: "Il fait beau aujourd\'hui."',
    speech: '🔊 Il fait beau aujourd\'hui.',
    options: ["The weather is nice today.", "It is raining.", "It is cold.", "It is hot."],
    answer: "The weather is nice today."
  },
  {
    question: 'Translate: "Je voudrais réserver une table."',
    speech: '🔊 Je voudrais réserver une table.',
    options: ["I would like to reserve a table.", "I would like to order food.", "I would like to cancel.", "I would like to leave."],
    answer: "I would like to reserve a table."
  },
  {
    question: 'Translate: "Où est l\'aéroport?"',
    speech: '🔊 Où est l\'aéroport?',
    options: ["Where is the airport?", "Where is the station?", "Where is the hotel?", "Where is the bus stop?"],
    answer: "Where is the airport?"
  },
  {
    question: 'Translate: "Pouvez-vous répéter, s\'il vous plaît?"',
    speech: '🔊 Pouvez-vous répéter, s\'il vous plaît?',
    options: ["Can you repeat, please?", "Do you understand?", "Can you speak slowly?", "Are you sure?"],
    answer: "Can you repeat, please?"
  },
  {
    question: 'Translate: "C\'est délicieux!"',
    speech: '🔊 C\'est délicieux!',
    options: ["It's delicious!", "It's terrible!", "It's expensive!", "It's free!"],
    answer: "It's delicious!"
  }
];

let currentLessonIndex = 0;

window.addEventListener('DOMContentLoaded', displayLesson);

function displayLesson() {
  const lesson = lessons[currentLessonIndex];
  
  // Update the lesson title and speech text
  document.querySelector('.lesson-title').textContent = lesson.question;
  document.querySelector('.speech-box span').textContent = lesson.speech;
  
  // Clear previous word options and add new ones
  const wordOptionsContainer = document.querySelector('.word-options');
  wordOptionsContainer.innerHTML = '';
  lesson.options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'word';
    optionDiv.textContent = option;
    optionDiv.addEventListener('click', function() {
      // Ensure only one option is selected at a time
      document.querySelectorAll('.word').forEach(el => el.classList.remove('selected'));
      optionDiv.classList.add('selected');
    });
    wordOptionsContainer.appendChild(optionDiv);
  });
  
  // Update the progress bar with animation
  const progressPercent = (currentLessonIndex / lessons.length) * 100;
  const progressEl = document.querySelector('.progress');
  progressEl.classList.remove('progress-update');
  void progressEl.offsetWidth; // force reflow to restart animation
  progressEl.classList.add('progress-update');
  progressEl.style.width = progressPercent + '%';
  
  // Update lessons completed counter in the .lives element
  document.querySelector('.lives').textContent = `❤️ ${currentLessonIndex}/${lessons.length}`;
  
  // Clear any previous feedback message
  const existingFeedback = document.querySelector('.lesson-feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
}

document.getElementById('submit-btn').addEventListener('click', function() {
  const selectedOption = document.querySelector('.word.selected');
  if (!selectedOption) {
    alert('Please select an answer.');
    return;
  }
  
  const userAnswer = selectedOption.textContent.trim();
  const correctAnswer = lessons[currentLessonIndex].answer;
  
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'lesson-feedback';
  
  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = 'Correct!';
    feedbackDiv.style.color = 'green';
    
    // Play sound effect after a correct answer
    const audio = document.getElementById('shake-sound');
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    
    document.querySelector('.lesson-content').appendChild(feedbackDiv);
    
    // Create a screen-wipe overlay effect before moving to next lesson
    const container = document.querySelector('.container');
    const overlay = document.createElement('div');
    overlay.className = 'screen-wipe';
    container.appendChild(overlay);
    
    setTimeout(() => {
      feedbackDiv.classList.add('fade-out');
      setTimeout(() => {
        currentLessonIndex++;
        if (currentLessonIndex < lessons.length) {
          displayLesson();
        } else {
          document.querySelector('.lesson-content').innerHTML = '<h2>Congratulations! You completed all 30 lessons.</h2>';
        }
      }, 500);
    }, 1000);
    
  } else {
    feedbackDiv.textContent = 'Oops, that\'s not correct. Try again!';
    feedbackDiv.style.color = 'red';
    
    document.querySelector('.lesson-content').appendChild(feedbackDiv);
    
    // Add shake effect for wrong answer
    const lessonContent = document.querySelector('.lesson-content');
    lessonContent.classList.add('shake');
    
    // (Optional: play sound effect for wrong answer if desired)
    // const audio = document.getElementById('shake-sound');
    // if (audio) { audio.currentTime = 0; audio.play(); }
    
    setTimeout(() => {
      feedbackDiv.classList.add('fade-out');
      setTimeout(() => {
        feedbackDiv.remove();
        lessonContent.classList.remove('shake');
      }, 500);
    }, 1000);
  }
});

// Spotlight effect using the :before technique
document.addEventListener("mousemove", function(e) {
  const spotlight = document.getElementById("spotlight");
  spotlight.style.setProperty("--x", e.clientX + "px");
  spotlight.style.setProperty("--y", e.clientY + "px");
  spotlight.style.setProperty("--size", "300px");
});
document.addEventListener("mouseleave", function() {
  const spotlight = document.getElementById("spotlight");
  spotlight.style.setProperty("--size", "0px");
});
