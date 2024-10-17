document.getElementById('startGame').addEventListener('click', () => {
    fetch('http://localhost:3000/api/game/start-game')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = `Session ID: ${data.sessionId}`;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

document.getElementById('submit').addEventListener('click', () => {
    const answer = document.getElementById('answer').value;
    const sessionId = document.getElementById('message').textContent.split(': ')[1];

    fetch('http://localhost:3000/api/game/submit-answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sessionId: sessionId,
            answer: answer,
        }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = `Réponse soumise: ${data.answer}`;
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});