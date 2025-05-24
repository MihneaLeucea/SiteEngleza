// Full pool of 25 questions
    const allQuestions = [
      { id: 'q1', text: 'Who was Edric in the story?', options: { A: 'A knight who fought in battles', B: 'A young villager living in medieval England', C: 'A noble who owned a manor', D: 'A monk who lived in a monastery' }, answer: 'B' },
      { id: 'q2', text: 'What was the system of feudalism?', options: { A: 'A kind of trade agreement', B: 'A type of castle defense', C: 'A social system where everyone had roles and duties', D: 'A festival celebrated by peasants' }, answer: 'C' },
      { id: 'q3', text: 'What kind of home did most peasants live in?', options: { A: 'Stone castles', B: 'Wooden and mud cottages with thatched roofs', C: 'Large brick houses', D: 'Underground shelters' }, answer: 'B' },
      { id: 'q4', text: 'What were some of Edric’s chores?', options: { A: 'Playing music and painting', B: 'Serving food in the lord\'s hall', C: 'Fetching water, herding animals, and gardening', D: 'Leading soldiers into battle' }, answer: 'C' },
      { id: 'q5', text: 'How did religion influence medieval life?', options: { A: 'It was only practiced in cities', B: 'It influenced daily routines and community events', C: 'It had little effect on common people', D: 'It was mostly a secret belief' }, answer: 'B' },
      { id: 'q6', text: 'What did guilds do in medieval towns?', options: { A: 'Built castles for lords', B: 'Organized religious services', C: 'Trained workers and protected their rights', D: 'Fought battles to defend towns' }, answer: 'C' },
      { id: 'q7', text: 'Why were feast days important?', options: { A: 'People worked extra hours', B: 'It was when knights trained', C: 'It was a rare time for rest, fun, and community celebration', D: 'People went hunting with the king' }, answer: 'C' },
      { id: 'q8', text: 'How did the manor court work?', options: { A: 'It elected a village mayor', B: 'It punished villagers for minor crimes or disputes', C: 'It held musical performances', D: 'It served only the king’s family' }, answer: 'B' },
      { id: 'q9', text: 'What jobs could young boys like Edric hope to get?', options: { A: 'Shoemaker, weaver, or blacksmith through an apprenticeship', B: 'Banker or university professor', C: 'Ship captain or inventor', D: 'Politician or judge' }, answer: 'A' },
      { id: 'q10', text: 'How did villagers survive in winter?', options: { A: 'By planting new crops', B: 'By hunting large animals', C: 'By relying on stored food and community support', D: 'By traveling to warmer places' }, answer: 'C' },
      { id: 'q11', text: 'What is a serf?', options: { A: 'A soldier in the king’s army', B: 'A peasant legally tied to the land they work on', C: 'A merchant from another country', D: 'A priest who teaches children' }, answer: 'B' },
      { id: 'q12', text: 'What is a manor?', options: { A: 'A market stall', B: 'A large estate owned by a lord', C: 'A special tool for farming', D: 'A type of weapon' }, answer: 'B' },
      { id: 'q13', text: 'What is a guild?', options: { A: 'A group of musicians', B: 'A team of knights', C: 'An organization for skilled workers', D: 'A military group' }, answer: 'C' },
      { id: 'q14', text: 'What does "obligatory" mean?', options: { A: 'Optional', B: 'Very expensive', C: 'Required or necessary', D: 'Boring' }, answer: 'C' },
      { id: 'q15', text: 'Who were mummers?', options: { A: 'Silent monks', B: 'Village performers in plays', C: 'Town guards', D: 'Farmers from the forest' }, answer: 'B' },
      { id: 'q16', text: 'What does superstition mean?', options: { A: 'A scientific explanation', B: 'A festival involving music', C: 'A belief in magical or spiritual causes', D: 'A religious ceremony' }, answer: 'C' },
      { id: 'q17', text: 'What is an apprentice?', options: { A: 'A knight’s squire', B: 'A child who plays music', C: 'A person learning a trade from a skilled worker', D: 'A cook in the manor kitchen' }, answer: 'C' },
      { id: 'q18', text: 'What does humiliation mean in the text?', options: { A: 'A reward for hard work', B: 'Public embarrassment or shame as punishment', C: 'A fun dance at festivals', D: 'A type of church service' }, answer: 'B' },
      { id: 'q19', text: 'What is a monastery?', options: { A: 'A blacksmith’s workshop', B: 'A place where monks and nuns live and work', C: 'A tower for defense', D: 'A house for village leaders' }, answer: 'B' },
      { id: 'q20', text: 'What does hierarchical mean?', options: { A: 'Everyone is treated the same', B: 'People are ranked in levels of importance', C: 'A system of trade and money', D: 'A peaceful community' }, answer: 'B' },
      { id: 'q21', text: 'Where would life likely be easier for a peasant in medieval England?', options: { A: 'A city ruled by the king', B: 'A monastery', C: 'A town with a guild', D: 'A village manor' }, answer: 'C' },
      { id: 'q22', text: 'Why might some people think being a serf was unfair?', options: { A: 'They were paid too much', B: 'They had too much power', C: 'They were not allowed to leave the land', D: 'They owned many castles' }, answer: 'C' },
      { id: 'q23', text: 'How was the role of religion in medieval life different from today?', options: { A: 'Religion had no role at all', B: 'Religion was mostly ignored', C: 'Religion shaped daily life and laws', D: 'Religion was only for the rich' }, answer: 'C' },
      { id: 'q24', text: 'What was probably the hardest part of Edric’s life?', options: { A: 'Having too many friends', B: 'Studying in school', C: 'Doing daily chores with little rest', D: 'Traveling across the country' }, answer: 'C' },
      { id: 'q25', text: 'If you could join a medieval guild, which reason would be most likely?', options: { A: 'To become a knight', B: 'To avoid all work', C: 'To learn a skill and be protected as a worker', D: 'To go hunting with the king' }, answer: 'C' },
    ];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    let quizQuestions = [];
    let currentIndex = 0;
    let score = 0;

    function initQuiz() {
      shuffle(allQuestions);
      quizQuestions = allQuestions.slice(0, 10);
      currentIndex = 0;
      score = 0;
      showQuestion();
    }

    function showQuestion() {
      const q = quizQuestions[currentIndex];
      document.getElementById('question-number').textContent = 
        `Question ${currentIndex + 1} of ${quizQuestions.length}`;
      document.getElementById('question-text').textContent = q.text;

      const form = document.getElementById('quiz-form');
      form.innerHTML = '';
      for (let key of ['A','B','C','D']) {
        const label = document.createElement('label');
        label.className = 'option';
        label.innerHTML = `
          <input type="radio" name="answer" value="${key}">
          ${key}) ${q.options[key]}
        `;
        form.appendChild(label);
      }

      document.getElementById('action-btn').textContent = 'Next';
      document.getElementById('action-btn').disabled = true;

      form.addEventListener('change', () => {
        document.getElementById('action-btn').disabled = false;
      }, { once: true });
    }

    function handleNext() {
      const selected = document.querySelector('input[name="answer"]:checked');
      if (selected && selected.value === quizQuestions[currentIndex].answer) {
        score++;
      }

      currentIndex++;
      if (currentIndex < quizQuestions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      document.getElementById('quiz-header').style.display = 'none';
      document.getElementById('quiz-form').style.display = 'none';
      document.getElementById('action-btn').style.display = 'none';
      document.getElementById('result').textContent =
        `You scored ${score} out of ${quizQuestions.length}!`;
    }

    document.getElementById('action-btn').addEventListener('click', handleNext);
    window.addEventListener('load', initQuiz);