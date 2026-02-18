(() => {
  const quizForm = document.querySelector('#quiz-form');
  const quizResult = document.querySelector('#quiz-result');

  if (quizForm && quizResult) {
    const answers = { q1: 'b', q2: 'a', q3: 'c', q4: 'a' };

    quizForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(quizForm);

      let score = 0;
      Object.entries(answers).forEach(([question, expected]) => {
        if (formData.get(question) === expected) {
          score += 1;
        }
      });

      quizResult.textContent = `Has acertado ${score} de 4 preguntas. ${
        score >= 3
          ? '¡Muy bien! Tienes una base sólida para apoyar mejor.'
          : 'Sigue repasando: cada aprendizaje mejora el acompañamiento.'
      }`;
    });
  }

  const tfForm = document.querySelector('#true-false-form');
  const tfResult = document.querySelector('#tf-result');

  if (tfForm && tfResult) {
    const answers = { tf1: 'falso', tf2: 'verdadero' };

    tfForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(tfForm);

      let score = 0;
      Object.entries(answers).forEach(([question, expected]) => {
        if (formData.get(question) === expected) {
          score += 1;
        }
      });

      tfResult.textContent = `Resultado V/F: ${score}/2. ${
        score === 2 ? 'Excelente comprensión.' : 'Revisa la sección de información para afianzar conceptos.'
      }`;
    });
  }

  const supportPlanForm = document.querySelector('#support-plan-form');
  const supportProgress = document.querySelector('#support-progress');
  const supportResult = document.querySelector('#support-result');

  if (supportPlanForm && supportProgress && supportResult) {
    const updateProgress = () => {
      const checkboxes = [...supportPlanForm.querySelectorAll('input[type="checkbox"]')];
      const checked = checkboxes.filter((checkbox) => checkbox.checked).length;
      const percentage = Math.round((checked / checkboxes.length) * 100);

      supportProgress.style.width = `${percentage}%`;
      supportResult.textContent = `Progreso: ${percentage}% completado.`;
    };

    supportPlanForm.addEventListener('change', updateProgress);
    updateProgress();
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
