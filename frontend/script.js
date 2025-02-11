// Array of 30 quick lessons
const lessons = [
  {
    question: 'Translate: "Bonjour, comment ça va?"',
    speech: '🔊 Bonjour, comment ça va?',
    options: ["How many Lambos for your NFT?", "Sell kidneys for crypto", "I'm literally a rug pull", "Hello, how are you?"],
    answer: "How many Lambos for your NFT?"
  },
  {
    question: 'Translate: "Merci beaucoup."',
    speech: '🔊 Merci beaucoup.',
    options: ["Thanks for the rug pull", "Your mom buys SHIB", "I fumbled Bitcoin", "Thank you very much."],
    answer: "Thanks for the rug pull"
  },
  {
    question: 'Translate: "Au revoir."',
    speech: '🔊 Au revoir.',
    options: ["I'm shorting your marriage", "Go back to fiat peasant", "Rot in tradwife hell", "Goodbye"],
    answer: "I'm shorting your marriage"
  },
  {
    question: 'Translate: "S\'il vous plaît."',
    speech: '🔊 S\'il vous plaît.',
    options: ["Liquidate my student loans", "Sell plasma for DOGE", "I need bath salts", "Please"],
    answer: "Liquidate my student loans"
  },
  {
    question: 'Translate: "Excusez-moi."',
    speech: '🔊 Excusez-moi.',
    options: ["Move, poor", "I sharted in DMs", "Your Bored Ape mid", "Excuse me"],
    answer: "Move, poor"
  },
  {
    question: 'Translate: "Je m\'appelle Marie."',
    speech: '🔊 Je m\'appelle Marie.',
    options: ["I'm a degen gambler", "My OnlyFans mooned", "I eat crayons", "My name is Marie."],
    answer: "I'm a degen gambler"
  },
  {
    question: 'Translate: "Comment t\'appelles-tu?"',
    speech: '🔊 Comment t\'appelles-tu?',
    options: ["What's your OnlyFans?", "How much for feet pics?", "You into crypto-twinks?", "What is your name?"],
    answer: "What's your OnlyFans?"
  },
  {
    question: 'Translate: "J\'habite à Paris."',
    speech: '🔊 J\'habite à Paris.',
    options: ["I YOLO'd into Dogecoin", "I live in my car", "Cum coin wen?", "I live in Paris."],
    answer: "I YOLO'd into Dogecoin"
  },
  {
    question: 'Translate: "Je ne comprends pas."',
    speech: '🔊 Je ne comprends pas.',
    options: ["I can't read", "Wife's boyfriend knows", "Diamond hands brrr", "I don't understand."],
    answer: "I can't read"
  },
  {
    question: 'Translate: "Parlez-vous anglais?"',
    speech: '🔊 Parlez-vous anglais?',
    options: ["Do you speak ape?", "Moon language only", "What's a book?", "Do you speak English?"],
    answer: "Do you speak ape?"
  },
  {
    question: 'Translate: "Où sont les toilettes?"',
    speech: '🔊 Où sont les toilettes?',
    options: ["Where's the meth?", "Bathroom? I shitpost", "I made poopoo", "Where is bathroom?"],
    answer: "Where's the meth?"
  },
  {
    question: 'Translate: "J\'ai faim."',
    speech: '🔊 J\'ai faim.',
    options: ["I need stimmy check", "Feed me tendies", "Where lambo?", "I'm hungry."],
    answer: "I need stimmy check"
  },
  {
    question: 'Translate: "J\'ai soif."',
    speech: '🔊 J\'ai soif.',
    options: ["I crave Brawndo", "Gamer girl bathwater", "Where's my Monster?", "I'm thirsty."],
    answer: "I crave Brawndo"
  },
  {
    question: 'Translate: "Bonne journée!"',
    speech: '🔊 Bonne journée!',
    options: ["Go touch grass", "Cope harder", "Seethe mald", "Have good day!"],
    answer: "Go touch grass"
  },
  {
    question: 'Translate: "Bonne nuit!"',
    speech: '🔊 Bonne nuit!',
    options: ["Delete browser history", "Cry in shower", "Pirate Disney+", "Good night!"],
    answer: "Delete browser history"
  },
  {
    question: 'Translate: "À bientôt."',
    speech: '🔊 À bientôt.',
    options: ["Cum coin wen?", "Get ratioed", "L + no bitches", "See you soon."],
    answer: "Cum coin wen?"
  },
  {
    question: 'Translate: "Félicitations!"',
    speech: '🔊 Félicitations!',
    options: ["Your crypto worthless", "You're adopted", "Skill issue", "Congratulations!"],
    answer: "Your crypto worthless"
  },
  {
    question: 'Translate: "Je t\'aime."',
    speech: '🔊 Je t\'aime.',
    options: ["I love your NFT", "Pls be my parasocial gf", "Stan LoFi", "I love you."],
    answer: "I love your NFT"
  },
  {
    question: 'Translate: "Où est la gare?"',
    speech: '🔊 Où est la gare?',
    options: ["Where's Uber Eats?", "Train? I have Tesla", "Where tendies?", "Where train station?"],
    answer: "Where's Uber Eats?"
  },
  {
    question: 'Translate: "Combien ça coûte?"',
    speech: '🔊 Combien ça coûte?',
    options: ["How much feet pics?", "What's your body count?", "Wen free healthcare?", "How much cost?"],
    answer: "How much feet pics?"
  },
  {
    question: 'Translate: "Je voudrais un café."',
    speech: '🔊 Je voudrais un café.',
    options: ["I'll take Celsius sponsorship", "Gimme Adderall", "Where cocaine?", "I want coffee."],
    answer: "I'll take Celsius sponsorship"
  },
  {
    question: 'Translate: "Pouvez-vous m\'aider?"',
    speech: '🔊 Pouvez-vous m\'aider?',
    options: ["Can you Venmo me?", "Help me cheat on OnlyFans", "Call my parole officer", "Can you help me?"],
    answer: "Can you Venmo me?"
  },
  {
    question: 'Translate: "J\'ai perdu mon chemin."',
    speech: '🔊 J\'ai perdu mon chemin.',
    options: ["I'm literally rug pull", "Where my dad?", "Lost in Wendy's", "I lost my way."],
    answer: "I'm literally rug pull"
  },
  {
    question: 'Translate: "Je suis fatigué."',
    speech: '🔊 Je suis fatigué.',
    options: ["Emotionally drained from crypto", "Tired of your face", "Need Adderall", "I'm tired."],
    answer: "Emotionally drained from crypto"
  },
  {
    question: 'Translate: "Quelle heure est-il?"',
    speech: '🔊 Quelle heure est-il?',
    options: ["Wen moon?", "Time to die", "It's Gamer Time™", "What time is it?"],
    answer: "Wen moon?"
  },
  {
    question: 'Translate: "Il fait beau aujourd\'hui."',
    speech: '🔊 Il fait beau aujourd\'hui.',
    options: ["Fed printing tendies", "Climate change fake", "Nice weather? Cope", "Weather nice today."],
    answer: "Fed printing tendies"
  },
  {
    question: 'Translate: "Je voudrais réserver une table."',
    speech: '🔊 Je voudrais réserver une table.',
    options: ["Need wash crypto", "Table? I eat Doritos", "Reserve OnlyFans slot", "Reserve table."],
    answer: "Need wash crypto"
  },
  {
    question: 'Translate: "Où est l\'aéroport?"',
    speech: '🔊 Où est l\'aéroport?',
    options: ["Where exit liquidity?", "Jeffrey Epstein Island?", "My private jet where?", "Where airport?"],
    answer: "Where exit liquidity?"
  },
  {
    question: 'Translate: "Pouvez-vous répéter, s\'il vous plaît?"',
    speech: '🔊 Pouvez-vous répéter, s\'il vous plaît?',
    options: ["Say in ape language", "I'm lobotomized", "Too many benadryl", "Can repeat please?"],
    answer: "Say in ape language"
  },
  {
    question: 'Translate: "C\'est délicieux!"',
    speech: '🔊 C\'est délicieux!',
    options: ["This financial advice", "Tastes like bug protein", "I licked battery", "It's delicious!"],
    answer: "This financial advice"
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
