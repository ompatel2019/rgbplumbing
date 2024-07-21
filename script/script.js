function showAnswer() {
    const answerElements = document.getElementsByClassName('answer-1');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer2() {
    const answerElements = document.getElementsByClassName('answer-2');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer3() {
    const answerElements = document.getElementsByClassName('answer-3');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer4() {
    const answerElements = document.getElementsByClassName('answer-4');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function showAnswer5() {
    const answerElements = document.getElementsByClassName('answer-5');
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].classList.toggle('hidden');
    }
  }

  function sendMail(event) {
    event.preventDefault(); // Prevent default form submission
    const params = {
      name: document.getElementById("name").value,
      number: document.getElementById("number").value,
      message: document.getElementById("inquiry").value
    };

    emailjs.send("service_hlqb83b", "template_5upe538", params)
      .then(function(response) {
        alert("Email Sent Successfully!");
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        alert("Failed to send email. Please try again.");
        console.log('FAILED...', error);
      });
  }