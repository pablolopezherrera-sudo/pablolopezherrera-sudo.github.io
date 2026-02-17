(() => {
  const quizForm = document.querySelector('#quiz-form');
  const quizResult = document.querySelector('#quiz-result');

  if (quizForm && quizResult) {
    const answers = { q1: 'b', q2: 'a', q3: 'c' };

    quizForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(quizForm);

      let score = 0;
      Object.entries(answers).forEach(([question, expected]) => {
        if (formData.get(question) === expected) {
          score += 1;
        }
      });

      quizResult.textContent = `Has acertado ${score} de 3 preguntas. ${
        score === 3
          ? '¡Excelente! Tu comprensión del tema es muy sólida.'
          : 'Repasa la sección de información para seguir aprendiendo.'
      }`;
    });
  }

  const empathyForm = document.querySelector('#empathy-form');
  const empathyInput = document.querySelector('#empathy-input');
  const empathyResult = document.querySelector('#empathy-result');

  if (empathyForm && empathyInput && empathyResult) {
    empathyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = empathyInput.value.trim();

      if (!message) {
        empathyResult.textContent = 'Por favor, escribe un compromiso antes de guardar.';
        return;
      }

      empathyResult.textContent = `Compromiso guardado: "${message}". Gracias por sumar apoyo real.`;
      empathyInput.value = '';
    });
  }
})();
